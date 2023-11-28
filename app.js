const express = require('express');
const path = require('path');
const app = express();

const PORT = 3030;

const mainRouters = require('./routers/main.routes');
const authRouters = require('./routers/auth.routes');
const usersRouters = require('./routers/users.routes');

app.use(express.static(path.join(__dirname, 'public')))

/* Rutas */
app.use('/', mainRouters);
app.use('/auth', authRouters);
app.use('/users', usersRouters);


app.listen(PORT, () => console.log(`Server Running in http://localhost:${PORT}`))