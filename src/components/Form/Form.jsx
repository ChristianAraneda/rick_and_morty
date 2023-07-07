import { useState } from "react";
import style from "./Form.module.css";
import { validation } from "./_validation";
import LogoImg from "./login_logo-removebg-preview.png";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    console.log(event.target.name);
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
    console.log(errors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.keys) login(userData);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit} className={style.contForm}>
        <img className={style.imagen} src={LogoImg} alt="" />
        <div className={style.inputBox}>
          <span className={style.icon}>
            <ion-icon name="mail"></ion-icon>
          </span>
          <input
            type="text"
            name="email"
            value={userData.email}
            onChange={handleChange}
            className={style.input1}
            required
          />
          {/* errors.email ? style.warning : */}

          <label htmlFor="email" className={style.label}>
            Email
          </label>
          <p className={style.danger}>{errors?.email}</p>
          <br />
        </div>

        {/* <hr style={{ color: "white" }} /> */}
        <div className={style.inputBox}>
          <span className={style.icon}>
            <ion-icon name="lock-closed"></ion-icon>
          </span>
          <input
            required
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            className={style.input1}
          />
          {/* errors.password ? style.warning : */}
          <label htmlFor="password" className={style.label}>
            Password
          </label>
          <p className={style.danger}>{errors?.password}</p>
        </div>

        <br />

        <button
          className={style.boton1}
          disabled={
            !userData.password ||
            !userData.email ||
            errors.email ||
            errors.password
          }>
          <span className={style.submit}>SUBMIT</span>
        </button>
      </form>
    </div>
  );
};

export default Form;
