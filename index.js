// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res) => {
//     const read = fs.createReadStream('./static/index.html')
//     read.pipe(res)
// })

// server.listen(3000)

// console.log('server on port', 3000)

// SERVER CON EXPRESS
const express = require("express");

const app = express();

app.use(express.text())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.post('/user', (req, res) => {
  console.log(req.body)
  res.send('Nuevo usuario creado')
})
// app.get("/", (req, res) => {
//   res.send("Hello world");
// });

// app.get("/miarchivo", (req, res) => {
//   res.sendFile("./fondo.jpg", {
//     root: __dirname,
//   });
// });

// app.get("/user", (req, res) => {
//   res.json({
//     name: "franco",
//     lastname: "sellan",
//     age: 40,
//     point: [1, 2, 3],
//     adress: {
//       city: "new york",
//       street: "some street 123",
//     },
//   });
// });

// app.get("/isAlive", (req, res) => {
//     res.sendStatus(204)
//   });
// app.get('/products', (req, res) => {
//     res.send('Lista de productos')
// })

// app.post('/products', (req, res) => {
//     res.send('Creando productos')
// })

// app.put('/products', (req, res) => {
//     res.send('Actualizando productos')
// })

// app.delete('/products', (req, res) => {
//     res.send('Eliminando un producto')
// })

// app.patch('/products', (req, res) => {
//     res.send('Actualizando una parte del producto')
// })

// app.get('/', (req, res) => {
//     res.send('Hello world')
// })

// app.get('/about', (req, res) => {
//     res.send('About')
// })

// app.get('/weather', (req, res) => {
//     res.send('The current weather is nice')
// })

// app.use((req, res) => {
//     res.status(404).send('No se encontro tu pagina')
// })

app.listen(3000);

console.log("server on port", 3000);
