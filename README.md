# Reversed Backend

## Schala Walls making a barebones profile server for the RIVET coding challenge

This is a tiny fragile node/express app. It's a basic reverse engineering of the assumed functionality of the server for the Rivet coding challenge.
I wanted to show off my frontend skills but couldn't do that without a backend, so made this little program.

The whole database is stored in an in-memory javascript array of objects. There is no backend validation. It is not typed. But it works for the purpose.

## Next dev steps:

- convert to typescript (this would likely mean making a `rivet-foundation`-like library)
- add backend validation with yup or more
- switch from in-memory to sequelize

## Installation / Setup

Tested on node `v22.13.0` and npm `11.0.0`. Install with:

### `npm install`

## Running

### `npm start`

This will start the server listening on port 3001 (to avoid conflicting with CRA frontend)

There are two configuration variables in `app.js`:

- SLOW_NETWORK defaults to true, and adds 1 second delay to all requests so the frontend can
  show off loading states
- PORT defaults to 3001, since the old frontend was on create-react-app, which collided
