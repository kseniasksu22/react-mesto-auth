import React from "react";

function Register(props) {
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
    const { email, password } = data;
    props.handleRegister(email, password);
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2 className="auth-form__title">Региcтрация</h2>
      <input
        type="email"
        className="auth-form__input-email auth-form-input"
        name="email"
        value={data.email}
        onChange={handleChange}
        placeholder="Введите ваш e-mail"
        required
      />
      <input
        type="password"
        className="auth-form__input-password auth-form-input"
        name="password"
        value={data.password}
        onChange={handleChange}
        placeholder="Введите пароль"
        required
        minLength="4"
      />
      <button
        type="submit"
        className="auth-form__button-submit"
        onClick={handleSubmit}
      >
        Загеристрироваться
      </button>
      <p className="auth-form__text"></p>
    </form>
  );
}

export default Register;
