const express = require('express');

const server = express();

server.use(express.json());

const projects = [
    { id: '1', title: 'primeiro projeto', tasks: ['primeira tarefa'] },
    { id: '2', title: 'segundo projeto', tasks: ['teste1', 'teste2'] },
    { id: '4', title: 'novo projeto', tasks: [] },
];

server.post('/projects', (req, res) => {
    const { id, title } = req.body;

    projects.push({ id: id, title: title, tasks: [] });

    return res.json(projects);
});

server.get('/projects', (req, res) => {
    return res.json(projects);
});

server.get('/projects/:id', (req, res) => {
    id = req.params.id;

    return res.json(projects.find((element) => element.id == id));
});

server.put('/projects/:id', (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    project = projects.find((element) => element.id == id);
    project.title = title;

    return res.json(projects);
});

server.delete('/projects/:id', (req, res) => {
    const { id } = req.params;

    project = projects.find((element) => element.id == id);
    projectIndex = projects.indexOf(project);

    projects.splice(projectIndex, 1);

    return res.send();
});

server.post('/projects/:id/tasks', (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    project = projects.find((element) => element.id == id);
    tasks = project.tasks;

    tasks.push(title);

    return res.json(projects);
});

server.listen('3000');
