import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "../../common/button";

export interface SignUpProps {
  onSubmitAction: () => void;
}

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

const SignUp: React.SFC<SignUpProps> = ({ onSubmitAction }) => {
  const [email, setEmail] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const [password, setPassword] = React.useState("");
  const classes = useStyles();
  const onSubmit = (e: any) => {
    e.preventDefault();
    onSubmitAction();
  };
  return (
    <Paper className={classes.paper}>
      <form onSubmit={onSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h1>Регистрация</h1>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item>
                <Typography>Уже зарегистрированы?</Typography>
              </Grid>
              <Grid item>
                <Link href="#">Войти</Link>
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
          <Grid item xs={6}>
            <TextField
              type="text"
              label="Имя"
              required
              fullWidth
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              label="Фамилия"
              required
              fullWidth
              value={surname}
              onChange={e => setSurname(e.target.value)}
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
            <Button
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

export default SignUp;
