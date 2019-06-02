const express = require('express')
const app = express()

//obtener info de index
app.get('/', (req, res) => {
   res.send('index-page')
})

//obtener info de random/param1/param2/
app.get('/random/:numeroInicial/:numeroFinal', (req, res) => {
   const min = parseInt(req.params.numeroInicial)
   const max = parseInt(req.params.numeroFinal)
   
   if(isNaN(min) || isNaN(max)) {
      res.status(404)
      res.json({
         "error": 'petición incorrecta'
      })
      return
   }

   //números aleatorios
   const random = Math.random() * (max - min) + min
   const result = Math.floor(random)
   res.json({
      "NumerosAleatorios": result
   })
})

//puerto server
app.listen(3000, () => {
   console.log('server on port: 3000')
})