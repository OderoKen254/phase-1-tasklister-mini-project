
// document.addEventListener("DOMContentLoaded", () => {
//   // Grab the existing form and input elements
//   const form = document.querySelector('#create-task-form'); 
//   const input = document.querySelector('#new-task-description');
//   const taskList = document.querySelector('#tasks');

//   // Create and add a priority dropdown to the form
//   const prioritySelect = document.createElement("select");
//   prioritySelect.id = "priority-level";
//   prioritySelect.innerHTML = `
//     <option value="low">Low</option>
//     <option value="medium">Medium</option>
//     <option value="high">High</option>
//   `;
//   form.appendChild(prioritySelect);

//   // Create and add a sort button to the form
//   const sortButton = document.createElement("button");
//   sortButton.textContent = "Sort Tasks";
//   form.appendChild(sortButton);

//   // Array to store tasks as objects { content, priority }
//   let tasks = [];
//   // Toggle flag for sort order: true for ascending, false for descending
//   let ascending = true;

//   // Function to render tasks from the tasks array into the DOM
//   function renderTasks() {
//     // Clear the current list
//     taskList.innerHTML = '';

//     // Loop through tasks and create list items
//     tasks.forEach((taskObj, index) => {
//       const listItem = document.createElement("li");
//       listItem.textContent = `${taskObj.content} (${taskObj.priority})`;

//       // Optional: Color-code the task based on its priority
//       if (taskObj.priority === 'high') {
//         listItem.style.color = 'red';
//       } else if (taskObj.priority === 'medium') {
//         listItem.style.color = 'orange';
//       } else { // low
//         listItem.style.color = 'green';
//       }

//       // Create a delete button for this task
//       const deleteButton = document.createElement('button');
//       deleteButton.textContent = 'Delete';
//       deleteButton.style.marginLeft = '5px';

//       // Removing the task from the array when delete is clicked
//       deleteButton.addEventListener('click', () => {
//         tasks.splice(index, 1);
//         renderTasks();
//       });

//       // Append the delete button and the list item to the DOM
//       listItem.appendChild(deleteButton);
//       taskList.appendChild(listItem);
//     });
//   }

//   // Handle form submission: add task with priority
//   form.addEventListener('submit', (event) => {
//     event.preventDefault();

//     // Get task content and trim extra spaces
//     const task = input.value.trim();
    
//     if (task) {
//       // Get the selected priority value
//       const priority = prioritySelect.value;
//       // Create a task object and add it to the tasks array
//       const taskObj = { content: task, priority: priority };
//       tasks.push(taskObj);

//       // Re-render the task list
//       renderTasks();
//       // Clear the input field for the next task
//       input.value = '';
//     }
//   });

//   // Sort button: toggles sorting order based on priority
//   sortButton.addEventListener('click', () => {
//     // Define the priority ranking
//     const priorityOrder = { low: 1, medium: 2, high: 3 };

//     // Sort using the order depending on the current toggle flag
//     tasks.sort((a, b) => {
//       return ascending
//         ? priorityOrder[a.priority] - priorityOrder[b.priority]
//         : priorityOrder[b.priority] - priorityOrder[a.priority];
//     });

//     // Toggle the sort order
//     ascending = !ascending;
//     // Re-render the sorted task list
//     renderTasks();
//   });
// });


document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector('#create-task-form'); 
    let input = document.querySelector('#new-task-description');
    let taskList = document.querySelector('#tasks');
  
    // Create an additional input field for Due Date
    const dueDateInput = document.createElement('input');
    dueDateInput.id = 'due-date';
    dueDateInput.type = 'date';  // Using a date picker for convenience
    dueDateInput.placeholder = 'Due Date';
    form.appendChild(dueDateInput);
  
    // Create a priority dropdown field and add it to the form
    const prioritySelect = document.createElement('select');
    prioritySelect.id = "priority-level";
    prioritySelect.innerHTML = `
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    `;
    form.appendChild(prioritySelect);
  
    // Create a sort button to toggle sorting by priority
    const sortButton = document.createElement("button");
    sortButton.textContent = "Sort Tasks";
    form.appendChild(sortButton);
  
    // Array to store tasks as objects: { content, priority, dueDate }
    let tasks = [];
    let ascending = true;
  
    // Function to re-render the task list based on the tasks array
    function renderTasks() {
      taskList.innerHTML = ''; // Clear the list
  
      tasks.forEach((taskObj, index) => {
        // Create a list item that displays task content, priority, and due date (if provided)
        const listItem = document.createElement("li");
        let dueDateStr = taskObj.dueDate ? ` | Due: ${taskObj.dueDate}` : '';
        listItem.textContent = `${taskObj.content} (${taskObj.priority})${dueDateStr}`;
  
        // Optionally, color-code the text based on priority
        if (taskObj.priority === 'high') {
          listItem.style.color = 'red';
        } else if (taskObj.priority === 'medium') {
          listItem.style.color = 'orange';
        } else {
          listItem.style.color = 'green';
        }
  
        // Create a delete button for the task
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.style.marginLeft = '5px';
  
        // When the delete button is clicked, remove the task from the array and re-render the list
        deleteButton.addEventListener('click', () => {
          tasks.splice(index, 1);
          renderTasks();
        });
  
        // Append the delete button to the list item
        listItem.appendChild(deleteButton);
        // Append the list item to the task list
        taskList.appendChild(listItem);
      });
    }
  
    // When the form is submitted, add a new task object including the due date and priority
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const task = input.value.trim();
      const dueDate = dueDateInput.value; // Get the due date value
      if (task) {
        // Create the task object
        const taskObj = { content: task, priority: prioritySelect.value, dueDate: dueDate };
        tasks.push(taskObj);
  
        renderTasks(); // Update the displayed list
  
        // Clear the input fields after submission
        input.value = '';
        dueDateInput.value = '';
      }
    });
  
    // Sort button to toggle sorting order based on task priority
    sortButton.addEventListener('click', () => {
      const priorityOrder = { low: 1, medium: 2, high: 3 };
  
      tasks.sort((a, b) => {
        return ascending
          ? priorityOrder[a.priority] - priorityOrder[b.priority]
          : priorityOrder[b.priority] - priorityOrder[a.priority];
      });
  
      ascending = !ascending; // Toggle between ascending and descending order
      renderTasks(); // Re-render the sorted list
    });
  });
  