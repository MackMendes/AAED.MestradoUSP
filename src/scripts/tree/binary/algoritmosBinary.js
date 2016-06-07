// Dependence: PropertiesTree
var AlgorBinary = (function ($, propertiesTree, pageUI) {
    var esq = propertiesTree.Esq;
    var dir = propertiesTree.Dir;
    var info = propertiesTree.Info;

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
                $('#resultPrintNode').append(pageUI.PrintNodeOfTreeBinary(T));
            else {
                imprimeNivel(esq(T), (i - 1));
                imprimeNivel(dir(T), (i - 1));
            }
        }
    };

    // Conta a quantidade de folhas da árvore
    // T: Nó raiz
    var conteFolhas = function (T) {
        if (!T) //Se T = NIL 
            return 0;
        else if (!esq(T) && !dir(T)) // esq(T) = NIL e dir(T) = NIL
            return 1;
        else
            return conteFolhas(esq(T)) + conteFolhas(dir(T));
    };

    // Conta a altura da árvore
    // T: Nó raiz
    var altura = function (T) {
        if (!T) //Se T = NIL 
            return -1;
        else {
            var alturaEsquerda = altura(esq(T));
            var alturaDireita = altura(dir(T));
            return (1 + Math.max(alturaEsquerda, alturaDireita));
        }
    };

    return {
        ConteNos: conteNos,
        ImprimeNivel: imprimeNivel,
        ConteFolhas: conteFolhas,
        Altura: altura
    };
})(jQuery, PropertiesTree, PageUI);