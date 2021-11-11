import React from 'react';

//import components
import Card from "./Card";
import Button from "./Button";

//import styles
import classes from "./Error.module.css"

const ErrorModal = props => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button>Okay!</Button>
            </footer>
        </Card>
    )
};

export default ErrorModal;