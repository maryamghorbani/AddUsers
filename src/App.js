import React, {useState} from 'react';

// import components
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";


function App() {
    const [usersList, setUsersList] = useState([]);
    
    return (
        <div>
            <AddUser/>
            <UsersList users={[]}/>
        </div>
    );
}

export default App;
