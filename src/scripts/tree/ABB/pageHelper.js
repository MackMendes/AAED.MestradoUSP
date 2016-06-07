var PrintNode = function (node, nameEvent) {
    PageUI.ClearResultado('#result');
    var result = PageUI.PrintNodeOfTreeBinary(node);
    PrintResult(result, nameEvent);
};

var PrintResult = function (result, nameEvent) {
    $('#result').html((nameEvent ? '<strong>' + nameEvent + '</strong> ' : '') + result);
}

var PrintAllTree = function () {


};




// Evento para acionar o Imprimi Nível
var onBusqueClick = function () {
    var nivelNo = $('#nodeFind').val();
    if ($.trim(nivelNo) !== '') {
        var node = AlgorABB.Busque(NodeBaseDynamic, parseInt(nivelNo));
        PrintNode(node, 'Busca:');
    }
};

// Evento para mostrar o menor nó da árvore
var onMinimoClick = function () {
    var node = AlgorABB.Minimo(NodeBaseDynamic);
    PrintNode(node, 'Menor Nó:');
};

// Evento para insirir nó na árvore
var onInserirClick = function () {
    var nivelNo = $('#nodeAdd').val();
    if ($.trim(nivelNo) !== '') {
        var newNode = new TreeDynamic(nivelNo);
        var node = AlgorABB.Inserir(NodeBaseDynamic, newNode);
        PrintNode(node, 'Inserido:');
    }
};

// Evento para mostrar o sucessor
var onSucessorClick = function () {
    var nodeVerifySucessor = $('#nodeVerifySucessor').val();
    if ($.trim(nodeVerifySucessor) !== '') {
        var nodeFound = AlgorABB.Busque(NodeBaseDynamic, parseInt(nodeVerifySucessor));
        var sucessor;
        if (nodeFound) { // Se encontrar algum nó pela busca
            sucessor = AlgorABB.Sucessor(nodeFound);
        }
        var resultNode = '<br/><strong>Nó encontrado: </strong>' + PageUI.PrintNodeOfTreeBinary(nodeFound);
        var resultSucessor = PageUI.PrintNodeOfTreeBinary(sucessor) + resultNode;

        PrintResult(resultSucessor, 'Sucessor:');
    }
};