
function calcVantagem() {

    let alcPrice = document.querySelector('#alc');
    let gasPrice = document.querySelector('#gas');
    let info = document.querySelector('.info');
    let recommendation = document.querySelector('.recommendation');
    let modalTitle = document.querySelector('.modal-title');


    let result = (parseFloat(alcPrice.value) / parseFloat(gasPrice.value));

    if (isNaN(result) ) {

        alert('Você esqueceu de preencher um dos valores. Verifique e tente novamente');
        
    }

    else {
        if (result > 0.7) {

        modalTitle.innerHTML = "É mais vantajoso abastecer com gasolina"
        recommendation.innerHTML = " Abasteça com gasolina para economizar!"
        }
        else{
            if (result == 0.7) {
                modalTitle.innerHTML = "Escolha o combustivel de sua preferencia"
                recommendation.innerHTML = "Nesse caso não há diferença entre álcool ou gasolina!"
            }
            else {

                modalTitle.innerHTML = "É mais vantajoso abastecer com Álcool"
                recommendation.innerHTML = " Abasteça com álcool para economizar!"
            }
        }
        info.innerHTML = (("Verificamos que a relação de consumo é de ") + parseFloat(result.toFixed(2)));

        $('#modalGas').modal('show');
    } 

}
// A variavel abaixo chama a função que calcula a vantagem//
const btnCalc = document.querySelector('#btnCalc').onclick = calcVantagem;

// A funçao abaixo recarrega a página caso o usuario clique no botão "Calcular novamente"//

function refreshPage() {

    location.reload();

}

// A variavel abaixo recarrega a página caso o usuario clique no botão "Calcular novamente"// 

const btnRefreshPage = document.querySelector('#refreshPage').onclick = refreshPage;














