import { useState } from 'react'
import classes from './selectedItem.module.scss';

const genericGuide = ({ name }) => ``;

function SelectedItem({ dataObj }) {
    const [ idValue, setIdValue ] = useState('');
    return (
        <div className={ classes.selectedItem }>
                <h3 className={ classes.title }>
                    How to find your { dataObj.name } id
                </h3>
                <p className={ classes.guide }>
                    {
                        dataObj.guide !== null ?
                        dataObj.guide : genericGuide(dataObj.name)
                    }
                </p>
                <div className={ classes.helper }>
                    <h4 className={ classes.subtitle }>
                        check if your id is correct
                    </h4>
                    <input 
                        className={ classes.input } 
                        type="text" 
                        value={idValue} 
                        onChange={ e => setIdValue(e.target.value) } 
                        placeholder={`your ${dataObj.name} id`}
                    />
                    <p className={ classes.inputSubText }>
                        {
                            <a target="_blank" rel='noreferrer' href={dataObj.path(idValue)}>
                                {dataObj.path(idValue)}
                            </a>
                        }
                    </p>
                    <p className={ classes.helpText }>
                        If your id is valid by clicking <a target="_blank" rel='noreferrer' href={dataObj.path(idValue)}>here</a> you should be directed to your social media page.
                    </p>

                </div>
        </div>
    );
};

export default SelectedItem;
