document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('#create-task-form'); 
  let input = document.querySelector('#new-task-description');
  let taskList = document.querySelector('#tasks');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const task = input.value.trim();

    if (task) {
      const listItem = document.createElement("li");
      listItem.textContent = task;

      taskList.appendChild(listItem);

      input.value = ' ';
    }

  });

});





