import React from 'react';

// import components
import Card from "../UI/Card";
import Button from "../UI/Button";

//import styles
import classes from "./AddUser.module.css"

const AddUser = props => {

    const addUserHandler = (event) => {
        event.preventDefault();
    }
    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text"/>
                <label htmlFor="age">Age (Year)</label>
                <input id="age" type="number"/>
                <Button type="submit" onClick={addUserHandler}>Add User</Button>
            </form>
        </Card>
    )
};

export default AddUser;