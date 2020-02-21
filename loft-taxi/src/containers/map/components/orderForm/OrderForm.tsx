import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import SimpleButton from "../../../../components/common/button/simple";
import NavigationButton from "../../../../components/common/button/navigation";
import { getProfileFilled } from "../../../profile/store";
import {
  getAddresses,
  getAddressesList,
  getRoute,
  clearRoute,
  getCurrentRoute
} from "../../store";

export interface OrderFormProps {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      minWidth: 150,
      maxWidth: 300,
      margin: "20px",
      padding: "40px 60px",
      zIndex: 10
    },
    buttonContainer: {
      textAlign: "right"
    }
  })
);

const OrderForm: React.FC<OrderFormProps> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isProfileFilled = useSelector(getProfileFilled);
  const addresses = useSelector(getAddresses);
  const currentRoute = useSelector(getCurrentRoute);
  const [addressFrom, setAddressFrom] = useState<string | null>(null);
  const [addressTo, setAddressTo] = useState<string | null>(null);

  const onFromChange = (event: React.ChangeEvent<{}>, value: string | null) => {
    changeHandler(setAddressFrom, value);
  };
  const onToChange = (event: React.ChangeEvent<{}>, value: string | null) => {
    changeHandler(setAddressTo, value);
  };
  const changeHandler = (
    changeFn: (v: string | null) => void,
    value: string | null
  ) => {
    changeFn(value);
  };

  useEffect(() => {
    if (isProfileFilled) {
      dispatch(getAddressesList());
    }
  }, [isProfileFilled, dispatch]);

  useEffect(() => {
    if (addressFrom && addressTo) {
      dispatch(getRoute([addressFrom, addressTo]));
    } else {
      dispatch(clearRoute());
    }
  }, [addressFrom, addressTo, dispatch]);

  useEffect(() => {
    if (currentRoute.length) {
      //TODO
    }
  }, [currentRoute]);

  return (
    <Paper className={classes.paper}>
      {isProfileFilled ? (
        <form>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Autocomplete
                options={addresses.filter(
                  (value: string) => value !== addressTo
                )}
                renderInput={params => (
                  <TextField
                    {...params}
                    placeholder="Откуда"
                    fullWidth
                    required
                  />
                )}
                onChange={onFromChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                options={addresses.filter(
                  (value: string) => value !== addressFrom
                )}
                renderInput={params => (
                  <TextField
                    {...params}
                    placeholder="Куда"
                    fullWidth
                    required
                  />
                )}
                onChange={onToChange}
              />
            </Grid>
            <Grid item xs={12}>
              <SimpleButton
                text="Вызвать такси"
                variant="contained"
                color="primary"
                fullWidth
              />
            </Grid>
          </Grid>
        </form>
      ) : (
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography align="center">
              Пожалуйста, заполните платёжные данные
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <NavigationButton
              to="/profile"
              text="Перейти в профиль"
              variant="contained"
              color="primary"
              fullWidth
            />
          </Grid>
        </Grid>
      )}
    </Paper>
  );
};

export default OrderForm;
