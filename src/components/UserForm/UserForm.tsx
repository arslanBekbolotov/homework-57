import React, {useState} from 'react';
import {nanoid} from "nanoid";
import {IUser, IUserMutation} from "../../types";

interface IProps {
    onSubmit: (user: IUser) => void;
}

const UserForm:React.FC<IProps> = ({onSubmit}) => {
    const [user, setUser] = useState<IUserMutation>({
        name: '',
        email: '',
        active: false,
        role: '',
    });

    const onChangeForm = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
        setUser(prev => ({...prev, [e.target.name]: e.target.value}));
    };

    const onChangeFormCheckbox =(e: React.ChangeEvent<HTMLInputElement>)=>{
        setUser(prev => ({...prev, active: e.target.checked}));
    };

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        onSubmit({
            id: nanoid(),
            ...user
        });
    };

    return (
        <form onSubmit={onFormSubmit} className="col-5">
            <div className="mb-3">
                <label htmlFor="formName" className="form-label">Name</label>
                <input
                    type="text"
                    value={user.name}
                    name="name"
                    className="form-control"
                    id="formName"
                    onChange={onChangeForm}/>
            </div>
            <div className="mb-3">
                <label htmlFor="formEmail" className="form-label">Email</label>
                <input
                    type="email"
                    value={user.email}
                    name="email"
                    className="form-control"
                    id="formEmail"
                    aria-describedby="emailHelp"
                    onChange={onChangeForm}/>
            </div>
            <select
                className="form-select mb-4"
                value={user.role}
                name="role"
                onChange={onChangeForm}>
                <option value="show" disabled>Open this select menu</option>
                <option value="user">user</option>
                <option value="editor">editor</option>
                <option value="admin">admin</option>
            </select>
            <div className="mb-3 form-check">
                <input
                    type="checkbox"
                    name="active"
                    className="form-check-input"
                    id="formCheck"
                    onChange={onChangeFormCheckbox}/>
                <label className="form-check-label" htmlFor="formCheck">Activate</label>
            </div>
            <button type="submit" className="btn btn-primary">Create</button>
        </form>
    );
};

export default UserForm;