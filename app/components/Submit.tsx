"use client"

import { useState, FormEvent, ChangeEvent } from "react";

interface Task {
    id: string;
    title: string;
    completed: boolean;
}


export default function Submit() {
    const [task, setTask] = useState<string>("");
    const [tasks, setTasks] = useState<Task[]>([]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (task !== "") {
            setTasks((tasks) => [
                ...tasks,
                {
                    id: crypto.randomUUID(),
                    title: task,
                    completed: false
                }
            ]);

            setTask("");
        }
        console.log(tasks)
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value);
    };
    return (
        <>
            <form className="flex gap-2" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={task}
                    onChange={handleChange}
                    placeholder="Type your task"
                    className="rounded-md px-4 py-2 bg-zinc-900 " required

                />
                <input
                    type="submit"
                    value="Add Task"
                    className="px-4 py-2 rounded-md bg-blue-300 hover:bg-blue-200 transition-all"
                />
            </form>
            <ul className="flex flex-col gap-2 items-center">
                {
                    tasks.map((task) => {
                        return (
                            <li key={task.id} className="bg-zinc-900 rounded-md px-4 py-2 flex justify-between items-center lg:w-80 w-72 h-fit">
                                <h1 className="px-2 break-words lg:w-48 w-44">{task.title}</h1>
                                <button onClick={() => { setTasks(tasks.filter(t => t.id !== task.id)) }} className="lg:px-4 py-2 px-3 rounded-md bg-red-300 hover:bg-red-200 transition-all">Delete</button>
                            </li>
                        )
                    })
                }

            </ul >
        </>
    );
}
