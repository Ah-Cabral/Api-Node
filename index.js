//Fazendo a importação do express:

const express = require('express')

//Criando servidor:

const server = express()

//Criando rota:

//O .get recebe dois parâmetros: .get(url-acessada, função de retorno (callback))
server.get('/user', (req, res) => {
    //A função callback do .get() recebe dois parâmetros, o req e o res
    //o req representa todos os dados da requisição 
    console.log('Server Está Funcionando')
})

//Para podermos testar o servidor, precisamos que 
//ele escute uma porta

//Com isso, fazemos:
server.listen(5500)