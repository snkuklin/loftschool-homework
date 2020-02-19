import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import SimpleButton from "../../components/common/button/simple";
import McLogo from "./components/mcLogo";
import initialState, { getProfileData, updateProfile } from "./store";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    outerPaper: {
      minWidth: 400,
      maxWidth: 700,
      padding: "40px 60px"
    },
    innerPaper: {
      position: "relative",
      padding: "20px 40px"
    },
    field: {
      marginBottom: "20px"
    },
    logo: {
      position: "absolute",
      top: 5,
      right: 5
    }
  })
);

const Profile: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const profileData = useSelector(getProfileData) || initialState;
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cardName, setCardName] = useState("");
  const [cvc, setCvc] = useState("");
  const submit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(
      updateProfile({
        cardNumber,
        expiryDate,
        cardName,
        cvc
      })
    );
  };

  useEffect(() => {
    setCardNumber(profileData.cardNumber);
    setExpiryDate(profileData.expiryDate);
    setCardName(profileData.cardName);
    setCvc(profileData.cvc);
  }, [
    profileData.cardNumber,
    profileData.expiryDate,
    profileData.cardName,
    profileData.cvc
  ]);

  return (
    <Paper className={classes.outerPaper}>
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            Профиль
          </Typography>
          <Typography align="center">Способ оплаты</Typography>
        </Grid>
      </Grid>
      <form onSubmit={submit}>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <Paper elevation={3} className={classes.innerPaper}>
              <McLogo className={classes.logo} />
              <TextField
                type="text"
                label="Номер карты"
                placeholder="0000 0000 0000 0000"
                required
                fullWidth
                InputLabelProps={{
                  shrink: true
                }}
                className={classes.field}
                value={cardNumber}
                onChange={e => setCardNumber(e.target.value)}
              />
              <MuiPickersUtilsProvider utils={MomentUtils}>
                <DatePicker
                  label="Срок действия"
                  format="MM/YY"
                  openTo="year"
                  views={["year", "month"]}
                  required
                  fullWidth
                  InputLabelProps={{
                    shrink: true
                  }}
                  className={classes.field}
                  value={expiryDate}
                  onChange={(value: any) => setExpiryDate(value)}
                />
              </MuiPickersUtilsProvider>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={3} className={classes.innerPaper}>
              <TextField
                type="text"
                label="Владелец"
                placeholder="USER NAME"
                required
                fullWidth
                InputLabelProps={{
                  shrink: true
                }}
                className={classes.field}
                value={cardName}
                onChange={e => setCardName(e.target.value)}
              />
              <TextField
                type="password"
                label="CVC"
                placeholder="CVC"
                required
                fullWidth
                InputLabelProps={{
                  shrink: true
                }}
                className={classes.field}
                value={cvc}
                onChange={e => setCvc(e.target.value)}
              />
            </Paper>
          </Grid>
          <Grid container justify="center">
            <SimpleButton
              text="Сохранить"
              type="submit"
              variant="contained"
              color="primary"
            />
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default Profile;
