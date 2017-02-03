var todoApp = {
    todos: [],
    init: function(){
        this.cacheDom();
        this.addEventListeners();
        this.render();
    },
    cacheDom: function(){
        this.createButton = document.querySelector('#create');
        this.taskInput = document.querySelector('#task');
        this.list = document.querySelector('#list');
    },
    render: function(){
        var listItemsFromTodos = this.todos.map(function(todo){
            return '<li>' + todo + '</li>';
        }) .join('');
        console.log(listItemsFromTodos)
        this.list.innerHTML = listItemsFromTodos;
    },
    addEventListeners: function(){
        this.createButton.addEventListener('click', this.addToDo);
    },
    addToDo: function(){
        var taskValue = todoApp.taskInput.value;
        console.log(taskValue);
        todoApp.todos.push(taskValue);
        todoApp.render();
    }
};
// console.log(todoApp);
todoApp.init();
// console.log(todoApp);