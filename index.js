import express from 'express';
import cors from 'cors';

import fakeUsers from './fakeUsers.json' assert { type: "json" };

const app = express();
const port = 3001;

app.use(cors());

app.all('*', (_req, res) => {
  res.json(fakeUsers.map((user)=>{
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
  }))
});

app.use((_req, res, _next) => {
    res.status(404).send("Couldn't find that resource");
})

app.listen(port, () => {
    console.log(`Reversed backend listening on port ${port}`);
});