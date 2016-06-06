var printTree = function (node) {
    var htmlResult = '<strong>Nó vazia...</strong>';
    if (node) {
        htmlResult = '<p> Info:' + node.info +
            ', Pai: <b>' + (node.pai ? node.pai.info : 'null') +
            '</b>, Filho Esq: <i>' + (node.esq ? node.esq.info : 'null') +
            '</i>, Filho Dir: <i>' + (node.dir ? node.dir.info : 'null') + '</i></p>';
    }
    $('#result').html(htmlResult);
};


// Evento para acionar o Imprimi Nível
var onBusqueClick = function () {
    PageUI.ClearResultado('#result');
    var nivelNo = $('#nodeFind').val();
    if ($.trim(nivelNo) !== '') {
        var node = AlgorABB.Busque(DataDynamic, parseInt(nivelNo));
        printTree(node);
    }
};

var onMinimoClick = function () {
    PageUI.ClearResultado('#result');
    var node = AlgorABB.Minimo(DataDynamic);
    printTree(node);
};