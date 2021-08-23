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
        'guide': `simply go to your profile page on spotfy [web player](https://open.spotify.com/), the long string at the end is your id.
        for example, at this url "https://open.spotify.com/artist/3luonLzvSOxdU8ytCaEIK8" the artist id is "3luonLzvSOxdU8ytCaEIK8".`,
    },
    {
        'name': 'twitter',
        'schema': `https://twitter.com/$VALUE`,
        'path': (value) => `https://twitter.com/${value}`,
        'darkLogo': twitterDarkLogo,
        'lightLogo': twitterLightLogo,
        'guide': `if your are using twitter website, simply go to your profile, the string after "https://twitter.com/" is your id.
        for example, in this url "https://twitter.com/BernieSanders", "BernieSanders" is the twitter id. in case you are using twitters mobile application, simply go to "Settings and privacy", "Account", your id is your username.`,
    },
    {
        'name': 'vercel',
        'schema': `https://$VALUE.vercel.app`,
        'path': (value) => `https://${value}.vercel.app`,
        'darkLogo': vercelDarkLogo,
        'lightLogo': vercelLightLogo,
        'guide': `go to your projects dashboard, find your project domain ( only vercel subdomains are supported for now ), use the string before "vercel.app" for your social media id. for example, if this is your domain "portfolio-netlifycms.vercel.app", you should use "portfolio-netlifycms" as your id.`,
    },
    {
        'name': 'vk',
        'schema': `https://vk.com/$VALUE`,
        'path': (value) => `https://vk.com/${value}`,
        'darkLogo': vkDarkLogo,
        'lightLogo': vkLightLogo,
        'guide': null,
    },
    {
        'name': 'whatsapp',
        'schema': `https://wa.me/$VALUE`,
        'path': (value) => `https://wa.me/${value}`,
        'darkLogo': whatsappDarkLogo,
        'lightLogo': whatsappLightLogo,
        'guide': `use your phone number as your id, do not include "+",  and white spaces, for more guide checkout this https://faq.whatsapp.com/iphone/how-to-link-to-whatsapp-from-a-different-app/?lang=en on Whatsapp's website. for example, if this is your number "+001-(555)1234567" your id should be like this, "15551234567".`,
    },
    {
        'name': 'youtube',
        'schema': `https://www.youtube.com/user/$VALUE`,
        'path': (value) => `https://www.youtube.com/user/${value}`,
        'darkLogo': youtubeDarkLogo,
        'lightLogo': youtubeLightLogo,
        'guide': `go to your youtube profile on youtube website,  the string after the "https://www.youtube.com/user/" is your id. for example on this url "https://www.youtube.com/user/JoeDelaneyy" the id is "JoeDelaneyy".`,
    },
    {
        'name': 'telegram',
        'schema': `https://t.me/$VALUE`,
        'path': (value) => `https://t.me/${value}`,
        'darkLogo': telegramDarkLogo,
        'lightLogo': telegramLightLogo,
        'guide': `for ios: go to "Settings", touch the "Edit" button on the top right of the screen, your id is your username without the "@". and for android: go to "Settings", your id is your username without the "@",`,
    },
    {
        'name': 'tiktok',
        'schema': `https://www.tiktok.com/@$VALUE`,
        'path': (value) => `https://www.tiktok.com/@${value}`,
        'darkLogo': tiktokDarkLogo,
        'lightLogo': tiktokLightLogo,
        'guide': null,
    },
    {
        'name': 'twitch',
        'schema': `https://www.twitch.tv/$VALUE`,
        'path': (value) => `https://www.twitch.tv/${value}`,
        'darkLogo': twitchDarkLogo,
        'lightLogo': twitchLightLogo,
        'guide': null,
    },
    {
        'name': 'behance',
        'schema': `https://www.behance.net/$VALUE`,
        'path': (value) => `https://www.behance.net/${value}`,
        'darkLogo': behanceDarkLogo,
        'lightLogo': behanceLightLogo,
        'guide': null,
    },
    {
        'name': 'codepen',
        'schema': `https://codepen.io/$VALUE`,
        'path': (value) => `https://codepen.io/${value}`,
        'darkLogo': codepenDarkLogo,
        'lightLogo': codepenLightLogo,
        'guide': null,
    },
    {
        'name': 'codesandbox',
        'schema': `https://codesandbox.io/u/$VALUE`,
        'path': (value) => `https://codesandbox.io/u/${value}`,
        'darkLogo': codesandboxDarkLogo,
        'lightLogo': codesandboxLightLogo,
        'guide': null,
    },
    {
        'name': 'dribbble',
        'schema': `https://dribbble.com/$VALUE`,
        'path': (value) => `https://dribbble.com/${value}`,
        'darkLogo': dribbleDarkLogo,
        'lightLogo': dribbleLightLogo,
        'guide': null,
    },
    {
        'name': 'facebook',
        'schema': `https://facebook.com/$VALUE`,
        'path': (value) => `https://facebook.com/${value}`,
        'darkLogo': facebookDarkLogo,
        'lightLogo': facebookLightLogo,
        'guide': null,
    },
    {
        'name': 'instagram',
        'schema': `https://instagram.com/$VALUE`,
        'path': (value) => `https://instagram.com/${value}`,
        'darkLogo': instagramDarkLogo,
        'lightLogo': instagramLightLogo,
        'guide': null,
    },
    {
        'name': 'linkedin',
        'schema': `https://www.linkedin.com/in/$VALUE`,
        'path': (value) => `https://www.linkedin.com/in/${value}`,
        'darkLogo': linkedinDarkLogo,
        'lightLogo': linkedinLightLogo,
        'guide': null,
    },
    {
        'name': 'netlify',
        'schema': `https://$VALUE.netlify.app`,
        'path': (value) => `https://${value}.netlify.app`,
        'darkLogo': netlifyDarkLogo,
        'lightLogo': netlifyLightLogo,
        'guide': null,
    },
    {
        'name': 'aparat',
        'schema': `https://www.aparat.com/$VALUE`,
        'path': (value) => `https://www.aparat.com/${value}`,
        'darkLogo': aparatDarkLogo,
        'lightLogo': aparatLightLogo,
        'guide': null,
    },
    {
        'name': 'snapchat',
        'schema': `https://www.snapchat.com/add/$VALUE`,
        'path': (value) => `https://www.snapchat.com/add/${value}`,
        'darkLogo': snapchatDarkLogo,
        'lightLogo': snapchatLightLogo,
        'guide': null,
    },
    {
        'name': 'soundcloud',
        'schema': `https://soundcloud.com/$VALUE`,
        'path': (value) => `https://soundcloud.com/${value}`,
        'darkLogo': soundcloudDarkLogo,
        'lightLogo': soundcloudLightLogo,
        'guide': null,
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

export const searchSocialArr = ( value = null ) => {
    if ( value === '' || value === null ) return dataArr;
    
    const res = dataArr.filter(item => item.name.includes(value));
    return res;
}