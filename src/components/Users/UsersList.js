import React from 'react';

//import components
import Card from "../UI/Card";

//import styles
import classes from "./UsersList.module.css"

const UsersList = props => {
    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map(user => (
                    <li>
                        {user.name} ({user.age} years old)
                    </li>
                ))}
            </ul>
        </Card>
    )
};

export default UsersList;