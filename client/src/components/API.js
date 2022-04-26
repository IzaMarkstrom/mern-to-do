import { BASE_API } from "../utils"

async function createNewUser(payload) {
    return fetch(`${BASE_API}/users/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    });
}

async function loginUser(payload) {
    return fetch(`${BASE_API}/users/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    })
}

async function getUserInfo() {
    const token = localStorage.getItem("todoList")
    
    return fetch(`${BASE_API}/users//getUser`, {
        method: "GET",
        headers: { "Content-Type": "application/json", 
        "Authorization": `Bearer ${token}` },
        body: JSON.stringify()
    })
}

async function getTagList() {
    const token = localStorage.getItem("todoList")

    return fetch(`${BASE_API}/tags`, {
        method: "GET",
        headers: { "Content-Type": "application/json", 
                    "Authorization": `Bearer ${token}` },
        body: JSON.stringify()
    })
}

async function getTodosByTagList(tag) {
    const token = localStorage.getItem("todoList")

    return fetch(`${BASE_API}/todos/homepage/tag/${tag}`, {
        method: "GET",
        headers: { "Content-Type": "application/json", 
                    "Authorization": `Bearer ${token}` },
        body: JSON.stringify()
    })
}

async function getTodoList() {
    const token = localStorage.getItem("todoList")

    return fetch(`${BASE_API}/todos/homepage`, {
        method: "GET",
        headers: { "Content-Type": "application/json", 
                    "Authorization": `Bearer ${token}` },
        body: JSON.stringify()
    })
}

async function getNotDoneTodoList() {
    const token = localStorage.getItem("todoList")

    return fetch(`${BASE_API}/todos/homepage/notDone`, {
        method: "GET",
        headers: { "Content-Type": "application/json", 
                    "Authorization": `Bearer ${token}` },
        body: JSON.stringify()
    })
}

async function getCompletedTodoList() {
    const token = localStorage.getItem("todoList")

    return fetch(`${BASE_API}/todos/homepage/completedTodos`, {
        method: "GET",
        headers: { "Content-Type": "application/json", 
        "Authorization": `Bearer ${token}` },
        body: JSON.stringify()
    })
}

async function completeTodo(todoId) {
    const token = localStorage.getItem("todoList")

    return fetch(`${BASE_API}/todos/${todoId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", 
        "Authorization": `Bearer ${token}` },
    })
}

async function createNewTodo(payload) {
    const token = localStorage.getItem("todoList")

    return fetch(`${BASE_API}/todos/homepage`, {
        method: "POST",
        headers: { "Content-Type": "application/json", 
        "Authorization": `Bearer ${token}` },
        body: JSON.stringify(payload)
    })
}

async function deleteTodo(todoId) {
    return fetch(`${BASE_API}/todos/${todoId}`, { 
        method: 'DELETE' 
    })
}


export { 
    createNewUser, 
    loginUser, 
    completeTodo, 
    createNewTodo, 
    getTagList,
    getTodoList, 
    getNotDoneTodoList,
    getCompletedTodoList,
    deleteTodo,
    getTodosByTagList,
    getUserInfo
};