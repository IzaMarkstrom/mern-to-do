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

async function getTodoList() {
    return fetch(`${BASE_API}/todos/homepage`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify()
    })
}

async function completeTodo(todoId) {
    return fetch(`${BASE_API}/todos/${todoId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" }
    })
}

async function createNewTodo(payload) {
    return fetch(`${BASE_API}/todos/homepage`, {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({text: payload})
    })
}


export { createNewUser, loginUser, completeTodo, createNewTodo, getTodoList };