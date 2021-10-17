import express from 'express'


const app = express()

// Cria o servidor na porta 3000
app.listen(3000, ()=>{
    return console.log("Server was initialized")
});

app.get('/', (req, res)=>{
    return res.send("Seja Bem Vindo")
})