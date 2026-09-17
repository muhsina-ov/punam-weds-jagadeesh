import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Volume2, VolumeX, Play, Pause, Music } from "lucide-react";
import { invitation } from "@/content/invitation";

declare global {
  interface Window {
    YT?: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [ready, setReady] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const playerRef = useRef<any>(null);
  const loopIntervalRef = useRef<any>(null);

  const startSec = invitation.bgm.startSeconds; // 68
  const endSec = invitation.bgm.endSeconds;     // 165

  useEffect(() => {
    // Load YouTube IFrame Player API code asynchronously
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
    }

    const initPlayer = () => {
      if (!window.YT || !window.YT.Player) return;
      
      playerRef.current = new window.YT.Player("youtube-bgm-player", {
        height: "1",
        width: "1",
        videoId: invitation.bgm.youtubeId,
        playerVars: {
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          start: startSec,
          origin: window.location.origin,
        },
        events: {
          onReady: (event: any) => {
            setReady(true);
            event.target.seekTo(startSec, true);
          },
          onStateChange: (event: any) => {
            // YT.PlayerState.PLAYING = 1, PAUSED = 2, ENDED = 0
            if (event.data === 1) {
              setIsPlaying(true);
            } else if (event.data === 2 || event.data === 0) {
              setIsPlaying(false);
            }
          },
        },
      });
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    // Listen for custom trigger from IntroGate envelope unseal
    const handleIntroOpen = () => {
      if (playerRef.current && typeof playerRef.current.playVideo === "function") {
        try {
          playerRef.current.seekTo(startSec, true);
          playerRef.current.unMute();
          playerRef.current.playVideo();
          setIsPlaying(true);
          setShowNotification(true);
          setTimeout(() => setShowNotification(false), 4000);
        } catch {
          // Autoplay may be restricted until user interacts
        }
      }
    };

    window.addEventListener("unseal-invitation", handleIntroOpen);

    return () => {
      window.removeEventListener("unseal-invitation", handleIntroOpen);
      if (loopIntervalRef.current) clearInterval(loopIntervalRef.current);
    };
  }, [startSec, endSec]);

  // Monitor playback position to loop precisely between startSec (68s) and endSec (165s)
  useEffect(() => {
    if (isPlaying) {
      loopIntervalRef.current = setInterval(() => {
        if (playerRef.current && typeof playerRef.current.getCurrentTime === "function") {
          const current = playerRef.current.getCurrentTime();
          if (current >= endSec || current < startSec - 2) {
            playerRef.current.seekTo(startSec, true);
          }
        }
      }, 400);
    } else {
      if (loopIntervalRef.current) clearInterval(loopIntervalRef.current);
    }

    return () => {
      if (loopIntervalRef.current) clearInterval(loopIntervalRef.current);
    };
  }, [isPlaying, startSec, endSec]);

  const togglePlay = () => {
    if (!playerRef.current) return;
    try {
      if (isPlaying) {
        playerRef.current.pauseVideo();
        setIsPlaying(false);
      } else {
        const cur = playerRef.current.getCurrentTime();
        if (cur < startSec || cur >= endSec) {
          playerRef.current.seekTo(startSec, true);
        }
        playerRef.current.unMute();
        playerRef.current.playVideo();
        setIsPlaying(true);
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 4000);
      }
    } catch (e) {
      console.error("Audio playback error:", e);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!playerRef.current) return;
    try {
      if (isMuted) {
        playerRef.current.unMute();
        setIsMuted(false);
      } else {
        playerRef.current.mute();
        setIsMuted(true);
      }
    } catch (e) {
      console.error("Mute error:", e);
    }
  };

  return (
    <>
      {/* Hidden YouTube iframe */}
      <div className="pointer-events-none fixed -top-[1000px] -left-[1000px] h-1 w-1 opacity-0 overflow-hidden">
        <div id="youtube-bgm-player" />
      </div>

      {/* Floating Gold Audio Player Button */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <AnimatePresence>
          {showNotification && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.95 }}
              className="glass-plate hidden sm:flex items-center gap-2 rounded-full px-4 py-2 text-[0.68rem] tracking-wider text-primary shadow-lg"
            >
              <Music size={13} className="text-gold-deep animate-pulse" />
              <span>Playing: Punam &amp; Jagdish's Wedding Theme</span>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex items-center"
        >
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause background music" : "Play background music"}
            className={`glass-plate flex items-center gap-2.5 rounded-full px-3.5 py-2.5 shadow-xl transition-all duration-300 ${
              isPlaying
                ? "border-gold/80 bg-cream/90 shadow-[0_0_24px_rgba(202,160,82,0.35)]"
                : "border-primary/20 bg-ivory/80 opacity-90"
            }`}
          >
            {/* Animated sound bars */}
            <div className="flex items-end gap-[3px] h-3.5 w-3.5">
              {[0.4, 0.9, 0.6, 0.3].map((height, i) => (
                <motion.span
                  key={i}
                  className="w-[2.5px] rounded-full bg-gold-deep"
                  animate={
                    isPlaying && !isMuted
                      ? {
                          height: [`${height * 100}%`, `${(1 - height) * 100}%`, `${height * 100}%`],
                        }
                      : { height: "25%" }
                  }
                  transition={{
                    duration: 0.6 + i * 0.15,
                    repeat: isPlaying && !isMuted ? Infinity : 0,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            <span className="font-sans text-[0.65rem] font-medium tracking-[0.24em] text-primary uppercase">
              {isPlaying ? "Music" : "Play BGM"}
            </span>

            {isPlaying ? (
              <Pause size={14} className="text-gold-deep" />
            ) : (
              <Play size={14} className="text-gold-deep fill-gold-deep/20 ml-0.5" />
            )}

            {isPlaying && (
              <button
                type="button"
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute music" : "Mute music"}
                className="ml-0.5 rounded-full p-1 text-primary/70 hover:text-primary transition-colors"
              >
                {isMuted ? (
                  <VolumeX size={13} className="text-rose" />
                ) : (
                  <Volume2 size={13} className="text-primary" />
                )}
              </button>
            )}
          </button>
        </motion.div>
      </div>
    </>
  );
}
