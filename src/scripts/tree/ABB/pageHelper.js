var PrintTree = function (node, nameEvent) {
    PageUI.ClearResultado('#result');
    var htmlResult = '<strong>Nó vazia...</strong>';
    if (node) {
        htmlResult = '<p> Info:' + node.info +
            ', Pai: <b>' + (node.pai ? node.pai.info : 'null') +
            '</b>, Filho Esq: <i>' + (node.esq ? node.esq.info : 'null') +
            '</i>, Filho Dir: <i>' + (node.dir ? node.dir.info : 'null') + '</i></p>';
    }
    $('#result').html((nameEvent ? '<strong>' + nameEvent + '</strong> ' : '') + htmlResult);
};


// Evento para acionar o Imprimi Nível
var onBusqueClick = function () {
    var nivelNo = $('#nodeFind').val();
    if ($.trim(nivelNo) !== '') {
        var node = AlgorABB.Busque(NodeBaseDynamic, parseInt(nivelNo));
        PrintTree(node, 'Busca:');
    }
};

var onMinimoClick = function () {
    var node = AlgorABB.Minimo(NodeBaseDynamic);
    PrintTree(node, 'Menor Nó:');
};

// Evento para insirir nó na árvore
var onInserirClick = function () {
    var nivelNo = $('#nodeAdd').val();
    if ($.trim(nivelNo) !== '') {
        var newNode = new TreeDynamic(nivelNo);
        var node = AlgorABB.Inserir(NodeBaseDynamic, newNode);
        PrintTree(node, 'Inserido:');
    }
};
