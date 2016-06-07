var PageUI = (function ($) {
    // Helper da Page
    var clearResultado = function (dom) {
        $(dom).html('');
    };

    // Imprimir Nó de uma árvore Binária
    var printNodeOfTreeBinary = function (node) {
        var htmlResult = '<strong>Nó vázio</strong>';
        if (node) {
            htmlResult = '<p> Info:<span>' + node.info +
                '</span>, Pai: <b>' + (node.pai ? node.pai.info : 'null') +
                '</b>, Filho Esq: <i>' + (node.esq ? node.esq.info : 'null') +
                '</i>, Filho Dir: <i>' + (node.dir ? node.dir.info : 'null') + '</i></p>';
        }
        return htmlResult;
    };

    return {
        ClearResultado: clearResultado,
        PrintNodeOfTreeBinary: printNodeOfTreeBinary
    };

})(jQuery);