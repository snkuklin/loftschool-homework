import * as React from "react";
import Button from "../../common/button";

export interface SignUpProps {
  onSubmitAction: () => void;
}

class SignUp extends React.Component<SignUpProps> {
  state = {
    email: "",
    firstName: "",
    surname: "",
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
    const { email, firstName, surname, password } = this.state;
    return (
      <div>
        <h1>Регистрация</h1>
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
            Имя:
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={this.onFieldChange}
            />
          </label>
          <label>
            Фамилия:
            <input
              type="text"
              name="surname"
              value={surname}
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
          <Button text="Зарегистрироваться" />
        </form>
      </div>
    );
  }
}

export default SignUp;
