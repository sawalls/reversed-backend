import express from 'express';

import { inMemoryUsers } from '../lib/inMemoryUsers.js';

// for /profiles
const listRouter = express.Router();

listRouter.get('/', (_req, res) => {
    res.json(inMemoryUsers);
});


// for /profile/*
const profileRouter = express.Router();

profileRouter.get('/:id', (req, res) => {
    // TODO: better error message if id is not a number or not given
    const id = parseInt(req.params.id);
    const user = inMemoryUsers.find((user) => user.id === id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json(`Couldn't find user with id ${id}`);
    }
});

profileRouter.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = inMemoryUsers.find((user) => user.id === id);
    if (user) {
        Object.assign(user, req.body);
        res.json(user);
    } else {
        res.status(404).json(`Couldn't find user with id ${id}`);
    }
});

profileRouter.post('/', (req, res) => {
    const newUser = req.body;
    newUser.id = inMemoryUsers.length + 1;
    inMemoryUsers.push(newUser);
    res.json(newUser);
});

export { listRouter, profileRouter };
