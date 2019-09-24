// Code goes here

var todoList = {
    // todos:['item1','item2','item3'],
    todos: [],
    displayTodos: function () {
        if (this.todos.length === 0) {
            console.log("Your todo list is empty !")
        } else {
            console.log('My Todos:');
            for (var i = 0; i < this.todos.length; i++) {
                // console.log(this.todos[i].todoText);
                if (this.todos[i].completed === true) {
                    console.log('(x)', this.todos[i].todoText);
                } else {
                    console.log('()', this.todos[i].todoText);

                }
            }
        }
    },
    addTodos: function (todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false,
            // by default it will be false to represent whther the user has completed the todo or not
        });
        this.displayTodos();
    },
    changeTodos: function (position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
        // ChangeTodos is a method on the todoList Object similar to addTodos
    },
    deleteTodos: function (position) {
        this.todos.splice(position, 1)
        this.displayTodos();
    },

    toggleCompleted: function (position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos()
    },

    toggleAll: function () {
        var totalTodos = this.todos.length;
        var completedTodos = 0;

        // get numbe of completed todos
        for (var i = 0; i < totalTodos; i++) {
            if (this.todos[i].completed === true) {
                completedTodos++;

            }
        }
        // case 1 to check whther the todo is completed (if everything is true make everything false)
        if (completedTodos === totalTodos) {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            }

        } else {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true;
            }
        }
        this.displayTodos();

    }

};





// display todos
// run displaytodos if someone clicks it
// var displayTodosButton =document.getElementById('displayTodosButton');


// // when someone clicks it


// displayTodosButton.addEventListener('click',);


// // toggle all

// var  =document.getElementById('toggleAll');


// toggleAll.addEventListener('click',);


var handlers = {
    displayTodosButton: function () {
        todoList.displayTodos()
    },

    addTodos: function () {
        var addTodosText = document.getElementById('addTodos');
        todoList.addTodos(addTodosText.value);
        addTodosText.value = "";
    },
    changeTodo: function () {
        var changeTodoPosition = document.getElementById('changeTodoPosition');
        var changeTodoText = document.getElementById('changeTodoText');
        todoList.changeTodos(changeTodoPosition.valueAsNumber, changeTodoText.value);
        changeTodoPosition.value = "";
        changeTodoText.value = "";

    },
    deleteTodos: function () {
        var deleteTodos = document.getElementById('deleteTodoPosition');
        todoList.deleteTodos(deleteTodos.valueAsNumber);
        deleteTodos.value = "";
    },
    toggleCompleted: function () {
        var toggleCompletedPosition = document.getElementById('toggleCompletedPosition');
        todoList.toggleCompleted(toggleCompletedPosition.valueAsNumber);
        toggleCompletedPosition.value = "";
    },
    toggleAll: function () {
        todoList.toggleAll()

    }
};
var view = {
    displayTodos: function () {
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';

        for (var i = 0; i < todoList.todos.length; i++) {
            var todoLi = document.createElement('li');
            todoLi.textContent = todoList.todos[i].todoText;
            todosUl.appendChild(todoLi);
        }
    }
};


















