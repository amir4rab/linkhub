import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import classes from './search.module.scss'

function SearchComponent({ searchSocialArr ,setChosenValue, activeItem }) {
    const [ dataArr, setDataArr ] = useState([]);
    const inputRef = useRef();

    // checking if the component is still mounted
    let mounted = useRef(true);
    useEffect( _ => {
        mounted.current = true;
        return () => {
            mounted.current = false;
        };
    }, [])

    const setActiveItem = (item) => {
        setDataArr([]);
        inputRef.current.value = '';
        setChosenValue(item);
    }

    const focused = () => {
        setDataArr(searchSocialArr());
    }
    const blurred = () => {
        setTimeout( _ => {
            if ( !mounted.current ) return;
            setDataArr([]);
        }, 150)
    }

    return (
        <div className={ classes.searchComponent }>
            <input 
                className={ classes.input }
                type="text" 
                placeholder={ activeItem.name } 
                ref={ inputRef }
                onChange={ e => setDataArr(searchSocialArr(e.target.value)) } 
                onFocus={focused}
                onBlur={blurred}
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
