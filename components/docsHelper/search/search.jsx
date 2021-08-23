import { useState, useRef } from 'react';
import Image from 'next/image';
import classes from './search.module.scss'

function SearchComponent({ searchSocialArr ,setChosenValue, activeItem }) {
    const [ dataArr, setDataArr ] = useState([]);
    const inputRef = useRef();

    const setActiveItem = (item) => {
        setDataArr([]);
        inputRef.current.value = '';
        setChosenValue(item);
    }

    return (
        <div className={ classes.searchComponent }>
            <input 
                className={ classes.input }
                type="text" 
                placeholder={ activeItem.name } 
                ref={ inputRef }
                onChange={ e => setDataArr(searchSocialArr(e.target.value)) } 
            />
            <div
                className={ classes.resultBox }
            >
                {
                    dataArr.map( item => (
                        <button 
                            className={ classes.item }
                            key={ item.name }
                            onClick={ _ => setActiveItem(item) }
                        >
                            <Image className={ classes.image } src={item.lightLogo} alt={`${item.name} logo`}/>
                            <p className={ classes.text }>{ item.name }</p>
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

export default SearchComponent;
