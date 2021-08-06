const socialLogo = ( socialMediaName, value ) => {
    const res = {};
    switch(socialMediaName){
        case 'spotify':{
            res.schema = `https://open.spotify.com/artist/$VALUE`
            res.path = `https://open.spotify.com/artist/${value}`
            break;
        }
        case 'twitter':{
            res.schema = `https://twitter.com/$VALUE`
            res.path = `https://twitter.com/${value}`
            break;
        }
        case 'vercel':{
            res.schema = `https://$VALUE.vercel.app`
            res.path = `https://${value}.vercel.app`
            break;
        }
        case 'vk':{
            res.schema = `https://vk.com/$VALUE`
            res.path = `https://vk.com/${value}`
            break;
        }
        case 'whatsapp':{
            res.schema = `https://wa.me/$VALUE`
            res.path = `https://wa.me/${value}`
            break;
        }
        case 'youtube':{
            res.schema = `https://www.youtube.com/c/$VALUE`
            res.path = `https://www.youtube.com/c/${value}`
            break;
        }
        case 'telegram':{
            res.schema = `https://t.me/$VALUE`
            res.path = `https://t.me/${value}`
            break;
        }
        case 'tiktok':{
            res.schema = `https://www.tiktok.com/@$VALUE`
            res.path = `https://www.tiktok.com/@${value}`
            break;
        }
        case 'twitch':{
            res.schema = `https://www.twitch.tv/$VALUE`
            res.path = `https://www.twitch.tv/${value}`
            break;
        }
        // case 'amazon':{
        //     res.schema = `https://`
        //     res.path = `https://${value}`
        //     break;
        // }
        case 'behance':{
            res.schema = `https://www.behance.net/$VALUE`
            res.path = `https://www.behance.net/${value}`
            break;
        }
        case 'codepen':{
            res.schema = `https://codepen.io/$VALUE`
            res.path = `https://codepen.io/${value}`
            break;
        }
        case 'codesandbox':{
            res.schema = `https://codesandbox.io/u/$VALUE`
            res.path = `https://codesandbox.io/u/${value}`
            break;
        }
        case 'dribbble':{
            res.schema = `https://dribbble.com/$VALUE`
            res.path = `https://dribbble.com/${value}`
            break;
        }
        case 'facebook':{
            res.schema = `https://facebook.com/$VALUE`
            res.path = `https://facebook.com/${value}`
            break;
        }
        case 'instagram':{
            res.schema = `https://instagram.com/$VALUE`
            res.path = `https://instagram.com/${value}`
            break;
        }
        // case 'itunes':{
        //     res.schema = `https://`
        //     res.path = `https://${value}`
        //     break;
        // }
        case 'linkedin':{
            res.schema = `https://www.linkedin.com/in/$VALUE`
            res.path = `https://www.linkedin.com/in/${value}`
            break;
        }
        case 'netlify':{
            res.schema = `https://$VALUE.netlify.app`
            res.path = `https://${value}.netlify.app`
            break;
        }
        case 'aparat':{
            res.schema = `https://www.aparat.com/$VALUE`
            res.path = `https://www.aparat.com/${value}`
            break;
        }
        case 'snapchat':{
            res.schema = `https://www.snapchat.com/add/$VALUE`
            res.path = `https://www.snapchat.com/add/${value}`
            break;
        }
        case 'soundcloud':{
            res.schema = `https://soundcloud.com/$VALUE`
            res.path = `https://soundcloud.com/${value}`
            break;
        }
    }
    return res;
};
export default socialLogo;