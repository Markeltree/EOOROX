// Central place for brand, contact and social details used across the site.
// Fill these in before going live. Any value left as an empty string is
// hidden automatically, so nothing broken or fake shows up on the site.

const siteConfig = {
    brandName: 'Eoorox',
    tagline: 'Competitive esports organization',

    // Contact details
    email: 'contact@eoorox.com',        // REPLACE with your real inbox
    phone: '',                           // e.g. '+91 98765 43210'
    address: '',                         // e.g. 'Mumbai, India'
    supportHours: 'Monday to Friday, 10:00 AM to 7:00 PM',

    // Number shown on the "years" badge in the About section
    yearsActive: '5',                    // REPLACE with the real number

    // Social and streaming links (full URLs). Leave empty to hide the icon.
    social: {
        twitch: '',
        youtube: '',
        instagram: '',
        twitter: '',
        facebook: '',
        discord: '',
    },
};

// Where the "watch" play buttons point: Twitch first, then YouTube.
export const streamUrl = siteConfig.social.twitch || siteConfig.social.youtube;

export default siteConfig;
