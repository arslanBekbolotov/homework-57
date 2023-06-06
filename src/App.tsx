import React, {useState} from 'react';
import UserForm from "./components/UserForm/UserForm";
import Users from "./components/Users/Users";
import {IUser} from "./types";

const App = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    const addDish = (dish: IUser) => {
        setUsers(prev => [...prev, dish]);
    };

    return (
        <>
            <UserForm onSubmit={addDish}/>
            <Users users={users}/>
        </>
);
};

export default App;