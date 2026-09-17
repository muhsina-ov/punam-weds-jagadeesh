import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

WIDTH = 1200
HEIGHT = 630

# 1. Base Canvas - Elegant Royal Ivory / Warm Champagne (#FCF9F2)
bg = Image.new("RGBA", (WIDTH, HEIGHT), (252, 249, 242, 255))

# 2. Right Side: Palace Backdrop from hero-palace.jpg
palace_path = "src/assets/hero-palace.jpg"
if os.path.exists(palace_path):
    palace = Image.open(palace_path).convert("RGBA")
    # We want the palace and blush dawn sky on the right ~650px
    # Crop / resize to fill right side
    pw, ph = palace.size
    # crop lower-middle area showing palace and blush sky
    palace_crop = palace.crop((0, int(ph * 0.15), pw, int(ph * 0.85)))
    palace_resized = palace_crop.resize((700, HEIGHT), Image.Resampling.LANCZOS)
    
    # Create a smooth gradient mask for left-to-right fade
    mask = Image.new("L", (700, HEIGHT), 0)
    draw_mask = ImageDraw.Draw(mask)
    for x in range(700):
        # Fade in from x=0 to x=320, then full opacity
        if x < 320:
            alpha = int((x / 320.0) * 230)
        else:
            alpha = 230
        draw_mask.line([(x, 0), (x, HEIGHT)], fill=alpha)
        
    bg.paste(palace_resized, (WIDTH - 700, 0), mask)

# 3. Soft royal watercolor wash on left side to guarantee pristine legibility
left_wash = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
draw_wash = ImageDraw.Draw(left_wash)
# Draw gentle gradient from solid warm cream on left to translucent
for x in range(WIDTH):
    if x < 550:
        a = 245
    elif x < 780:
        a = int(245 * (1.0 - (x - 550) / 230.0))
    else:
        a = 0
    draw_wash.line([(x, 0), (x, HEIGHT)], fill=(253, 248, 239, a))
bg = Image.alpha_composite(bg, left_wash)

# 4. Couple Artwork from src/assets/couple-lanterns.png
couple_path = "src/assets/couple-lanterns.png"
if os.path.exists(couple_path):
    couple = Image.open(couple_path).convert("RGBA")
    cw, ch = couple.size
    target_h = 560
    target_w = int(cw * (target_h / ch))
    couple_resized = couple.resize((target_w, target_h), Image.Resampling.LANCZOS)
    
    # Soft warm backlight / halo behind couple
    halo = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    draw_halo = ImageDraw.Draw(halo)
    couple_cx = 930
    couple_cy = 340
    for r in range(240, 30, -20):
        alpha = int((1.0 - r / 240.0) * 80)
        draw_halo.ellipse(
            [couple_cx - r, couple_cy - r, couple_cx + r, couple_cy + r],
            fill=(255, 235, 180, alpha)
        )
    halo = halo.filter(ImageFilter.GaussianBlur(30))
    bg = Image.alpha_composite(bg, halo)
    
    # Soft drop shadow behind couple
    shadow = Image.new("RGBA", (target_w + 50, target_h + 50), (0, 0, 0, 0))
    c_mask = couple_resized.split()[3]
    shadow.paste((70, 30, 15, 90), (25, 25), mask=c_mask)
    shadow = shadow.filter(ImageFilter.GaussianBlur(18))
    
    couple_x = 830
    couple_y = 65
    bg.paste(shadow, (couple_x - 25, couple_y - 15), shadow)
    bg.paste(couple_resized, (couple_x, couple_y), couple_resized)

# 5. Bougainvillea watercolor branch along top right & corner
boug_path = "src/assets/bougainvillea.png"
if os.path.exists(boug_path):
    boug = Image.open(boug_path).convert("RGBA")
    bw, bh = boug.size
    # Top-right garland accent
    boug_resized = boug.resize((380, int(bh * (380 / bw))), Image.Resampling.LANCZOS)
    # Mirror horizontally for natural curve framing the top
    boug_flipped = boug_resized.transpose(Image.Transpose.FLIP_LEFT_RIGHT)
    bg.paste(boug_flipped, (WIDTH - 360, -35), boug_flipped)

# 6. Ornate Gold Borders and Framing
draw = ImageDraw.Draw(bg)
gold_dark = (168, 124, 42, 230)
gold_mid = (199, 153, 62, 210)
gold_light = (235, 206, 134, 180)
gold_fine = (180, 140, 55, 100)

# Outer margin = 18px
draw.rectangle([18, 18, WIDTH - 19, HEIGHT - 19], outline=gold_dark, width=2)
# Inner margin = 24px
draw.rectangle([25, 25, WIDTH - 26, HEIGHT - 26], outline=gold_fine, width=1)

# Four Corner Flourish Accents
corner_size = 28
for cx, cy, dx, dy in [
    (18, 18, 1, 1),
    (WIDTH - 19, 18, -1, 1),
    (18, HEIGHT - 19, 1, -1),
    (WIDTH - 19, HEIGHT - 19, -1, -1),
]:
    draw.line([(cx, cy), (cx + dx * corner_size, cy)], fill=gold_dark, width=3)
    draw.line([(cx, cy), (cx, cy + dy * corner_size)], fill=gold_dark, width=3)
    # Small diamond accent
    draw.polygon([
        (cx + dx * 13, cy + dy * 7),
        (cx + dx * 19, cy + dy * 13),
        (cx + dx * 13, cy + dy * 19),
        (cx + dx * 7, cy + dy * 13)
    ], fill=gold_mid)

# 7. Gold Flourish Asset divider on Left side
flourish_path = "src/assets/gold-flourish.png"
if os.path.exists(flourish_path):
    flourish = Image.open(flourish_path).convert("RGBA")
    fw, fh = flourish.size
    target_fw = 380
    target_fh = int(fh * (target_fw / fw))
    flourish_resized = flourish.resize((target_fw, target_fh), Image.Resampling.LANCZOS)
    bg.paste(flourish_resized, (56, 222), flourish_resized)

# 8. High Luxury Typography (Left Section)
# Fonts
font_marcellus_lg = ImageFont.truetype("Marcellus-Regular.ttf", 62)
font_marcellus_md = ImageFont.truetype("Marcellus-Regular.ttf", 26)
font_script_huge = ImageFont.truetype("GreatVibes-Regular.ttf", 74)
font_script_amp = ImageFont.truetype("GreatVibes-Regular.ttf", 52)
font_script_sub = ImageFont.truetype("C:/Windows/Fonts/georgiai.ttf", 18)
font_kicker = ImageFont.truetype("Marcellus-Regular.ttf", 13)
font_invoc = ImageFont.truetype("Marcellus-Regular.ttf", 14)
font_serif_bold = ImageFont.truetype("C:/Windows/Fonts/georgiab.ttf", 16)
font_serif_regular = ImageFont.truetype("C:/Windows/Fonts/georgia.ttf", 15)
font_serif_small = ImageFont.truetype("C:/Windows/Fonts/georgia.ttf", 13)
font_badge = ImageFont.truetype("C:/Windows/Fonts/georgiab.ttf", 13)

# Colors
maroon_deep = (90, 24, 38, 255)      # Primary wedding royal burgundy
gold_text = (156, 110, 32, 255)      # Deep warm gold
text_muted = (92, 70, 62, 240)       # Refined warm slate
cream_card_bg = (255, 253, 248, 235) # Details card background

# 8A. Sacred Invocation Badge at Top Left
invoc_text = "SHREE RAMKABIR SATYA CHHHE"
invoc_box = [56, 52, 380, 84]
draw.rounded_rectangle(invoc_box, radius=16, fill=(247, 238, 220, 230), outline=(199, 153, 62, 160), width=1)
draw.text((76, 60), invoc_text, font=font_invoc, fill=gold_text)

# 8B. Kicker Line
draw.text((58, 98), "TOGETHER WITH THEIR FAMILIES", font=font_kicker, fill=text_muted)

# 8C. Couple Names: Punam & Jagdish
# We render "Punam", "&" in calligraphy, "Jagdish"
draw.text((56, 126), "Punam", font=font_marcellus_lg, fill=maroon_deep)
# Ampersand in Great Vibes script
draw.text((272, 134), "&", font=font_script_amp, fill=gold_text)
draw.text((324, 126), "Jagdish", font=font_marcellus_lg, fill=maroon_deep)

# 8D. Blessing / Subtitle
blessing_text = "Two souls, two families, bound in eternal love & devotion"
draw.text((58, 268), blessing_text, font=font_script_sub, fill=(112, 58, 52, 255))

# 8E. Event Details Card
card_rect = [56, 308, 670, 485]
draw.rounded_rectangle(card_rect, radius=14, fill=cream_card_bg, outline=(204, 166, 85, 140), width=1)

# Gold vertical indicator bar inside card
draw.rounded_rectangle([72, 324, 76, 469], radius=2, fill=gold_mid)

# Date Line 1: Main Wedding
draw.text((94, 324), "WEDDING CEREMONY & CELEBRATION", font=font_kicker, fill=gold_text)
draw.text((94, 344), "Wednesday, 23 December 2026", font=font_serif_bold, fill=maroon_deep)
draw.text((94, 368), "Barat 4:00 PM  ·  Ceremony 5:00 PM  ·  Dinner & Reception", font=font_serif_small, fill=text_muted)

# Subtle separator line inside card
draw.line([(94, 396), (646, 396)], fill=(225, 205, 165, 160), width=1)

# Venue Line
draw.text((94, 410), "VENUE", font=font_kicker, fill=gold_text)
draw.text((94, 430), "Humble Civic Center", font=font_serif_bold, fill=maroon_deep)
draw.text((94, 452), "8233 Will Clayton Parkway, Humble, TX 77338", font=font_serif_small, fill=text_muted)

# 8F. Bottom Website / Production URL Badge
badge_rect = [56, 516, 430, 562]
draw.rounded_rectangle(badge_rect, radius=23, fill=maroon_deep, outline=(199, 153, 62, 190), width=1)
# Small gold diamond
draw.polygon([
    (78, 539),
    (84, 533),
    (90, 539),
    (84, 545)
], fill=gold_light)
draw.text((102, 530), "punam-weds-jagadeesh.invitingyou.top", font=font_badge, fill=(250, 240, 220, 255))

# Save optimized lossless/near-lossless images
# 1. RGB JPEG with optimize=True, progressive=True, quality=90
rgb_img = bg.convert("RGB")
rgb_img.save("public/og-image.jpg", "JPEG", quality=90, optimize=True, progressive=True)
rgb_img.save("public/og-card.jpg", "JPEG", quality=90, optimize=True, progressive=True)

# Also save PNG version in public as well
bg.save("public/og-image.png", "PNG", optimize=True)

print("Generated og-image.jpg, og-card.jpg, and og-image.png successfully!")
