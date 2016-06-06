// Evento para acionar o Conte Nós
var onConteNosClick = function () {
    PageUI.ClearResultado();
    var qtt = AlgorABB.ConteNos(DataABB);
    PageUI.ImprimirResultado("<p>Quantidade de nós: " + qtt + "</p>");
};

// Evento para acionar o Imprimi Nível
var onImprimeNivelClick = function () {
    PageUI.ClearResultado();
    var nivelNo = $('#nivelNo').val();
    AlgorABB.ImprimeNivel();

};

