import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import SimpleButton from "../../common/button/simple";
import { loginRequest, getIsLoggedIn } from "../../modules/signIn";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      minWidth: 200,
      maxWidth: 500,
      padding: "40px 60px"
    },
    buttonContainer: {
      textAlign: "right"
    }
  })
);

const SignIn: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(loginRequest({ email, password }));
  };

  if (isLoggedIn) {
    return <Redirect path="/login" to="/map" />;
  }

  return (
    <Paper className={classes.paper}>
      <form onSubmit={submit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h1>Авторизация</h1>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item>
                <Typography>Новый пользователь?</Typography>
              </Grid>
              <Grid item>
                <Link href="#">Зарегистрируйтесь</Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="email"
              label="Адрес электронной почты"
              required
              fullWidth
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="password"
              label="Пароль"
              required
              fullWidth
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} className={classes.buttonContainer}>
            <SimpleButton
              text="Войти"
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

export default SignIn;
