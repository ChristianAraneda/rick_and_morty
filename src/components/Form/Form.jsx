import { useState } from "react";
import style from "./Form.module.css";
import { validation } from "./_validation";
import LogoImg from "./login_logo-removebg-preview.png";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    // email: "",
    // password: "",
  });

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
    login(userData);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit} className={style.contForm}>
        <img className={style.imagen} src={LogoImg} alt="" />
        <label htmlFor="email" className={style.label}>
          Email
        </label>
        <br />
        <input
          type="text"
          name="email"
          value={userData.email}
          onChange={handleChange}
          className={errors.email ? style.warning : style.input}
        />
        <p className={style.danger}>{errors?.email}</p>
        <hr style={{ color: "white" }} />
        <label htmlFor="password" className={style.label}>
          Password
        </label>
        <br />
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          className={errors.password ? style.warning : style.input}
        />
        <p className={style.danger}>{errors?.password}</p>

        <button className={style.boton1}>
          <span className={style.submit}>SUBMIT</span>
        </button>
      </form>
    </div>
  );
};

export default Form;
