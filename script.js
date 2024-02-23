function validarIP() {

  // Obtener el elemento de entrada y el elemento de error
  let input = document.getElementById("dirrecion-ip");
  let error = document.getElementById("error-entrada");
  let ip = input.value.trim();

  // Eliminar caracteres no permitidos (diferentes a números y puntos)
  ip = ip.replace(/[^0-9.]/g, '');

  // Eliminar ceros a la izquierda en grupos de 3 dígitos
  ip = ip.replace(/\b0+(\d{3})\b/g, "$1");

  // Verificar si hay más de 3 puntos y eliminar el último si es necesario
  if (ip.split(".").length > 4) {
    ip = ip.slice(0, -1);
  }

  // Autocompletar el punto después de 3 caracteres numéricos consecutivos
  ip = ip.replace(/(\d{3})(?=\d)/g, '$1.');

  // Corregir puntos consecutivos
  ip = ip.replace(/\.+/g, ".");

  // No empezar con puntos
  if (ip.length === 1 && !ip.match(/[^.]/)) {
    ip = ip.replace(/^\./, "");
  }

  // Asignar el valor modificado de vuelta al input
  input.value = ip;

  // Validación de longitud mínima y máxima
  if (ip.length < 7 || ip.length > 15) {
    error.textContent = "La dirección IP debe tener entre 7 y 15 caracteres.";
    return;
  }

  // Validación de valores numéricos
  for (let i = 0; i < (input.value.split(".")).length; i++) {
    let group = (input.value.split("."))[i];
    if (parseInt(group) < 0 || parseInt(group) > 255) {
      error.textContent = "Los grupos de la dirección IP deben estar en el rango de 0 a 255.";
      return;
    }
  }

  // Validación exitosa
  error.textContent = "";
}
