import siteConfig from '../../../siteConfig';

const icons = {
    facebook: 'fab fa-facebook-f',
    twitter: 'fab fa-twitter',
    instagram: 'fab fa-instagram',
    youtube: 'fab fa-youtube',
    twitch: 'fab fa-twitch',
    discord: 'fab fa-discord',
};

// Renders an icon link for every social URL filled in siteConfig.
const SocialLinks = () => {
    return Object.entries(siteConfig.social)
        .filter(([, url]) => url)
        .map(([name, url]) => (
            <a key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={name}>
                <i className={icons[name]}></i>
            </a>
        ));
}

export const hasSocialLinks = Object.values(siteConfig.social).some(Boolean);

export default SocialLinks;
