import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import SimpleButton from "../../../components/common/button/simple";
import NavigationLink from "../../../components/common/link/navigation";
import Logo from "../../../components/common/logo";
import LoadMask from "../../../components/common/loadMask";
import { login, getIsLoggedIn, getIsLoading } from "../store";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      minHeight: "100vh"
    },
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
  const isLoading = useSelector(getIsLoading);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  if (isLoggedIn) {
    return <Redirect path="/signin" to="/map" />;
  }

  return (
    <Grid
      container
      className={classes.grid}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={3}>
        <Logo color="white" animate />
      </Grid>

      <LoadMask open={isLoading} />

      <Paper className={classes.paper}>
        <form onSubmit={submit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h4">Авторизация</Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={1}>
                <Grid item>
                  <Typography>Новый пользователь?</Typography>
                </Grid>
                <Grid item>
                  <NavigationLink to="/signup" text="Зарегистрируйтесь" />
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
    </Grid>
  );
};

export default SignIn;
