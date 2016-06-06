// Evento para acionar o Conte Nós
var onConteNosClick = function () {
    PageUI.ClearResultado('#resultCountNode');
    var qtt = AlgorBinary.ConteNos(DataTree);
    $('#resultCountNode').html("<p>Quantidade de nós: " + qtt + "</p>");
};

// Evento para acionar o Imprimi Nível
var onImprimeNivelClick = function () {
    PageUI.ClearResultado('#resultPrintNode');
    var nivelNo = $('#nivelNo').val();
    if ($.trim(nivelNo) !== '') {
        AlgorBinary.ImprimeNivel(DataTree, parseInt(nivelNo));
    }
};

// Evento para acionar o Conta Folhas
var onImprimeFolhasClick = function () {
    PageUI.ClearResultado('#resultCountLeaf');
    var qtt = AlgorBinary.ConteFolhas(DataTree);
    $('#resultCountLeaf').html("<p>Quantidade de folhas: " + qtt + "</p>");
};

// Evento para acionar o Altura
var onAlturaClick = function () {
    PageUI.ClearResultado('#resultHeight');
    var qtt = AlgorBinary.Altura(DataTree);
    $('#resultHeight').html("<p>Altura da árvore: " + qtt + "</p>");
};