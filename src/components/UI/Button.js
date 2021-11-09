import React from 'react';

//import styles
import classes from './Bottun.module.css';

const Button = props => {
    return (
        <button className={classes.button} type={props.type || 'button'} onClick={props.onClick}>
            {props.children}
        </button>
    )
};

export default Button;