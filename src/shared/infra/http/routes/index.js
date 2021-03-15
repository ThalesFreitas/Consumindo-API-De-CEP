const {Router} = require('express');

const Form = require('../../../../pages/Form/form.routes');

const routes = Router();

routes.use('/form', Form);


 module.exports = routes;