const tasks = [
  {
    titulo: "Comprar comida para o gato",
    tipo: "Urgente",
  },
  {
    titulo: "Consertar Computador",
    tipo: "Prioritário",
  },
  {
    titulo: "Beber água",
    tipo: "Normal",
  },
];

function createCard(taskInfo, index) {
  const li = document.createElement("li");
  const div = document.createElement("div");
  const span = document.createElement("span");
  const p = document.createElement("p");

  p.innerText = taskInfo.titulo;

  span.classList.add("task-type");

  if (taskInfo.tipo === "Urgente") {
    span.classList.add("span-urgent");
  } else if (taskInfo.tipo === "Prioritário") {
    span.classList.add("span-priority");
  } else {
    span.classList.add("span-normal");
  }

  div.appendChild(span);
  div.appendChild(p);

  const button = document.createElement("button");
  button.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';

  button.addEventListener("click", function () {
    tasks.splice(index, 1);
    renderElements(tasks);
  });

  li.appendChild(div);
  li.appendChild(button);

  return li;
}

function renderElements(taskList) {
  const htmlList = document.querySelector(".tasks");
  htmlList.innerHTML = "";

  for (let i = 0; i < taskList.length; i++) {
    const card = createCard(taskList[i], i);
    htmlList.appendChild(card);
  }
}

const addButton = document.getElementById("btnSubmit");

addButton.addEventListener("click", function (event) {
  event.preventDefault();

  const titleInput = document.getElementById("input_title");
  const typeInput = document.getElementById("input_priority");

  const newTask = {
    titulo: titleInput.value,
    tipo: typeInput.value,
  };

  tasks.push(newTask);
  renderElements(tasks);

  titleInput.value = "";
  typeInput.selectedIndex = 0;
});

renderElements(tasks);