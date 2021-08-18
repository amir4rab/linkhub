export const socialMediaObjGen = (name, id, label) =>  ({
    name,
    id,
    label,
    instance: `${name}-${Math.floor(Math.random()*1000)}`
});
