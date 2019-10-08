import {collectedTasks} from "../constants";

export const collectedTasksExist = selectedProject =>
    collectedTasks.find(task => task.key === selectedProject);

export const getTitle = (projects,projectsId) =>
    projects.find(project => project.id === projectsId);

export const getCollectedTitle = (projects,key) =>
    projects.find(project => project.key === key);

