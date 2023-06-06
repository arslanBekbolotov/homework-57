import React from 'react';
import {IUser} from "../../types";

interface IProps{
    users:IUser[];
}
const Users:React.FC<IProps> = ({users}) => {

    return (
        <div className="col-5 ps-5 mb-3">
            {users.map((user)=>(
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
            ))}
        </div>
    );
};

export default Users;