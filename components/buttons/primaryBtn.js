import React from 'react';
import classes from './button.module.scss';

const getClass = (color) => {
    switch(color){
        case 'green': {
            return classes.greenButton;
            break;
        }
        case 'red' : {
            return classes.redButton;
            break;
        }
    }
}

function PrimaryBtn({ color, onClick, children }) {
    console.log(getClass(color))
    return (
        <button
            className={ getClass(color) }
            onClick={ onClick }
        >
            { children }
        </button>
    );
};

export default PrimaryBtn;
