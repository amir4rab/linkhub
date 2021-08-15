//** importing light logos **//
import behanceDarkLogo from './../../public/logos/dark/behance.svg';
import codepenDarkLogo from './../../public/logos/dark/codepen.svg';
import codesandboxDarkLogo from './../../public/logos/dark/codesandbox.svg';
import dribbleDarkLogo from './../../public/logos/dark/dribble.svg';
import facebookDarkLogo from './../../public/logos/dark/facebook.svg';
import instagramDarkLogo from './../../public/logos/dark/instagram.svg';
import linkedinDarkLogo from './../../public/logos/dark/linkedin.svg';
import netlifyDarkLogo from './../../public/logos/dark/netlify.svg';
import aparatDarkLogo from './../../public/logos/dark/aparat.svg';
import snapchatDarkLogo from './../../public/logos/dark/snapchat.svg';
import soundcloudDarkLogo from './../../public/logos/dark/soundcloud.svg';
import spotifyDarkLogo from './../../public/logos/dark/spotify.svg';
import telegramDarkLogo from './../../public/logos/dark/telegram.svg';
import tiktokDarkLogo from './../../public/logos/dark/tiktok.svg';
import twitchDarkLogo from './../../public/logos/dark/twitch.svg';
import twitterDarkLogo from './../../public/logos/dark/twitter.svg';
import vercelDarkLogo from './../../public/logos/dark/vercel.svg';
import vkDarkLogo from './../../public/logos/dark/vk.svg';
import whatsappDarkLogo from './../../public/logos/dark/whatsapp.svg';
import youtubeDarkLogo from './../../public/logos/dark/youtube.svg';

//** importing dark logos **//
import behanceLightLogo from './../../public/logos/light/behance.svg';
import codepenLightLogo from './../../public/logos/light/codepen.svg';
import codesandboxLightLogo from './../../public/logos/light/codesandbox.svg';
import dribbleLightLogo from './../../public/logos/light/dribble.svg';
import facebookLightLogo from './../../public/logos/light/facebook.svg';
import instagramLightLogo from './../../public/logos/light/instagram.svg';
import linkedinLightLogo from './../../public/logos/light/linkedin.svg';
import netlifyLightLogo from './../../public/logos/light/netlify.svg';
import aparatLightLogo from './../../public/logos/light/aparat.svg';
import snapchatLightLogo from './../../public/logos/light/snapchat.svg';
import soundcloudLightLogo from './../../public/logos/light/soundcloud.svg';
import spotifyLightLogo from './../../public/logos/light/spotify.svg';
import telegramLightLogo from './../../public/logos/light/telegram.svg';
import tiktokLightLogo from './../../public/logos/light/tiktok.svg';
import twitchLightLogo from './../../public/logos/light/twitch.svg';
import twitterLightLogo from './../../public/logos/light/twitter.svg';
import vercelLightLogo from './../../public/logos/light/vercel.svg';
import vkLightLogo from './../../public/logos/light/vk.svg';
import whatsappLightLogo from './../../public/logos/light/whatsapp.svg';
import youtubeLightLogo from './../../public/logos/light/youtube.svg';

export const dataArr = [
    {
        'name': 'spotify',
        'schema': `https://open.spotify.com/artist/$VALUE`,
        'path': (value) => `https://open.spotify.com/artist/${value}`,
        'darkLogo': spotifyDarkLogo,
        'lightLogo': spotifyLightLogo,
    },
    {
        'name': 'twitter',
        'schema': `https://twitter.com/$VALUE`,
        'path': (value) => `https://twitter.com/${value}`,
        'darkLogo': twitterDarkLogo,
        'lightLogo': twitterLightLogo,
    },
    {
        'name': 'vercel',
        'schema': `https://$VALUE.vercel.app`,
        'path': (value) => `https://${value}.vercel.app`,
        'darkLogo': vercelDarkLogo,
        'lightLogo': vercelLightLogo,
    },
    {
        'name': 'vk',
        'schema': `https://vk.com/$VALUE`,
        'path': (value) => `https://vk.com/${value}`,
        'darkLogo': vkDarkLogo,
        'lightLogo': vkLightLogo,
    },
    {
        'name': 'whatsapp',
        'schema': `https://wa.me/$VALUE`,
        'path': (value) => `https://wa.me/${value}`,
        'darkLogo': whatsappDarkLogo,
        'lightLogo': whatsappLightLogo,
    },
    {
        'name': 'youtube',
        'schema': `https://www.youtube.com/c/$VALUE`,
        'path': (value) => `https://www.youtube.com/c/${value}`,
        'darkLogo': youtubeDarkLogo,
        'lightLogo': youtubeLightLogo,
    },
    {
        'name': 'telegram',
        'schema': `https://t.me/$VALUE`,
        'path': (value) => `https://t.me/${value}`,
        'darkLogo': telegramDarkLogo,
        'lightLogo': telegramLightLogo,
    },
    {
        'name': 'tiktok',
        'schema': `https://www.tiktok.com/@$VALUE`,
        'path': (value) => `https://www.tiktok.com/@${value}`,
        'darkLogo': tiktokDarkLogo,
        'lightLogo': tiktokLightLogo,
    },
    {
        'name': 'twitch',
        'schema': `https://www.twitch.tv/$VALUE`,
        'path': (value) => `https://www.twitch.tv/${value}`,
        'darkLogo': twitchDarkLogo,
        'lightLogo': twitchLightLogo,
    },
    {
        'name': 'behance',
        'schema': `https://www.behance.net/$VALUE`,
        'path': (value) => `https://www.behance.net/${value}`,
        'darkLogo': behanceDarkLogo,
        'lightLogo': behanceLightLogo,
    },
    {
        'name': 'codepen',
        'schema': `https://codepen.io/$VALUE`,
        'path': (value) => `https://codepen.io/${value}`,
        'darkLogo': codepenDarkLogo,
        'lightLogo': codepenLightLogo,
    },
    {
        'name': 'codesandbox',
        'schema': `https://codesandbox.io/u/$VALUE`,
        'path': (value) => `https://codesandbox.io/u/${value}`,
        'darkLogo': codesandboxDarkLogo,
        'lightLogo': codesandboxLightLogo,
    },
    {
        'name': 'dribbble',
        'schema': `https://dribbble.com/$VALUE`,
        'path': (value) => `https://dribbble.com/${value}`,
        'darkLogo': dribbleDarkLogo,
        'lightLogo': dribbleLightLogo,
    },
    {
        'name': 'facebook',
        'schema': `https://facebook.com/$VALUE`,
        'path': (value) => `https://facebook.com/${value}`,
        'darkLogo': facebookDarkLogo,
        'lightLogo': facebookLightLogo,
    },
    {
        'name': 'instagram',
        'schema': `https://instagram.com/$VALUE`,
        'path': (value) => `https://instagram.com/${value}`,
        'darkLogo': instagramDarkLogo,
        'lightLogo': instagramLightLogo,
    },
    {
        'name': 'linkedin',
        'schema': `https://www.linkedin.com/in/$VALUE`,
        'path': (value) => `https://www.linkedin.com/in/${value}`,
        'darkLogo': linkedinDarkLogo,
        'lightLogo': linkedinLightLogo,
    },
    {
        'name': 'netlify',
        'schema': `https://$VALUE.netlify.app`,
        'path': (value) => `https://${value}.netlify.app`,
        'darkLogo': netlifyDarkLogo,
        'lightLogo': netlifyLightLogo,
    },
    {
        'name': 'aparat',
        'schema': `https://www.aparat.com/$VALUE`,
        'path': (value) => `https://www.aparat.com/${value}`,
        'darkLogo': aparatDarkLogo,
        'lightLogo': aparatLightLogo,
    },
    {
        'name': 'snapchat',
        'schema': `https://www.snapchat.com/add/$VALUE`,
        'path': (value) => `https://www.snapchat.com/add/${value}`,
        'darkLogo': snapchatDarkLogo,
        'lightLogo': snapchatLightLogo,
    },
    {
        'name': 'soundcloud',
        'schema': `https://soundcloud.com/$VALUE`,
        'path': (value) => `https://soundcloud.com/${value}`,
        'darkLogo': soundcloudDarkLogo,
        'lightLogo': soundcloudLightLogo,
    },
];

export const socialLogo = ( socialMediaName ) => {
    const item = dataArr.find(item => item.name === socialMediaName);

    return {
        'dark': item.darkLogo,
        'light': item.lightLogo
    }
};

export const socialLink = ( socialMediaName, value ) => {
    const item = dataArr.find(item => item.name === socialMediaName);

    return {
        'schema': item.schema,
        'path': item.path(value)
    }
}