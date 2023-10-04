import React, { useRef, useState, useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';
const AddUser = (props) => {
const nameInputRef = useRef();
const ageInputReg = useRef();
const collageInputRef = useRef();

  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [enteredCollageName, setCollageName] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName=(nameInputRef.current.value);
    const entereduserName =(ageInputRef.current.value)
    const enteredcollageName = (collageNameInputRef.current.value)
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 || enteredCollageName.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+enteredUserAge < 10) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge, enteredCollageName);
    nameInputRef.value = "";
    ageInputRef.value ='';
    collageInputRef.value = '';
    // setEnteredUsername('');
    // setEnteredAge('');
  };

  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            // type="text"
            // value={enteredUsername}
            // onChange={usernameChangeHandler}
            ref = {nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            // type="number"
            // value={enteredAge}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <label htmlFor="collage">collage</label>
          <input
            id="collage"
            
            ref={collageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
