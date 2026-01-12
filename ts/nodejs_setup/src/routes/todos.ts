import { Router } from "express";

import type { Todo } from "../models/todo.js";

type RequestBody = { text: string };

const todos: Array<Todo> = [];

todos.push({ id: "1", text: "Some C++ refreshing" });
todos.push({ id: "2", text: "Learn Node.js" });
const newTodo: Todo = { id: "3", text: "Learn some AI stuff" };
todos.push(newTodo);

const router = Router();

router.get("/todo", (req, res, next) => {
    res.status(200).json({ todos: todos });
});

router.post("/todo", (req, res, next) => {
    if (!req.body) return res.status(500).json("Please add a valid request body!");
    const body = req.body as RequestBody;

    const todo: Todo = {
        id: new Date().toISOString(),
        text: body.text,
    };

    todos.push(todo);
    return res.status(201).json({ message: "Added todo", todo, todos });
});

router.put("/todo/:todoId", (req, res, next) => {
    if (!req.body) return res.status(500).json("Please add a valid request body!");
    const body = req.body as RequestBody;

    const id = req.params.todoId;
    const tid = todos.findIndex(t => t.id === id);

    if (tid >= 0) {
        todos[tid] = { id: todos[tid]!.id, text: body.text };
        return res.status(200).json({ message: "Changed todo", todo: todos[tid] });
    }
    res.status(404).json(`No todo with id ${id} found`);
});

router.delete("/todo/:todoId", (req, res, next) => {
    const id = req.params.todoId;
    const tid = todos.findIndex(t => t.id === id);

    if (tid >= 0) {
        // todos = todos.filter(t => t.id !== id);
        todos.splice(tid, 1); // removes exactly 1 item (mutating the array)

        return res.status(200).json({ message: "Removed todo", todos });
    }
});

export default router;
