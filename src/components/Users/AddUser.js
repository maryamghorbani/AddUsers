import React, {useState} from 'react';

// import components
import Card from "../UI/Card";
import Button from "../UI/Button";

//import styles
import classes from "./AddUser.module.css"

const AddUser = props => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredAge.trim().length === 0 || enteredUsername.trim().length === 0) {
            return;
        }
        if (+enteredAge < 1) {
            return;
        }
        props.onAddUser(enteredUsername,enteredAge);
        setEnteredAge('');
        setEnteredUsername('');
    };
    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    type="text"
                    value={enteredUsername}
                    onChange={usernameChangeHandler}
                />
                <label htmlFor="age">Age (Year)</label>
                <input
                    id="age"
                    type="number"
                    value={enteredAge}
                    onChange={ageChangeHandler}
                />
                <Button type="submit" onClick={addUserHandler}>Add User</Button>
            </form>
        </Card>
    )
};

export default AddUser;