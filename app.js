const express = require('express')
const math = require('mathjs')
const app = express()
const port = process.env.PORT || 5000

app.use(express.json())

app.get('/', (req, res) => {

    console.log('home')
    res.send('home')

}
)

app.post('/numeros/sumatoria', (req,res) => {

    const suma = math.sum(req.body.numeros)
    var result = {
        resultado: suma
    }
    res.send(result)

}
)

app.post('/numeros/productoria', (req,res) => {

    const prod = math.prod(req.body.numeros)
    var result = {
        resultado: prod
    }
    res.send(result)

}
)

app.post('/numeros/extremos', (req,res) => {

    const min = math.min(req.body.numeros)
    const max = math.max(req.body.numeros)
    var result = {
        resultado: {min, max}
    }
    res.send(result)

}
)




app.post('/numeros/resta', (req,res) => {

    const resta = math.subtract(req.body.numeroA, req.body.numeroB)
    var result = {
        resultado: resta
    }
    res.send(result)
    
}
)

app.post('/numeros/division', (req,res) => {

    const division = math.divide(req.body.numeroA, req.body.numeroB)
    var result = {
        resultado: division
    }
    res.send(result)
    
}
)

app.post('/matrices/suma', (req,res) => {

    const suma = math.add(req.body.matrizA, req.body.matrizB)
    var result = {
        resultado: suma
    }
    res.send(result)
    
}
)

app.post('/matrices/multiplicacion', (req,res) => {

    const multiplicacion= math.multiply(req.body.matrizA, req.body.matrizB)
    var result = {
        resultado: multiplicacion
    }
    res.send(result)
    
}
)

app.post('/matrices/determinante', (req,res) => {

    const determinante= math.det(req.body.matriz)
    var result = {
        resultado: determinante
    }
    res.send(result)
    
}
)


app.listen(port, () => {
    console.log(`Escuchando en puerto: ${port}`)    
}
)