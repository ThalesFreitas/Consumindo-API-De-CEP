 
  const {Router} = require('express');
  const api = require('../../services/api');

  const form = Router();

//   form.get('/', async (req, res) => {
//       try {
//         const {data} = await api.get(`${cep}/json/`);
//          return res.json(data);
    
//      } catch (error) {
//          console.error(error)
//       }
//   });




// app.get('/:cep', async (req, res) => {
//       const {cep} = req.params;

//      const {data} = await axios(`http://viacep.com.br/ws/${cep}/json/`)
//       return res.json(data);

//    })



// form.get('/', (req, res) => {
//     res.status(200).send({
//         title: 'Cep',
//         cep: '38300022'
//     });
// });

// form.get('/cep', async (req, res) => {
//          const cep = 38300023;
//          const {data} = await axios(`http://viacep.com.br/ws/${cep}/json/`)
//          res.json(data);

//        })
//   form.get('/:cep', async (req, res) => {
//      const {cep} = req.params;
//       const {data} = await api.get(`${cep}/json`);
//       res.json(data);
//   });



// form.get('/api', async (req, res) => {
//     const res = await api.get();
//     return res.json(res);
// });


module.exports = form;












