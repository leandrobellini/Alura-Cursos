const db = require('../../config/database');
const LivroDao = require('../infra/livro-dao');

module.exports = (app) => {
    app.get('/', function(req, resp){
        resp.send('<b>Leandro its Ok</b>');
    });

    app.get('/livros', function(req, resp){
        const livroDao = new LivroDao(db);

        livroDao.lista()
                .then(livros => resp.marko(
                    require('../views/livros/lista/lista.marko'),
                    {
                        livros: livros
                    }
                ))
                .catch(erro => console.log('Errooo'));
    });

    app.get('/livros/form', function(req, resp){
        resp.marko(require('../views/livros/form/form.marko'));
    });

    app.post('/livros', function(req, resp){
        console.log(req.body);
        const livroDao = new LivroDao(db);

        livroDao.adiciona(req.body)
                .then(resp.redirect('/livros'))
                .catch(erro => console.log('Errooo'));
    });
}

