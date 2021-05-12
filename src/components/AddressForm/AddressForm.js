import React, { useState, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { carsContext } from "../../contexts/CarsContext";
import Button from "@material-ui/core/Button";
export default function AddressForm() {
  const { addPerson } = useContext(carsContext);
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });
  const handleValues = (e) => {
    let newPerson = {
      ...person,
      [e.target.name]: e.target.value,
    };
    setPerson(newPerson);
  };
  const handleClick = () => {
    if (
      person.firstName === "" ||
      person.lastName === "" ||
      person.address1 === "" ||
      person.address2 === "" ||
      person.city === "" ||
      person.state === "" ||
      person.zip === "" ||
      person.country === ""
    ) {
      alert("error");
      return;
    }
    setPerson({
      firstName: "",
      lastName: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      country: "",
    });

    localStorage.setItem("persons", JSON.stringify(person));
  };
  return (
    <div>
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Address
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="given-name"
              onChange={handleValues}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="family-name"
              onChange={handleValues}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Address line 1"
              fullWidth
              autoComplete="shipping address-line1"
              onChange={handleValues}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address2"
              name="address2"
              label="Address line 2"
              fullWidth
              autoComplete="shipping address-line2"
              onChange={handleValues}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="shipping address-level2"
              onChange={handleValues}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="state"
              name="state"
              label="State/Province/Region"
              fullWidth
              onChange={handleValues}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              autoComplete="shipping postal-code"
              onChange={handleValues}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              fullWidth
              autoComplete="shipping country"
              onChange={handleValues}
            />
          </Grid>
          <Grid item xs={12}>
            <Button onClick={handleClick} variant="contained" color="secondary">
              Use this address for payment details
            </Button>
          </Grid>
        </Grid>
      </React.Fragment>
    </div>
  );
}
