export const idGen = (name) => {
    const id = `${name.replace(/ /g, '').toLowerCase()}${Math.floor(Math.random() * 10000000000)}`;
    return id;
};

export const userGen = (email, name, profileImg) => (
    {
        "email": email,
        "id": idGen(name),
        "socials": [],
        "profile": {
            "bg": 0,
            "fullName": name,
            "about": null,
            "location": null,
            "pic": profileImg
        }
    }
)