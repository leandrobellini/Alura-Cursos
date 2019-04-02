const express   = require('express');
const app       = express();
const routes    = require('../app/routes/routes');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}
));

routes(app);

require('marko/node-require').install();
require('marko/express');

module.exports = app;

/*
const express = require('express');
const app = express();

app.use('*', (req, res, next) => {
   console.log('1.1');
   next();
   console.log('1.2');
});

Para se aprofundar um pouco mais nas possibilidades que os middlewares nos oferecem, 
João pesquisou um pouco sobre o assunto e descobriu que o método use() do Express 
pode receber dois parâmetros, sendo o primeiro uma string que define as URLs 
que serão atendidas pelo middleware e como segundo parâmetro uma função. 
É essa função que irá definir o que o middleware deverá fazer e, por sua vez, 
recebe três parâmetros, a requisição, a resposta e uma função 
(normalmente chamada de next) que deve ser invocada para que o Express 
avance para o próximo middleware existente e caso não exista mais nenhum, 
passa a execução para a rota ativada. Sendo assim, a ordem em que os middlewares 
são definidos é de extrema importância! Além disso, um detalhe a ser observado, 
é que tudo que estiver antes da chamada da função next será executado antes da 
rota ativada e o que estiver após a chamada da função next será executado somente 
ao término da rota ativada!
*/
