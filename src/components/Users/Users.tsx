import React from 'react';
import {IUser} from "../../types";

interface IProps{
    users:IUser[];
}
const Users:React.FC<IProps> = ({users}) => {
    return (
        <div>
            {users.map((user)=>(
                user.name
            ))}
        </div>
    );
};

export default Users;