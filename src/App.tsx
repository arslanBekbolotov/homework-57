import React, { useState } from "react";
import UserForm from "./components/UserForm/UserForm";
import Users from "./components/Users/Users";
import { IUser } from "./types";

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  const addDish = (dish: IUser) => {
    setUsers((prev) => [...prev, dish]);
  };

  const deleteItem = (id: string) => {
    setUsers((prevState) => prevState.filter((state) => state.id !== id));
  };

  return (
    <div className="row p-5 justify-content-center">
      <UserForm onSubmit={addDish} />
      <Users users={users} deleteItem={deleteItem} />
    </div>
  );
};

export default App;
