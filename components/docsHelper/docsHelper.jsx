import { useState } from 'react'
import classes from './docsHelper.module.scss';
import { searchSocialArr } from '../../libs/socialLink/socialArr';
import SearchComponent from './search/search';
import SelectedItem from './selectedItem/selectedItem';

function DocsHelperComponent() {
    const [ selectedItem, setSelectedItem ] = useState(searchSocialArr()[0]);
    return (
        <div className={ classes.docHelper }>
            <h1 className={ classes.title }>
                Doc
            </h1>
            <SearchComponent activeItem={ selectedItem } searchSocialArr={ searchSocialArr } setChosenValue={ setSelectedItem } />
            <SelectedItem dataObj={ selectedItem } />
        </div>
    )
}

export default DocsHelperComponent
