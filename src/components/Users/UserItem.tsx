import React from "react";
import { IUser } from "../../types";

interface IProps {
  user: IUser;
  deleteItem: React.MouseEventHandler;
}

const UserItem: React.FC<IProps> = ({ user, deleteItem }) => {
  return (
    <div className="card mb-3" key={user.id}>
      <div className="card-header d-flex justify-content-between">
        Name: {user.name}
        {user.active && <p className="text-success fw-bold">Active</p>}
      </div>
      <div className="card-body">
        <h5 className="card-title">Role: {user.role}</h5>
        <div className="card-text d-flex justify-content-between">
          <p>Email: {user.email}</p>
          <button onClick={deleteItem} className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
