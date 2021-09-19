import  './Button.module.css';

const Button =(props) =>{
    const classes = 'button '+props.className;
    return <button className={classes}>{props.children}</button>;

};

export default Button;