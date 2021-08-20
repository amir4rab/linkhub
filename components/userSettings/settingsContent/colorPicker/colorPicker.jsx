import React from 'react';
import { themesArr } from './../../../../libs/themeManager/themeManager';
import classes from './colorPicker.module.scss';

function ColorPicker({ setColor, activeColor }) {
    return (
        <div className={ classes.colorPicker }>
            {
                themesArr.map((colorObj, index) => (
                    <div 
                        className={ activeColor === index ? classes.activeColorDiv : classes.colorDiv } 
                        key={colorObj.class}
                        style={ activeColor === index ? { borderLeftColor: colorObj.hexCode, color: colorObj.hexCode } : null }
                    >
                        <button
                            className={ classes.btn }
                            style={{
                                backgroundColor: colorObj.hexCode
                            }}
                            onClick={ _ => setColor(index) }
                        />
                        <p className={ classes.label }>{ colorObj.name }</p>
                    </div>
                ))
            }
        </div>
    )
}

export default ColorPicker
