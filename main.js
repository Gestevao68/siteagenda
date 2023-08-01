const form = document.getElementById("form_exercicio");

let contatos_totais = parseInt(0);
let linhas = ``;

const contatos=[];

/*Previne o botão de funcionar no padrão*/
form.addEventListener("submit",function(e){
    e.preventDefault();
    
    addLinha();
    atualizaTabela();
});

function addLinha(){
    
    const inputNomeContato = document.getElementById("nome_contato");
    const inputNumeroContato = document.getElementById("numero_contato");
    const inputSobrenomeContato = document.getElementById("sobrenome_contato");
    const inputEmailContato = document.getElementById("nome_email");

    if(contatos.includes(inputNomeContato.value) && contatos.includes(inputNumeroContato.value) ){
        alert(`O Contato ${inputNomeContato.value} de numero ${inputNumeroContato.value} ja foi inserida`)
    }else{
        if(inputSobrenomeContato.value ==""){
            inputSobrenomeContato.value ="-";
        }
        if(inputEmailContato.value ==""){
            inputEmailContato.value ="-";
        }

        contatos.push(inputNomeContato.value);
        contatos.push(inputNumeroContato.value);
        let linha = "<tr>";

        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputSobrenomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value} </td>`;
        linha += `<td>${inputEmailContato.value} </td>`;
        
        linha += `</tr>`

        linhas += linha;
        contatos_totais ++;
    }

    inputNomeContato.value ='';
    inputNumeroContato.value ='';
    inputSobrenomeContato.value ='';
    inputEmailContato.value ='';

    
    
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
    document.getElementById("numero_contatos_final").innerHTML =contatos_totais;
}