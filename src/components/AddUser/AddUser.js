import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");
  const [error, setError] = useState("");
  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: "invalid input",
        message: "please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "invalid age",
        message: "please enter a valid  age (age >0)",
      });
      return;
    }
    console.log(enteredUserName, enteredUserAge);
    props.onAddUser(enteredUserName, enteredUserAge);
    setEnteredUserName("");
    setEnteredUserAge("");
  };
  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const userNameAgeChangeHandler = (event) => {
    setEnteredUserAge(event.target.value);
  };
  const errorHandler = () =>{
      console.log('setting error handler to null');
      setError(null);
  };

  return (
    <div>
      {error && <ErrorModal
        title={error.title}
        message={error.message}
        onConfirm={errorHandler}
      ></ErrorModal>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={enteredUserName}
              onChange={userNameChangeHandler}
            ></input>
          </div>
          <div className="input">
            <label htmlFor="age">Age(in years)</label>
            <input
              id="age"
              type="number"
              value={enteredUserAge}
              onChange={userNameAgeChangeHandler}
            ></input>
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
