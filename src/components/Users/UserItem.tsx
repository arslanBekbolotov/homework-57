import React from 'react';
import {IUser} from "../../types";

interface IProps{
    user:IUser;
}

const UserItem:React.FC<IProps> = ({user}) => {
    return (
        <div className="card mb-3" key={user.id}>
            <div className="card-header">
                User name: {user.name}
            </div>
            <div className="card-body">
                <h5 className="card-title"> User job: {user.role}</h5>
                <p className="card-text"> User email: {user.email}</p>
                <p className="card-text">  User active: {user.active.toString()}</p>
            </div>
        </div>
    );
};

export default UserItem;