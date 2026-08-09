// ------------------------------------------------------------------
// Central content & configuration for the invitation.
// Replace the PLACEHOLDER urls below with the real links when ready.
// ------------------------------------------------------------------

export const images = {
    temple: "/images/gopuram.webp",
    ganesha: "/images/ganesha.webp",
    cocktail: "/images/cocktail.webp",
    mandap: "/images/mandap.webp",
};

export const couple = {
    groom: "Amit Kumar",
    bride: "Sri Sakthi Maheswari",
    and: "And",
};

export const blessing = {
    overline: "With the heavenly blessings of",
    brideFamily: "Bride's Family",
    groomFamily: "Groom's Family",
    invite: "We invite you to celebrate the wedding of",
    join: "and",
    request:
        "and request the pleasure of your presence at our wedding celebrations.",
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
        time: "8 AM onwards",
        image: images.mandap,
        alt: "Illustration of the couple seated in the wedding mandap",
    },
];

export const venue = {
    title: "Venue",
    place: "Coimbatore, Tamil Nadu",
    note: "The celebration venue will be announced here soon.",
    image: images.temple,
    imageAlt: "Illustration of a South Indian temple gopuram",
    mapsLabel: "View on Google Maps",
    // PLACEHOLDER: replace with the exact venue Google Maps link
    mapsUrl: "https://maps.google.com/?q=Coimbatore",
};

export const meetTheCouple = {
    title: "Meet the Couple",
    intro: "Some stories are written over years; ours found its way home. What began as two separate journeys now continues as one — and we cannot imagine a more joyful beginning than celebrating it surrounded by the people we love most.",
    photos: [
        { src: images.cocktail, alt: "The couple dancing, illustrated" },
        { src: images.mandap, alt: "The couple in the wedding mandap, illustrated" },
        { src: images.temple, alt: "South Indian temple gopuram, illustrated" },
        { src: images.ganesha, alt: "Lord Ganesha line artwork" },
    ],
};

export const infoSection = {
    title: "Things to Know",
    cards: [
        {
            id: "weather",
            icon: "weather",
            title: "Weather",
            text: "Late October in Coimbatore is warm and pleasant — expect gentle days around 30°C and cooler, breezy evenings.",
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
            title: "Things to Do Around Coimbatore",
            text: "Temple towns, misty hills and filter coffee — our curated guide has all our favourites for a little side trip.",
            // PLACEHOLDER: replace with the travel recommendations document URL
            href: "#travel-guide",
        },
    ],
};

export const rsvp = {
    title: "RSVP",
    note: "Kindly let us know if you can join us — we can't wait to hear from you.",
    buttonLabel: "RSVP",
    // PLACEHOLDER: replace with the RSVP form / contact link
    url: "#rsvp",
    contact: "For any questions, please reach out to the family.",
};

export const wishlist = {
    title: "Wedding Wishlist",
    message:
        "Your presence is the greatest gift we could ask for. If you'd still like to bless us with a gift, we've put together a small wishlist. You're welcome to reserve an entire gift, contribute toward a shared one, or choose something completely different.",
    buttonLabel: "View Wishlist",
    // PLACEHOLDER: replace with the wishlist URL
    url: "#wishlist",
};

export const closing = {
    lines: [
        "Thank you for being part of our story.",
        "Your presence and blessings will make our celebration complete.",
        "We can't wait to welcome you to Coimbatore.",
    ],
    signoff: "Amit Kumar and Sri Sakthi Maheswari",
};
