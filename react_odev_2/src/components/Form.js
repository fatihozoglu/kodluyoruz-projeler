import React from "react";
import { useState } from "react";

export default function Form( props ) {
    const [name, setName] = useState("");

    //If the task name is not empty we are sending the name to App component with addTask callback prop
    function handleSubmit(e) {
        e.preventDefault();
        if(name !== "") {
            props.addTask(name);
            setName("");
        } else alert("Please enter a task");
    }

    //Changing the state of name with the information coming from input
    function handleChange(e) {
        setName(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
            <label htmlFor="new-todo-input" className="label__lg">
                What needs to be done?
            </label>
            </h2>
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={ name }
                onChange={handleChange}
            />
            <button type="submit" className="btn btn__primary btn__lg">
            Add
            </button>
        </form>
    )
}