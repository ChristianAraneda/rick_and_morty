import style from "./About.module.css";
import fotoPerfil from "./Christian Ignacio Araneda Ocares .jpeg";

const About = () => {
  return (
    <div>
      <a href="https://www.linkedin.com/in/christian-araneda/">
        <h1 className={style.nombre}>Christian Ignacio Araneda</h1>
        <img
          className={style.imgen}
          src={fotoPerfil}
          alt="Christian Ignacio Araneda"
        />
      </a>
    </div>
  );
};

export default About;
