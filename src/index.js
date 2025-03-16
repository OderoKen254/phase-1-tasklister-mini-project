document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('#create-task-form'); 
  let input = document.querySelector('#new-task-description');
  let taskList = document.querySelector('#tasks');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
  

    const task = input.value.trim();
    const priority = document.querySelector('#priority-level').value;

    if (task) {
      //function to create a new task list item
      const listItem = document.createElement("li");
      listItem.textContent = task;

      if (priority === 'high') listItem.style.color = 'red';
      else if (priority === 'medium') listItem.style.color = 'orange';
      else if (priority === 'low') listItem.style.color = 'green';

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete'; 
      deleteButton.style.marginLeft = '10px';

      //adding event listener to delete button
      deleteButton.addEventListener('click', () => {
        listItem.remove(); 
      })

      //appending task list
      listItem.appendChild(deleteButton);
      taskList.appendChild(listItem);
      input.value = ' ';
    }
  });

});







