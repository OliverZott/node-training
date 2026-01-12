import { Router } from "express";

import type { Todo } from "../models/todo.js";

const todos: Array<Todo> = [];

todos.push({ id: "1", text: "Some C++ refreshing" });
todos.push({ id: "2", text: "Learn Node.js" });

const newTodo: Todo = { id: "3", text: "Learn some AI stuff" };
todos.push(newTodo);

const router = Router();

router.get("/", (req, res, next) => {
    res.status(200).json({ todos: todos });
});

export default router;
