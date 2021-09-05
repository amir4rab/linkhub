import { useState, useEffect } from 'react';
import classes from './detailsAdder.module.scss';

import { validateInput } from '../../../libs/validateInput/validateInput';
import { socialMediaObjGen } from '../../../libs/socialMediaObjGen/socialMediaObjGen';

const getSocialMediaScheme = (socialMedia, dataArr) => dataArr.find(item => item.name === socialMedia);

function DetailsAdder({ dataArr, data, submitEvent, goBack, closePopup }) {

    //** hooks for id input **//
    const [ idInputValue, setIdInputValue ] = useState('');
    const [ idInputError, setIdInputError  ] = useState(false);
    const [ idHasBeenFocused, setIdHasBeenFocused  ] = useState(false);
    useEffect( _ => {
        setIdInputError(!validateInput(idInputValue, 24, true));
    }, [ idInputValue, setIdInputError ]);

    //** hooks for label input **//
    const [ titleInputValue, setTitleInputValue ] = useState('');
    const [ titleInputError, setTitleInputError  ] = useState(false);
    useEffect( _ => {
        titleInputValue.length === 0 ? setTitleInputError(false) : setTitleInputError(!validateInput(titleInputValue))
    }, [ titleInputValue, setTitleInputError ]);

    //** event functions **//
    const socialMediaObj = getSocialMediaScheme(data, dataArr);
    const submitFn = () =>  {
        submitEvent(socialMediaObjGen(data,idInputValue,titleInputValue.length === 0 ? false : titleInputValue));
        closePopup();
    };
    
    return (
        <div className={ classes.detailsAdder }>
            <h3 className={ classes.title }>
                Add your { data } accounts Details
            </h3>
            <div className={ classes.content }>
                <div className={ classes.inputBox }>
                    <label 
                        htmlFor="idInput"
                        className={ classes.label }
                    >
                        your id:
                    </label>
                    <input 
                        className={ classes.input }
                        type="text" 
                        name="idInput" 
                        value={ idInputValue }
                        onChange={ e => setIdInputValue(e.target.value) }
                        onFocus={ _ => setIdHasBeenFocused(true) }
                    />
                    {
                        idInputError === false ?
                        <p className={ classes.info }>
                            {
                                socialMediaObj.path(idInputValue)
                            }
                        </p> 
                        :
                            idHasBeenFocused ?
                            <p className={ classes.error }>
                                Invalid input
                            </p> : null
                    }
                </div>
                <div className={ classes.inputBox }>
                    <label className={ classes.label } htmlFor="idInput">
                        label of this link (leave empty for no label!)
                    </label>
                    <input 
                        type="text" 
                        name="idInput"
                        value={ titleInputValue }
                        className={ classes.input }
                        onChange={ e => setTitleInputValue(e.target.value) }
                        placeholder={`e.g. ${ data } account for my job`}
                    />
                    {
                        titleInputError === false ? null :
                        <p className={ classes.error }>
                            Invalid input
                        </p>
                    }
                </div>
                <div className={ classes.buttonArea }>
                    <button
                        className={ classes.goBack }
                        onClick={ goBack }
                    >
                        go back
                    </button>
                    <button
                        className={ classes.submit }
                        disabled={ idInputValue.length === 0 || idInputError || !idHasBeenFocused || titleInputError }
                        onClick={ submitFn }
                    >
                        submit
                    </button>
                </div>
            </div>
        </div>
    )
};

export default DetailsAdder;
