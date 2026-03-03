import {Task, TaskStatus} from './task'

import * as fs from 'fs';
const FILE_PATH = "tasks.json";

export class TaskManager {
    private tasks: Task[] = [];

    constructor() {
        this.loadTasks();
    }

    private loadTasks() : void{
        if(fs.existsSync(FILE_PATH)){
        const data = fs.readFileSync(FILE_PATH, "utf-8");
        this.tasks = JSON.parse(data);
        }
    }

    private saveTasks(): void{
        fs.writeFileSync(FILE_PATH, JSON.stringify(this.tasks, null, 2));
    }
    addTasks(title: string): void{
        const newTask: Task =  {
            id: Date.now(),
            title,
            status: TaskStatus.Pending,
            createdAt: new Date(),
        };
        this.tasks.push(newTask);
        this.saveTasks();
        console.log("Task added!")
    }
    listTasks(): void{
        console.log("\n All Tasks ...");
        this.tasks.forEach((task) => {
            console.log(`${task.id} | ${task.title} | ${task.status}`);
        });
    }
    completeTask(id: number): void{
        const task = this.tasks.find((t) => t.id === id);
        if(!task){
            console.log("Task not found");
            return;
        }
        task.status = TaskStatus.Completed;
        this.saveTasks();
        console.log("Task Completed")
    }
    deleteTask(id: number): void{
        this.tasks = this.tasks.filter((t) => t.id !== id);
        this.saveTasks();
            console.log(" Task deleted!");

    }

}