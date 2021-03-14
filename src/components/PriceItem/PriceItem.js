import React from 'react';
import styles from './PriceItem.module.css';

const PriceItem = ({text}) => {
    return <div className={styles.container}>
        {text}
    </div>
}

export default PriceItem;