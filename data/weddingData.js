/**
 * Neo Digital Studio - Master Wedding Data Architecture
 * Dynamic, fully customizable data model for luxury Indian digital wedding invitations.
 */

window.weddingDataDefault = {
  studio: {
    name: "Arun & Reshma",
    tagline: "Sacred Wedding Invitation",
    year: "2026"
  },

  sacred: {
    ganapathiEmblem: "assets/ganapathi.png",
    themeBackdrop: "assets/Theme.jpg",
    mantra: "॥ श्री गणेशाय नमः ॥",
    blessing: "Vakratunda Mahakaya Suryakoti Samaprabha • Nirvighnam Kuru Me Deva Sarvakaryeshu Sarvada"
  },

  invitation: {
    eyebrow: "THE WEDDING CELEBRATION",
    coupleDisplay: "Arun Raj GK & Reshma S",
    groomName: "ARUN RAJ GK",
    brideName: "RESHMA S",
    date: "Saturday, October 31, 2026",
    time: "11:48 AM · Muhurtham",
    muhurthamTime: "11:48 AM – 12:12 PM",
    sweekaranamTime: "10:45 AM",
    receptionDate: "Friday, October 30, 2026",
    receptionTime: "4:00 PM – 8:00 PM",
    eventDateTimeISO: "2026-10-31T11:48:00+05:30",
    message: "Together with our families, we joyfully invite you to celebrate our union.",
    verse: "Cordially invite your esteemed presence with family on the occasion of the marriage of our daughter",
    subheading: "Reshma S (Ponnu) with Arun Raj GK",
    musicUrl: "assets/wedding_music.mp3",
    hosts: {
      inviters: "Mr. Sureshkumar. T & Mrs. Sandhya. K",
      address: "Ashiyana, MLA Road, Aramada Jn., Thrikkannapuram P.O., Thiruvananthapuram",
      phones: ["9746645145", "9633362643"]
    },
    bestWishes: "With best wishes from : Meenu, Appu, Deva"
  },

  couple: {
    couplePhoto: "assets/couple.jpg",
    groom: {
      name: "Arun Raj GK",
      fullName: "Arun Raj GK",
      relationTitle: "SON OF",
      parents: "Mr. N. Raju & Mrs. Geetha Raju",
      photo: "assets/groom.jpg",
      familyCity: "Kailas, Ambujavilasam Road, Vanchiyoor P.O., Thiruvananthapuram"
    },
    bride: {
      name: "Reshma S",
      nickname: "(Ponnu)",
      fullName: "Reshma S (Ponnu)",
      relationTitle: "DAUGHTER OF",
      parents: "Mr. Sureshkumar. T & Mrs. Sandhya. K",
      photo: "assets/bride.jpg",
      familyCity: "Ashiyana, MLA Road, Aramada Jn., Thrikkannapuram P.O., Thiruvananthapuram",
      phones: "Ph: 9746645145, 9633362643"
    }
  },

  // 4. CELEBRATION SCHEDULE / WEDDING EVENTS
  eventsSection: {
    eyebrow: "WEDDING EVENTS",
    title: "CELEBRATION SCHEDULE",
    subtitle: "“Every ritual, every moment — beautifully planned for family and friends.”",
    events: [
      {
        id: "evt-1",
        category: "GALA RECEPTION",
        icon: "celebration",
        title: "Wedding Reception",
        description: "An evening of warm blessings, heartfelt wishes, and dinner celebration with family and friends ahead of the sacred union.",
        date: "Friday, October 30, 2026",
        time: "From 4:00 PM to 8:00 PM",
        venue: "Karthika Auditorium, Attukal, Thiruvananthapuram",
        mapsUrl: "https://maps.google.com/?q=Karthika+Auditorium+Attukal+Thiruvananthapuram",
        directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Karthika+Auditorium+Attukal+Thiruvananthapuram"
      },
      {
        id: "evt-2",
        category: "TRADITIONAL WELCOME",
        icon: "om",
        title: "Sweekaranam",
        description: "Traditional auspicious welcome ceremony receiving the groom and family with blessings and prayer.",
        date: "Saturday, October 31, 2026",
        time: "10:45 AM",
        venue: "Karthika Auditorium, Attukal, Thiruvananthapuram",
        mapsUrl: "https://maps.google.com/?q=Karthika+Auditorium+Attukal+Thiruvananthapuram",
        directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Karthika+Auditorium+Attukal+Thiruvananthapuram"
      },
      {
        id: "evt-3",
        category: "THE SACRED MUHURAT",
        icon: "vivah",
        title: "Wedding Ceremony (Muhurtham)",
        description: "Sacred Thalikettu and traditional Vedic wedding rituals uniting Arun Raj & Reshma in auspicious holy matrimony.",
        date: "Saturday, October 31, 2026",
        time: "11:48 AM – 12:12 PM",
        venue: "Karthika Auditorium, Attukal, Thiruvananthapuram",
        mapsUrl: "https://maps.google.com/?q=Karthika+Auditorium+Attukal+Thiruvananthapuram",
        directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Karthika+Auditorium+Attukal+Thiruvananthapuram"
      }
    ]
  },

  // 5. COUNTDOWN
  countdown: {
    eyebrow: "SACRED MUHURAT",
    title: "COUNTDOWN TO THE BIG DAY",
    subtitle: "“The auspicious moment is getting closer.”",
    targetDateTimeISO: "2026-10-31T11:48:00+05:30",
    completedMessage: "THE AUSPICIOUS DAY HAS ARRIVED"
  },

  // 6. VENUE & TRAVEL
  venueAndTravel: {
    eyebrow: "VENUE GUIDE",
    title: "VENUE & LOCATION",
    subtitle: "“Save the date and join us with ease.”",
    venues: [
      {
        id: "ven-1",
        eventName: "Wedding Reception",
        date: "Friday, October 30, 2026",
        time: "04:00 PM – 08:00 PM",
        venueName: "Karthika Auditorium, Attukal",
        address: "Attukal, Manacaud P.O., Thiruvananthapuram, Kerala 695009",
        mapsUrl: "https://maps.google.com/?q=Karthika+Auditorium+Attukal+Thiruvananthapuram",
        directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Karthika+Auditorium+Attukal+Thiruvananthapuram",
        mapQuery: "Karthika+Auditorium+Attukal+Thiruvananthapuram"
      },
      {
        id: "ven-2",
        eventName: "Sweekaranam & Wedding Ceremony",
        date: "Saturday, October 31, 2026",
        time: "Sweekaranam: 10:45 AM · Muhurtham: 11:48 AM – 12:12 PM",
        venueName: "Karthika Auditorium, Attukal",
        address: "Attukal, Manacaud P.O., Thiruvananthapuram, Kerala 695009",
        mapsUrl: "https://maps.google.com/?q=Karthika+Auditorium+Attukal+Thiruvananthapuram",
        directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Karthika+Auditorium+Attukal+Thiruvananthapuram",
        mapQuery: "Karthika+Auditorium+Attukal+Thiruvananthapuram"
      }
    ],
    travelNotes: [
      "Karthika Auditorium is conveniently located near the renowned Attukal Bhagavathy Temple in Thiruvananthapuram.",
      "The venue is easily accessible from Thiruvananthapuram Central Railway Station (approx. 3.5 km) and Trivandrum International Airport (approx. 6 km).",
      "Guests are cordially requested to arrive by 10:30 AM on Saturday, October 31st for the Sweekaranam ceremony.",
      "Contact for assistance: Mr. Sureshkumar T (Ph: 9746645145, 9633362643) or Mr. N. Raju."
    ]
  },

  // 9. LIVE STREAM
  liveStream: {
    enabled: false,
    badge: "🔴 LIVE STREAM",
    title: "WATCH LIVE",
    subtitle: "Can't make it in person? Join us virtually as we celebrate this beautiful moment together.",
    streamUrl: "",
    buttonText: "JOIN LIVE STREAM",
    platform: "Live Broadcast",
    broadcastTime: "October 31, 2026 · 11:30 AM IST"
  }
};

// Initialize working dataset
window.weddingData = window.weddingDataDefault;
