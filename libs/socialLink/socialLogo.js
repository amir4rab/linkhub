//** importing light logos **//
// import amazonDarkLogo from './../../public/logos/dark/amazon.svg';
import behanceDarkLogo from './../../public/logos/dark/behance.svg';
import codepenDarkLogo from './../../public/logos/dark/codepen.svg';
import codesandboxDarkLogo from './../../public/logos/dark/codesandbox.svg';
import dribbleDarkLogo from './../../public/logos/dark/dribble.svg';
import facebookDarkLogo from './../../public/logos/dark/facebook.svg';
import instagramDarkLogo from './../../public/logos/dark/instagram.svg';
// import itunesDarkLogo from './../../public/logos/dark/itunes.svg';
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
// import amazonLightLogo from './../../public/logos/light/amazon.svg';
import behanceLightLogo from './../../public/logos/light/behance.svg';
import codepenLightLogo from './../../public/logos/light/codepen.svg';
import codesandboxLightLogo from './../../public/logos/light/codesandbox.svg';
import dribbleLightLogo from './../../public/logos/light/dribble.svg';
import facebookLightLogo from './../../public/logos/light/facebook.svg';
import instagramLightLogo from './../../public/logos/light/instagram.svg';
// import itunesLightLogo from './../../public/logos/light/itunes.svg';
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




const socialLogo = ( socialMediaName ) => {
    const res = {};
    switch(socialMediaName){
        case 'spotify':{
            res.dark = spotifyDarkLogo;
            res.light = spotifyLightLogo;
            break;
        }
        case 'twitter':{
            res.dark = twitterDarkLogo;
            res.light = twitterLightLogo;
            break;
        }
        case 'vercel':{
            res.dark = vercelDarkLogo;
            res.light = vercelLightLogo;
            break;
        }
        case 'vk':{
            res.dark = vkDarkLogo;
            res.light = vkLightLogo;
            break;
        }
        case 'whatsapp':{
            res.dark = whatsappDarkLogo;
            res.light = whatsappLightLogo;
            break;
        }
        case 'youtube':{
            res.dark = youtubeDarkLogo;
            res.light = youtubeLightLogo;
            break;
        }
        case 'telegram':{
            res.dark = telegramDarkLogo;
            res.light = telegramLightLogo;
            break;
        }
        case 'tiktok':{
            res.dark = tiktokDarkLogo;
            res.light = tiktokLightLogo;
            break;
        }
        case 'twitch':{
            res.dark = twitchDarkLogo;
            res.light = twitchLightLogo;
            break;
        }
        // case 'amazon':{
        //     res.dark = amazonDarkLogo;
        //     res.light = amazonLightLogo;
        //     break;
        // }
        case 'behance':{
            res.dark = behanceDarkLogo;
            res.light = behanceLightLogo;
            break;
        }
        case 'codepen':{
            res.dark = codepenDarkLogo;
            res.light = codepenLightLogo;
            break;
        }
        case 'codesandbox':{
            res.dark = codesandboxDarkLogo;
            res.light = codesandboxLightLogo;
            break;
        }
        case 'dribble':{
            res.dark = dribbleDarkLogo;
            res.light = dribbleLightLogo;
            break;
        }
        case 'facebook':{
            res.dark = facebookDarkLogo;
            res.light = facebookLightLogo;
            break;
        }
        case 'instagram':{
            res.dark = instagramDarkLogo;
            res.light = instagramLightLogo;
            break;
        }
        // case 'itunes':{
        //     res.dark = itunesDarkLogo;
        //     res.light = itunesLightLogo;
        //     break;
        // }
        case 'linkedin':{
            res.dark = linkedinDarkLogo;
            res.light = linkedinLightLogo;
            break;
        }
        case 'netlify':{
            res.dark = netlifyDarkLogo;
            res.light = netlifyLightLogo;
            break;
        }
        case 'aparat':{
            res.dark = aparatDarkLogo;
            res.light = aparatLightLogo;
            break;
        }
        case 'snapchat':{
            res.dark = snapchatDarkLogo;
            res.light = snapchatLightLogo;
            break;
        }
        case 'soundcloud':{
            res.dark = soundcloudDarkLogo;
            res.light = soundcloudLightLogo;
            break;
        }
    }
    return res;
};
export default socialLogo;