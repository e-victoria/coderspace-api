const express = require('express');
const cors = require('cors')
const app = express();

const projectsController = require('./controllers/projects/projectsController');
projectsController.checkLogin(app);

app.use(cors({origin: 'http://localhost:4200'}));

app.listen(3000);
