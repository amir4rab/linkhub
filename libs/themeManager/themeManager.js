export const themesArr = [
    {
        'name': 'mermaid',
        'hexCode': '#CC99FF',
        'class': 'theme0',
    },
    {
        'name': 'sky blue',
        'hexCode': '#00D2D3',
        'class': 'theme1',
    },
    {
        'name': 'mild pink',
        'hexCode': '#FFB8B8',
        'class': 'theme2',
    }
];

export const getClassByName = ( colorName, mainClass ) => {
    const colorObj = themesArr.find(colorObj => colorObj.name === colorName);
    if ( colorObj === undefined ) return mainClass[themesArr[0].class];
    return mainClass[colorObj.class];
}

export const getClassByClass = ( colorClass, mainClass ) => mainClass[colorClass];

export const getClassByIndex = ( index, mainClass ) => {
    if( index + 1 > themesArr.length ) return mainClass[themesArr[0].class];
    return mainClass[themesArr[index].class]
};