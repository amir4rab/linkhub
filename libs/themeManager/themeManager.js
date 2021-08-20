export const themesArr = [
    {
        'name': 'mermaid',
        'colorHexCode': '#CC99FF',
        'class': 'theme0',
    },
    {
        'name': 'sky blue',
        'colorHexCode': '#00D2D3',
        'class': 'theme1',
    },
    {
        'name': 'mild pink',
        'colorHexCode': '#FFB8B8',
        'class': 'theme2',
    }
];

export const getClassByName = ( colorName, mainClass ) => {
    const colorObj = themesArr.find(colorObj => colorObj.name === colorName);
    return mainClass[colorObj.class];
}

export const getClassByClass = ( colorClass, mainClass ) => mainClass[colorClass];

export const getClassByIndex = ( index, mainClass ) => mainClass[themesArr[index].class];