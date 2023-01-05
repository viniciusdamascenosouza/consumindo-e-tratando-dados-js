async function buscaEndereco(cep){
    try{
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPconvertida = await consultaCEP.json();
        if(consultaCEPconvertida.erro){
            throw Error('CEP não existente!');
        }
        console.log(consultaCEPconvertida);
        return consultaCEPconvertida;
    } catch(erro) {
        console.log(erro);
    }
}

let ceps = ['01001000','01001001'];
let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));
console.log(conjuntoCeps);



Promise.all(conjuntoCeps).then(respostas => console.log(respostas));

