var alcPrice = document.querySelector('#alc');
var gasPrice = document.querySelector('#gas');


function calcVantagem () {

    var result = (parseFloat(alcPrice.value) / parseFloat(gasPrice.value));

    if (result > 0.7 ) {
        $('#modalGas').modal('show');
    }else {
        $('#modalAlc').modal('show');

}
}






var btnRefreshAlc = document.querySelector("#refreshAlc");

btnRefreshAlc.addEventListener("click", function() {
    
    location.reload();
});

var btnRefreshGas = document.querySelector("#refreshGas");

btnRefreshGas.addEventListener("click", function() {
    
    location.reload();
});







