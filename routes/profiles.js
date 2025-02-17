import express from 'express';

import fakeUsers from '../fakeUsers.json' assert { type: "json" };

const renderedUsers = fakeUsers.map((user)=>{
    const names = user.name.split(' ');
    const first_name = names.shift();
    const last_name = names.join(' ');
    const profileFromUser = {
      id: user.id,
      first_name,
      last_name,
      phone: user.phone,
      email: user.email,
      address: [user.address.street, user.address.suite].join(' '),
      city: user.address.city,
      state: '',
      zip: user.address.zipcode,
      photo: '',
      notes: user.website || ''
    }
    return profileFromUser;
});


// for /profiles
const listRouter = express.Router();

listRouter.get('/', (_req, res) => {
    res.json(renderedUsers);
});


// for /profile/*
const profileRouter = express.Router();

profileRouter.get('/:id', (req, res) => {
    // TODO: better error message if id is not a number or not given
    const id = parseInt(req.params.id);
    const user = renderedUsers.find((user) => user.id === id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json(`Couldn't find user with id ${id}`);
    }
});

profileRouter.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = renderedUsers.find((user) => user.id === id);
    if (user) {
        Object.assign(user, req.body);
        res.json(user);
    } else {
        res.status(404).json(`Couldn't find user with id ${id}`);
    }
});

profileRouter.post('/', (req, res) => {
    const newUser = req.body;
    newUser.id = renderedUsers.length + 1;
    renderedUsers.push(newUser);
    res.json(newUser);
});

export { listRouter, profileRouter };
