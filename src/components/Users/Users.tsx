import React from 'react';
import {IUser} from "../../types";
import UserItem from "./UserItem";

interface IProps{
    users:IUser[];
}

const Users:React.FC<IProps> = ({users}) => {

    return (
        <div className="col-5 ps-5 mb-3">
            {users.map((user)=>(
                <UserItem key={user.id} user={user}/>
            ))}
        </div>
    );
};

export default Users;