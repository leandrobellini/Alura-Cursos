
class LivroDao {
    constructor(db){
        this._db = db;
    }

    adiciona(livro){
        return new Promise((resolve, reject) => {
            this._db.run(
                'INSERT INTO livros (titulo, preco, descricao) values (?, ?, ?)',
                [livro.titulo, livro.preco, livro.descricao],
                function(err){
                    if(err){
                        console.log(err);
                        return reject('Nao foi possivel add um livro!');
                    }

                    resolve();
                }
            );
        });
    }

    lista(){
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM livros',
                (erro, resultados) => {
                    if(erro) return reject('Nao foi possivel listar livros');

                    return resolve(resultados);
                }
            );
        })
    }

}

module.exports = LivroDao;