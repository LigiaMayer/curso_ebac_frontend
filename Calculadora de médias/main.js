const form=document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji aprovado />';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji reprovado " />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span> '
const spanReprovado = '<span class="resultado reprovado">Reprovado</span> '
const notaMinima = Number(prompt('Digita a nota mínima:'))
let linhas =' ';

form.addEventListener('submit',function(e){
    e.preventDefault()

    adicionalinha();
    tualizaTabela();


});

function adicionalinha()


const inputNomeAtividade = document.getElementById ('nome-atividade');
const inputNotaAtividade =document.getElementById ('nota-atividade');

    if (atividades.includes(inputNomeAtividade.value)) {
        alert (`A atividade: ${inputNomeAtividade.value} já foi inserida`);
        else{

        
    
        
atividade.push(inputNomeAtividade.value);
notas.push(inputNotaAtividade.value);

let linhas =' ';



let linha='<tr>';
linha +=`<td>${ inputNomeAtividade.value}<td>`;
linha += `<td>${inputNotaAtividade.value}<td>`;
linha += `<td>${inputNotaAtividade.value >=7 ?'Aprovado' : 'Reprovado' }<td>`;
linha += '</tr>';

linhas += linha;
        }
        inputNomeAtividade.value = ' ';
        inputNotaAtividade.value= ' ';
    }

const corpoTabela=document.querySelector('tbody');
corpoTabela.innerHTML = linha
inputNomeAtividade.value = ' ';
inputNotaAtividade.value = ' ';

function atualizaTabela () {
    const corpoTabela=document.querySelector('tbody');
    corpoTabela.innerHTML = linha

}

function atualizaMediaFinal () {
    const mediaFinal =  calculaMediaFinal();
    document.getElementById('media-valor-final').innerHTML = mediaFinal;
    document.getElementById('media-valor-resultado').innerHTML = mediaFinal >=7 ? 'Aprovado' : 'Reprovado';



    function calculaMediaFinal () {
        let somaNotas =0 ;
    
    for (let i = 0 ; 1 < notas.lenght; i ++ ) { 
        somaNotas +=notas [i] ;
    }

    return   somaNotas / notas.lenght ; 

}
} 