// Functions Auxiliares para imprimir resultado
var PrintNode = function (node, nameEvent) {
    PageUI.ClearResultado('#result');
    var result = PageUI.PrintNodeOfTreeBinary(node);
    PrintResult(result, nameEvent);
};

var PrintResult = function (result, nameEvent) {
    $('#result').html((nameEvent ? '<strong>' + nameEvent + '</strong> ' : '') + result);
}
// ------------------------------------------------- //

// Evento para acionar o Imprimi Nível
var onBusqueClick = function () {
    var nivelNo = $('#nodeFind').val();
    if ($.trim(nivelNo) !== '') {
        var node = AlgorABB.Busque(NodeBaseDynamic, parseInt(nivelNo));
        PrintNode(node, 'Busca:');
        $('#nodeFind').val('');
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
        NodeBaseDynamic = AlgorABB.Inserir(NodeBaseDynamic, newNode);
        PrintResult('', 'Inserido:');
        AlgorBinary.PreOrdem(NodeBaseDynamic, $('#result'));
        $('#nodeAdd').val('');
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

var onDeleteClick = function () {
    var nodeDelete = $('#nodeDelete').val();
    if ($.trim(nodeDelete) !== '') {
        var nodeFound = AlgorABB.Busque(NodeBaseDynamic, parseInt(nodeDelete));
        var resultNode = '<br/><strong>Nó Deletado: </strong>';
        if (nodeFound) { // Se encontrar algum nó pela busca
            resultNode += PageUI.PrintNodeOfTreeBinary(nodeFound);
            NodeBaseDynamic = AlgorABB.DeletaNo(NodeBaseDynamic, parseInt(nodeDelete));
        }
        resultNode += '<strong>Árvore depois de nó deletado:</strong>';

        PrintResult(resultNode, '');
        AlgorBinary.PreOrdem(NodeBaseDynamic, $('#result'));
    }
};



// Algoritmos de rotina de Árvore Binária 
// Evento para imprimir a Pré Ordem
var onImprimirPreOrdemClick = function () {
    PrintResult('Primeiro o nó Raiz, depois os filhos (esquerdo e direito) e por último as folhas (esquerdo e direito)', 'Pré Ordem:');
    AlgorBinary.PreOrdem(NodeBaseDynamic, $('#result'));
};

// Evento para imprimir a Pós Ordem
var onImprimirPosOrdemClick = function () {
    PrintResult('Primeiro as folhas(esquerdo e direito), depois filhos (esquerdo e direito) e por último o nó Raiz', 'Pós Ordem:');
    AlgorBinary.PosOrdem(NodeBaseDynamic, $('#result'));
};

// Evento para imprimir a In Ordem
var onImprimirInOrdemClick = function () {
    PrintResult('Primeiro os filhos (esquerdo e direito), depois folhas (esquerdo e direito) e por último o nó Raiz', 'In Ordem:');
    AlgorBinary.InOrdem(NodeBaseDynamic, $('#result'));
};
// ------------------------------------------------------ //
