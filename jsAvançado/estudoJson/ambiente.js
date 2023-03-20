const pessoas = [
     {
        nome: 'Vinicius',
        segundoNome: 'Lavoura',
        trabalho: 'Programador',
        hobbies: ['jogar', 'Assistir filmes', 'Estudar']
    },
    {
        nome: 'João',
        segundoNome: 'Pedro',
        trabalho: 'médico',
        hobbies: ['surfar', 'Assistir filmes', 'jogar']
    }
]
//Converter objeto para JSON
const pessoasJson = JSON.stringify(pessoas)
//console.log(pessoasJson)
//Converter JSON em objeto
const pessoasData = JSON.parse(pessoasJson)
console.log(typeof(pessoasData))

pessoasData.map((pessoa) => {
    console.log(pessoa.nome)
})


