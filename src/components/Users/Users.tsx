import React from "react";
import { IUser } from "../../types";
import UserItem from "./UserItem";

interface IProps {
  users: IUser[];
  deleteItem: (id: string) => void;
}

const Users: React.FC<IProps> = ({ users, deleteItem }) => {
  return (
    <div className="col-5 ps-5 mb-3">
      {users.map((user) => (
        <UserItem
          key={user.id}
          user={user}
          deleteItem={() => deleteItem(user.id)}
        />
      ))}
    </div>
  );
};

export default Users;
