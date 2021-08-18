import { useState, useEffect  } from 'react';
import { motion } from 'framer-motion';
import classes from './searchBox.module.scss';
import Image from 'next/image';

const variants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
}

const filterItems = (value, arr) => {
    return arr.filter(item => item.name.includes(value));
}

function SearchBox({ dataArr, setFn }) {
    const [ socialLink, setSocialLinks ] = useState(dataArr);
    const [ searchQuery, setSearchQuery ] = useState('');

    useEffect( _ => {
        setSocialLinks(filterItems(searchQuery, dataArr));
    },[ dataArr, searchQuery , setSocialLinks ]);

    return (
        <div className={ classes.searchBox }>
            <h3 className={ classes.title }>
                Chose your social media 
            </h3>
            <input 
                value={ searchQuery } 
                onChange={ e => setSearchQuery(e.target.value) } 
                className={ classes.searchInput } 
                type="text"
                placeholder="ex: twitter, snapchat"
            />
            <div className={ classes.resultArea }>
                {
                    socialLink.map(item => (
                        <motion.div
                            onClick={ _ => setFn(item.name) }
                            initial='hidden'
                            animate='visible'
                            variants={ variants }
                            key={ item.name }
                            className={ classes.socialItem }>
                            <div className={ classes.img }>
                                <Image src={ item.lightLogo } alt={`logo of ${item.name}`} />
                            </div>
                            <p>
                                { item.name }
                            </p>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    );
};

export default SearchBox;
