module.exports = (app) => {
    app.get('/', function(req, resp){
        resp.send('<b>Leandro its OOOO</b>');
    });

    app.get('/livros', function(req, resp){
        resp.marko(
            require('../views/livros/lista/lista.marko'),
            {
                livros: [
                    { 
                        id: 1,
                        titulo: 'Fundamentos do Node'
                    },
                    { 
                        id: 2,
                        titulo: 'Node Avançado'
                    },
                    { 
                        id: 4,
                        titulo: 'Leandro Banco Safra'
                    }
                ]
            }
        );
    });
}

