import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import AddCar from "../AddCar/AddCar";
import CarsListForAdmin from "../CarsListForAdmin/CarsListForAdmin";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import ShopIcon from "@material-ui/icons/Shop";
import Orders from "../Orders/Orders";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));
const Admin = () => {
  function routesAdmin(comp) {
    if (comp === "add") {
      return <AddCar />;
    } else if (comp === "list") {
      return <CarsListForAdmin />;
    } else if (comp === "orders") {
      return <Orders />;
    }
  }
  const [comp, setComp] = useState("add");
  const classes = useStyles();
  return (
    <Paper elevation={3}>
      <Paper elevation={3}>
        <Button
          onClick={() => setComp("add")}
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<AddCircleIcon />}
        >
          Add car
        </Button>
        <Button
          onClick={() => setComp("list")}
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<ShopIcon />}
        >
          List of cars
        </Button>
        <Button
          onClick={() => {
            setComp("orders");
          }}
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<EventAvailableIcon />}
        >
          Orders
        </Button>
      </Paper>

      <div style={{ marginTop: "10px" }}>{routesAdmin(comp)}</div>
    </Paper>
  );
};

export default Admin;
