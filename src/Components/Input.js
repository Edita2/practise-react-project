import React from "react";
import Card from "./Card.js";
import classes from "./Input.module.css";
import "./Input.module.css";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className={classes.input}>
      <form className="input" onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age(Years)</label>
        <input id="age" type="number" />
        <button type="submit">AddUser</button>
      </form>
    </Card>
  );
};

export default AddUser;
