export default class SocialItem {
    constructor( pastItem ){
        this.email = pastItem.email,
        this.id = pastItem.id,
        this.socials = pastItem.socials,
        this.bg = pastItem.profile.bg,
        this.fullName = pastItem.profile.fullName,
        this.about = pastItem.profile.about,
        this.location = pastItem.profile.location,
        this.pic = pastItem.profile.pic
    }

    updateItem = (item, value) => {
        this[item] = value;
    }

    getObj = () => ({
        "email": this.email,
        "id": this.id,
        "socials": this.socials,
        "profile": {
            "bg": this.bg,
            "fullName": this.fullName,
            "about": this.about,
            "location": this.location,
            "pic": this.pic
        }
    })
}