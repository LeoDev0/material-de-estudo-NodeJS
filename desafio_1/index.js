const express = require('express');

const server = express();

server.use(express.json());

const projects = [
    { id: '1', title: 'primeiro projeto', tasks: ['primeira tarefa'] },
    { id: '2', title: 'segundo projeto', tasks: ['teste1', 'teste2'] },
    { id: '4', title: 'novo projeto', tasks: [] },
];

// Middleware local
function idExists(req, res, next) {
    const { id } = req.params;

    idIsValid = projects.find((element) => element.id == id);

    if (!idIsValid) {
        return res.status(404).json({ error: 'Esse projeto não existe' });
    }

    return next();
}

// Middleware global
server.use((req, res, next) => {
    console.count('Número de requisições');

    next();
});

server.post('/projects', (req, res) => {
    const { id, title } = req.body;

    projects.push({ id: id, title: title, tasks: [] });

    return res.json(projects);
});

server.get('/projects', (req, res) => {
    return res.json(projects);
});

server.get('/projects/:id', idExists, (req, res) => {
    id = req.params.id;

    return res.json(projects.find((element) => element.id == id));
});

server.put('/projects/:id', idExists, (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    project = projects.find((element) => element.id == id);
    project.title = title;

    return res.json(project);
});

server.delete('/projects/:id', idExists, (req, res) => {
    const { id } = req.params;

    // project = projects.find((element) => element.id == id);
    // projectIndex = projects.indexOf(project);
    const projectIndex = projects.findIndex((p) => p.id == id);

    projects.splice(projectIndex, 1);

    return res.send();
});

server.post('/projects/:id/tasks', idExists, (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    project = projects.find((element) => element.id == id);
    tasks = project.tasks;

    tasks.push(title);

    return res.json(project);
});

server.listen('3000');

