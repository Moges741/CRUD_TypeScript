import { TaskManager } from "./taskManager";
const manager = new TaskManager();

const command = process.argv[2];
const value = process.argv[3];

switch(command) {
    case "add":
        manager.addTasks(value!);
        break;
    case 'list':
        manager.listTasks();
        break;
    case 'complete':
        manager.completeTask(Number(value));
        break;
    default:
        console.log(`
                    Commands:
                    add "Task name"
                    list
                    complete TASK_ID
                    delete TASK_ID
                    `);

}