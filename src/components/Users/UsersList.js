import Card from "../UI/Card";
import classes from "./UsersList.module.css";
const UserLists = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.items.map((user) => {
          return (<li key={user.id}>
            {user.name} ({user.age} years old)
          </li>);
        })}
      </ul>
    </Card>
  );
};

export default UserLists;
