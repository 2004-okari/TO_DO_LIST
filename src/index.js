import _ from 'lodash';
import './style.css';
import './index.html';

const tasks = [
  {
    description: 'wash the dishes',
    completed: false,
    index: 1
  },
  {
    description: 'buy the house',
    completed: false,
    index: 2
  }
];

let i = 0;

const listStorage = document.querySelector('.list-storage');
tasks.forEach((task) => {
  const toDoList = document.createElement('div');
  toDoList.classList.add('item');
  toDoList.innerHTML = 
  `<label class="label"><input type="checkbox" class="checkbox">${task[0]}</label>
   <i class="fa-solid fa-trash-can icon-3"></i>`

  listStorage.appendChild(toDoList);
  i++;
});