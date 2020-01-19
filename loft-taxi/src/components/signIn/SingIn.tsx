import * as React from "react";
import Button from "../../common/button";

export interface SignInProps {
  onSubmitAction: () => void;
}

class SignIn extends React.Component<SignInProps> {
  state = {
    email: "",
    password: ""
  };
  onFieldChange = (e: any) => {
    let target = e.target;

    this.setState({ [target.name]: target.value });
  };
  onSubmit = (e: any) => {
    const { onSubmitAction } = this.props;
    e.preventDefault();
    onSubmitAction();
  };
  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h1>Авторизация</h1>
        <form onSubmit={this.onSubmit}>
          <label>
            Адрес электронной почты:
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.onFieldChange}
            />
          </label>
          <label>
            Пароль:
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.onFieldChange}
            />
          </label>
          <Button text="Войти" />
        </form>
      </div>
    );
  }
}

export default SignIn;
