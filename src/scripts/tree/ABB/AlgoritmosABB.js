// Dependence: PageUI
var AlgorABB = (function () {
    // Pega o Filho do lado direito
    // T: Nó Atual
    var esq = function (T) {
        if (T)
            return T.esq;
    };

    // Pega o Filho do lado direito
    // T: Nó Atual
    var dir = function (T) {
        if (T)
            return T.dir;
    };

    // Informa o valor do nó
    // T: Nó Atual
    var info = function (T) {
        if (T)
            return T.info;
    };

    // Conta a quantidade de nós da árvore
    // T: Nó raiz
    var conteNos = function (T) {
        if (!T) //Se T = NIL 
            return 0;
        else
            return (1 + conteNos(esq(T)) + conteNos(dir(T)));
    };

    // Imprime o Nível
    // T: Nó raiz
    // i: Nível à ser imprisso.
    var imprimeNivel = function (T, i) {
        if (T) {// Se T != NIL
            if (i === 0)
                PageUI.ImprimirResultado("<p><strong>Valor:</strong>" + info(T) + "</p>");
            else {
                imprimeNivel(esq(T), (i - 1));
                imprimeNivel(dir(T), (i - 1));
            }
        }
    };

    return {
        ConteNos: conteNos,
        ImprimeNivel: imprimeNivel
    };
})();