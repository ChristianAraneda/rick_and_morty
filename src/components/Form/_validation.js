export function validation(inputs) {
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  let errors = {};

  if (!inputs.email) {
    errors.email = "Se requiere un email obligatorio";
  }
  if (!regexEmail.test(inputs.email)) {
    errors.email = "Debe ser un correo electrónico valido";
  }

  if (inputs.email.length > 35) {
    errors.email = "No puede tener más de 35 caracteres";
  }

  // if (!inputs.password) {
  //   errors.password = "Necesitas al menos un numero";
  // }

  if (inputs.password.length > 10 || inputs.password.length < 6) {
    errors.password = "Debe tener una longitud entre 6 y 10 caracteres.";
  }

  return errors;
}
