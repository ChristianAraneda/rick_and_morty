export function validation(inputs) {
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  let errors = {};

  if (!regexEmail.test(inputs.email)) {
    errors.email = "El email ingresado no es valido mi rey/reina 👑";

    if (!inputs.email) {
      errors.email = "Debe ingresar un email";
    }
  }

  if (inputs.email.length > 35) {
    errors.email = "No puede tener más de 35 caracteres";
  }

  // if (!inputs.password) {
  //   errors.password = "Necesitas al menos un numero";
  // }

  if (!/.*\d+.*/.test(inputs.password)) {
    errors.password = "La contraseña debe contener al menos un número";
  }
  if (inputs.password.length > 10 || inputs.password.length < 6) {
    errors.password = "Debe tener una longitud entre 6 y 10 caracteres.";
  }

  return errors;
}
