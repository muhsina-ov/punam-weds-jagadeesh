/**
 * Wedding details, event schedule, venue information, family compliments,
 * and background music configuration for Punam Bhakta & Jagdish Shahani.
 */

export interface EventItem {
  no: string;
  name: string;
  tagline?: string;
  date: string;
  time: string;
  venueName: string;
  address: string;
  description: string;
  dressCode?: string;
  inviteText?: string;
  host?: string;
  brideParents?: string;
  groomParents?: string;
  note?: string;
  image?: string;
}

export interface FamilyBranch {
  elder: string;
  subBranches?: {
    couple: string;
    children?: string[];
  }[];
  couplesOrSingles?: string[];
}

export const invitation = {
  couple: {
    bride: "Punam Bhakta",
    groom: "Jagdish Shahani",
    initials: "P & J",
    brideFirstName: "Punam",
    groomFirstName: "Jagdish",
  },
  /** ISO date-time of the main wedding ceremony (CST, Central Standard Time) */
  dateISO: "2026-12-23T17:00:00-06:00",
  dateLabel: "Wednesday, 23 December 2026",
  timeLabel: "Barat at 4:00 PM · Ceremony at 5:00 PM",
  
  venue: {
    name: "Humble Civic Center",
    address: "8233 Will Clayton Parkway, Humble, TX 77338",
    mapsQuery: "Humble Civic Center, 8233 Will Clayton Pkwy, Humble, TX 77338",
  },

  hotel: {
    name: "Sheraton IAH Houston",
    address: "15700 John F Kennedy Blvd, Houston, TX 77032",
    mapsQuery: "Sheraton Houston George Bush Intercontinental Airport, 15700 John F Kennedy Blvd, Houston, TX 77032",
    bookingUrl: "https://app.marriott.com/resview2?id=1787857084254&key=GRP&app=resvlink",
    note: "Special accommodation arranged for wedding guests near George Bush Intercontinental Airport.",
  },

  rsvp: {
    deadline: "October 15th, 2026",
    deadlineISO: "2026-10-15",
    callout: "Kindly RSVP by October 15th, 2026",
    url: "https://www.theknot.com/punamjagdish",
    note: "We look forward to celebrating this sacred union with our beloved family and friends.",
  },

  dressCode: "Gujarati Prints (Bandhej, Patola, Ajrak)",

  meta: {
    title: "Punam & Jagdish | Wedding Celebration Invitation",
    siteName: "Punam & Jagdish Wedding Celebration",
    description:
      "We joyfully invite you to celebrate the wedding of Punam Bhakta & Jagdish Shahani on December 22nd & 23rd, 2026 at Humble Civic Center, Texas. Join us for the Pithi, Wedding Ceremony & Reception.",
    url: "https://punam-weds-jagadeesh.invitingyou.top/",
    ogImage: "https://punam-weds-jagadeesh.invitingyou.top/og-image.jpg",
    imageWidth: 1200,
    imageHeight: 630,
    imageType: "image/jpeg",
    imageAlt: "Punam & Jagdish Royal Wedding Celebration Invitation",
  },

  hero: {
    sacredInvocation: "SHREE RAMKABIR SATYA CHHHE",
    kicker: "Together with their families",
    eyebrow: "Celebrate With Us",
    blessing: "Two souls, two families, bound in eternal love & devotion",
  },

  events: [
    {
      no: "01",
      name: "Pithi Ceremony",
      tagline: "The Golden Glow of Love",
      date: "Tuesday, December 22nd, 2026",
      time: "4:00 PM",
      venueName: "Humble Civic Center",
      address: "8233 Will Clayton Parkway, Humble, TX 77338",
      inviteText: "Join us for the golden glow of love and family traditions.",
      host: "Sureshbhai and Urmilaben Bhakta, with full hearts, joyfully invite you to their daughter Punam's Pithi Ceremony",
      description: "A joyful celebration of haldi, turmeric, music, and golden blessings as Punam and Jagdish prepare for their sacred union.",
      dressCode: "Gujarati Prints (Bandhej, Patola, Ajrak)",
      note: "Dinner to follow",
      image: "/images/ceremony-pithi.png",
    },
    {
      no: "02",
      name: "Wedding Day",
      tagline: "The Sacred Union",
      date: "Wednesday, December 23rd, 2026",
      time: "Barat 4:00 PM · Ceremony 5:00 PM",
      venueName: "Humble Civic Center",
      address: "8233 Will Clayton Parkway, Humble, TX 77338",
      inviteText: "Join us to celebrate the union of",
      brideParents: "Daughter of Sureshbhai and Urmilaben Bhakta",
      groomParents: "Son of Hiro and Poonam Shahani",
      description: "A celebratory Barat followed by the sacred Varmala (garland exchange), an intimate blessing ceremony, and heartfelt exchange of wedding vows uniting Punam and Jagdish in eternal love.",
      image: "/images/ceremony-wedding.png",
    },
    {
      no: "03",
      name: "Reception",
      tagline: "Let's Get the Party Started",
      date: "Wednesday, December 23rd, 2026",
      time: "Cocktail Hour / Dinner 6:30 PM – 8:30 PM · Reception 9:00 PM – 1:00 AM",
      venueName: "Humble Civic Center",
      address: "8233 Will Clayton Parkway, Humble, TX 77338",
      inviteText: "Join us as we toast, feast, and dance the night away in celebration of the newlyweds!",
      description: "An enchanting evening featuring cocktail hour, grand dinner banquet, heartfelt toasts, performances, and dancing until late.",
      image: "/images/ceremony-reception.png",
    },
  ],

  bgm: {
    youtubeId: "nFmSK6eSINU",
    title: "Wedding Storybook Melodies",
    startSeconds: 68, // 1:08
    endSeconds: 165,  // 2:45
  },

  familyCompliments: {
    sacredHeading: "SHREE RAMKABIR SATYA CHHHE",
    subheading: "Best Compliments",
    families: [
      {
        id: "derod",
        name: "KHUSHALBHAI & MALIBEN BHAKTA FAMILY (DEROD)",
        elders: "• LATE KUSHALBHAI & LATE MALIBEN",
        branches: [
          {
            elder: "LATE DHANSUKHBHAI & JASUBEN",
            subBranches: [
              {
                couple: "UPESHBHAI & NIMISHABEN",
                children: ["ANVI", "BHAVIN", "ANJALI", "ADITI"],
              },
              {
                couple: "VAISHALIBEN & MANISHBHAI",
                children: ["KAVI"],
              },
            ],
          },
          {
            elder: "SURESHBHAI & URMILABEN",
            subBranches: [
              {
                couple: "SAPNESHBHAI & RUPALBEN",
                children: ["ARNAV"],
              },
              {
                couple: "VIMALBHAI & RIMPLEBEN",
                children: ["AARYA", "VEERA", "RIVAAN"],
              },
            ],
            couplesOrSingles: ["PUNAMBEN"],
          },
          {
            elder: "RAVIBHAI, PRITIBEN & LATE NILAMBEN",
            subBranches: [
              {
                couple: "NIMESHBHAI & SWATIBEN",
                children: ["NIAM", "SAIRA"],
              },
            ],
            couplesOrSingles: ["PRISCILABEN"],
          },
          {
            elder: "LATE BHARATBHAI & LATE SUSHILABEN",
            subBranches: [
              {
                couple: "JIGNESHBHAI & DIPTIBEN",
                children: ["AYAN", "ARYAN"],
              },
            ],
            couplesOrSingles: ["PRAGNESH BHAI"],
          },
          {
            elder: "MADHUBEN & LATE VIJAYBHAI",
            couplesOrSingles: [
              "RAJESHBHAI & HEENABEN",
              "NILESHBHAI & ANABEN",
              "PARESHBHAI & MELISSABEN",
            ],
          },
          {
            elder: "SUSHILABEN & LATE GOVINDBHAI",
            couplesOrSingles: [
              "HEMANTBHAI & NIRALIBEN",
              "DARSHNABEN & VIPULBHAI",
            ],
          },
        ],
      },
      {
        id: "lotorva",
        name: "MAGHANBHAI & RAMILABEN BHAKTA FAMILY (LOTORVA)",
        elders: "• LATE MAGANBHAI & LATE RAMILABEN",
        members: [
          "URMILABEN & SURESHBHAI",
          "LATE JITESHBHAI & MITABEN",
          "PALAVIKABEN & ARUNBHAI",
          "SUNITABEN & KAMLESHBHAI",
          "HANSABEN & BHUPENDRABHAI",
        ],
      },
    ],
  },

  story: {
    title: "A Tapestry of Two Destinies",
    subtitle: "From gentle beginnings to a lifelong journey together",
    bride: {
      name: "Punam Bhakta",
      role: "The Bride",
      text: "Radiant, graceful, and full of warmth. Punam brings light, joy, and gentle wisdom wherever she goes, with a smile that brightens every room.",
    },
    groom: {
      name: "Jagdish Shahani",
      role: "The Groom",
      text: "Steadfast, thoughtful, and deeply devoted. Jagdish carries quiet strength, good humor, and a caring heart dedicated to honoring their bond.",
    },
  },

  footer: {
    sacredHeading: "SHREE RAMKABIR SATYA CHHHE",
    line1: "Come celebrate with us.",
    line2: "Bless our new beginning with your presence & love.",
    signoff: "With love and gratitude, Punam & Jagdish",
  },
} as const;
