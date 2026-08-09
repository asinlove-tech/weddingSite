// ------------------------------------------------------------------
// Central content & configuration for the invitation.
// Replace the PLACEHOLDER urls below with the real links when ready.
// ------------------------------------------------------------------

export const images = {
    temple: "/images/gopuram.webp",
    ganesha: "/images/ganesha-clean.png",
    ganeshaFramed: "/images/ganesha-framed.png",
    cocktail: "/images/cocktail.webp",
    mandap: "/images/mandap-new.webp",
    venue: "/images/venue-car.png",
    pattern: "/images/pattern.webp",
};

export const couple = {
    groom: "Amit Kumar",
    bride: "Sri Sakthi Maheswari",
    and: "Weds",
};

export const blessing = {
    overline: "With the blessings of our parents and elders,",
    invite: "we joyfully invite you to celebrate the wedding of",
    join: "&",
    dateLine: "On 25th October 2026",
    placeLine: "in Coimbatore",
    request: "and request the pleasure of your presence as we celebrate this beautiful beginning together.",
};

export const events = [
    {
        id: "cocktail",
        title: "Cocktail Evening",
        date: "24 October",
        time: "6 PM onwards",
        image: images.cocktail,
        alt: "Illustration of the couple dancing at their cocktail evening",
    },
    {
        id: "muhurtham",
        title: "Muhurtham",
        date: "25 October",
        time: "7 AM onwards",
        image: images.mandap,
        alt: "Illustration of the couple seated in the wedding mandap",
    },
];

export const venue = {
    title: "Venue",
    place: "Bellezza Event Venue",
    note: "Coimbatore, Tamil Nadu",
    image: images.venue,
    imageAlt: "Illustration of a little vintage car decorated with wedding garlands",
    mapsLabel: "View on Google Maps",
    mapsUrl: "https://maps.app.goo.gl/sFnxQgQYNtkiukdM6",
};

export const meetTheCouple = {
    title: "Meet the Couple",
    intro: "A little bit of chaos, a lot of laughter, plenty of food, and one very long list of things we've decided to do together. Here's to many more stories, detours, and meals along the way.",
    photos: [
        { src: images.cocktail, alt: "The couple dancing, illustrated", pos: "center 30%" },
        { src: images.mandap, alt: "The couple in the wedding mandap, illustrated", pos: "center 35%" },
        { src: images.temple, alt: "South Indian temple gopuram, illustrated", pos: "center 12%" },
        { src: images.ganeshaFramed, alt: "Lord Ganesha golden line artwork", pos: "center" },
    ],
};

export const infoSection = {
    title: "Things to Know",
    cards: [
        {
            id: "weather",
            icon: "weather",
            title: "Weather",
            text: "Warm days, pleasant evenings, and a chance of a passing shower or two. Come prepared for sunshine, a little rain, and plenty of celebration.",
        },
        {
            id: "attire",
            icon: "attire",
            title: "Traditional Attire",
            text: "We would love to see you in your festive best — silk sarees, veshtis, kurta sets and everything in between.",
        },
        {
            id: "travel",
            icon: "travel",
            title: "Travel Tips",
            text: "Coimbatore is well connected by air, rail and road. We recommend arriving a day early to settle in and celebrate with us.",
        },
        {
            id: "explore",
            icon: "explore",
            title: "While You're in Coimbatore",
            text: "Temples, hills, good food and filter coffee — a few of our favourites for a little adventure beyond the wedding.",
            linkLabel: "Read our recommendations",
            href: "https://docs.google.com/document/d/1TJGqHQL5oteEY-SzmfUG_-QxhH_1EzXVdTcAJb7jHKw/edit?usp=sharing",
        },
    ],
};

export const rsvp = {
    title: "RSVP",
    note: "We're excited to hear from you! Kindly let us know if you can join us — please RSVP by September 25th.",
    buttonLabel: "RSVP",
    // PLACEHOLDER: replace with the RSVP form / contact link
    url: "#rsvp",
    contact: "",
};

export const wishlist = {
    title: "Wedding Wishlist",
    message:
        "Your presence is the best gift ❤️ But if you'd like to spoil us a little, feel free to gift us anything you fancy! We've also put together a wishlist if you need some inspiration — claim a gift, or chip in towards one with the gang. Solo mission or group project, totally up to you!",
    buttonLabel: "View Wishlist",
    url: "https://hazlnut.in/wishlist/asinlove",
};

export const closing = {
    lines: [
        "Thank you for being part of our story.",
        "Having you with us as we begin this new chapter will make it all the more special.",
        "We can't wait to celebrate together in Coimbatore.",
    ],
    signoffPre: "With love,",
    signoffNames: "Amit & Sakthi",
    signoffPost: "and our families",
};
