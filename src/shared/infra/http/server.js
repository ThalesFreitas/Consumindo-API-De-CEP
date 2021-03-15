const cors = require('cors');
const express = require('express');

const routes = require('../http/routes/index');
const api = require('../../../services/api');

const app = express();
app.use(cors());
app.use(express.json());
 app.use(routes);

 app.get('/:cep', async (req, res) => {
           try {
             const {cep} = req.params;
            console.log(cep);
             const {data} = await api.get(`${cep}/json/`);
              return res.json(data);
        
          } catch (error) {
              console.error(error)
           }
       });
app.get('home', (req, res) => {
    res.render("src/pages/home")
})
app.listen(3333, () => {
    console.log('⚡  Server started on port 3333!');
});

