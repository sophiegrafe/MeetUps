import classes from "./ContainerFlex.module.css";

const ContainerFlex = (props) => {
  return <div className={classes.container}>{props.children}</div>;
};

export default ContainerFlex;
