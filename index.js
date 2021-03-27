//Fazendo a importação do express:
const express = require('express')

//Criando servidor:
const server = express()

server.use(express.json())

//Criando array com usuários
const users = ['Alisson', 'João']

//Criando rota:

//O .get recebe dois parâmetros: .get(url-acessada, função de retorno (callback))
server.get('/user', (req, res) => {
    //A função callback do .get() recebe dois parâmetros, o req e o res
    //o req representa todos os dados da requisição 
    return res.json(users)
})

//Método para adição de usuário
server.post('/users', (req, res) => {
    const { name } = req.body

    users.push(name)

    return res.json(users)
})

//Método para alteração de usuário
server.put('/users/:index', (req, res) => {
    const { index } = req.params
    const { name } = req.body

    users[index] = name

    return res.json(users)
})

//Método para Deleção de usuário
server.put('/users/:index', (req, res) => {

    users.splice(index, 1)

})

//Para podermos testar o servidor, precisamos que 
//ele escute uma porta

//Com isso, fazemos:
server.listen(5500)