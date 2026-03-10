module.exports = {
    name: "Steel & Concrete Pros",
    email: "quote@scllc.pro",
    phoneForTel: "318-383-0070",
    phoneFormatted: "(318) 383-0070",
    address: {
        lineOne: "6569 Colquitt Rd",
        lineTwo: "",
        city: "Keithville",
        state: "LA",
        zip: "71047",
        country: "US",
        mapLink: "https://maps.app.goo.gl/i3KDCo38tDTWwe5X6",
    },
    socials: {
        facebook: "https://www.facebook.com/profile.php?id=61559730231208",
        instagram: "https://www.instagram.com/steelandconcretepros?igsh=NHRnNDRqOWFzc2Fn",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.steelandconcretepros.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};




