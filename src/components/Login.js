import React from "react";

function Login(props) {
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.email || !data.password) {
      return;
    }
    props.handleLogin(data.email, data.password);
  };

  return (
    <form className="auth-form">
      <h2 className="auth-form__title">Вход</h2>
      <input
        type="email"
        className="auth-form__input-email auth-form-input"
        name="email"
        value={data.email}
        onChange={handleChange}
        placeholder="Введите ваш e-mail"
      />
      <input
        type="password"
        className="auth-form__input-password auth-form-input"
        name="password"
        value={data.password}
        onChange={handleChange}
        placeholder="Введите пароль"
      />
      <button
        type="submit"
        className="auth-form__button-submit"
        onClick={handleSubmit}
      >
        Войти
      </button>
      <p className="auth-form__text"></p>
    </form>
  );
}

export default Login;
