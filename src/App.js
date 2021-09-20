import React, { useState } from "react";
import './App.css';
import AddUser from './components/AddUser/AddUser';
import UserLists from "./components/Users/UsersList";


const USER_DETAILS =[
];

function App() {
  const [users,setUsers]=useState(USER_DETAILS);
  const addUserHandler= (uName,uAge) =>{
    setUsers(prevUsers =>{
      return [{name:uName,age:uAge,'id':Math.random().toString()},...prevUsers];
    });
    console.log(USER_DETAILS);
  };
  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler}/>
      <UserLists items={users}/>
    </div>
  );
}

export default App;
