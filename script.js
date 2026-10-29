const todoList =[
  {
  name: 'wash dishes', 
  dueDate: '2025-3-29'
  },

  {name:'wash shoes',
  dueDate:'2025-3-29'
  }
];
renderTodoList();




function renderTodoList(){
  let todoListHTML = '';
  

  todoList.forEach((todoObject,index)=>{
    //DESTRUCTURING
    const {name,dueDate}=todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>  
    <button class="todo-delete-button js-delete-button">Delete</button>
    `;
    todoListHTML += html;
})
  
  document.querySelector('.js-todo-list')
   .innerHTML=`${todoListHTML}`;

  document.querySelectorAll('.js-delete-button').forEach((deleteButton,index)=>{
    deleteButton.addEventListener('click',()=>{
      todoList.splice(index,1);
      renderTodoList();
    })
  });

}

document.querySelector('.js-add-button').addEventListener('click',()=>{
  addTodo();
});




function addTodo(){
  const inputElement=document.querySelector('.js-name-input');
  const name=inputElement.value;
  const dateInputElement=document.querySelector('.js-due-date-input');
  const dueDate=dateInputElement.value;
  

  todoList.push({
    //name:name,
    //dueDate:dueDate
    name,
    dueDate}
  );
  

  inputElement.value='';
  renderTodoList();
}
