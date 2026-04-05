function agregarTarea() {
  const fecha = document.getElementById("fechaTarea").value;
  const nombre = document.getElementById("nombreTarea").value;
  const lista = document.getElementById("listaTareas");

  if (fecha && nombre) {
    const item = document.createElement("li");
    item.textContent = `${fecha}: ${nombre}`;
    lista.appendChild(item);
  } else {
    alert("Por favor ingresa una fecha y un nombre de rutina.");
  }
}
