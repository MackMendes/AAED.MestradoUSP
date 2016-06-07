// Dependence: PropertiesTree
var AlgorABB = (function ($, propertiesTree, pageUI) {
    var esq = propertiesTree.Esq;
    var dir = propertiesTree.Dir;
    var info = propertiesTree.Info;
    var pai = propertiesTree.Pai;


    // Buscar um nó, pelo valor informado (x)
    // T: Nó raiz
    // x: Valor do nó
    var busque = function (T, x) {
        if (!T || info(T) === x) //Se T = NIL ou info(T) = x
            return T
        else if (x < info(T))
            return busque(esq(T), x);
        else
            return busque(dir(T), x);
    };

    // Buscar um nó, pelo valor informado (x)
    // T: Nó raiz
    // x: Valor do nó
    var busqueIterativa = function (T, x) {
        var p = T;
        while (p && info(p) !== x) {
            if (x < info(p))
                p = esq(p);
            else
                p = dir(p);
        }
        return p;
    };

    // Retorno o menor nó da árvore
    // T: Nó raiz
    var minimo = function (T) {
        if (T) {
            var p = T;
            while (esq(p)) {
                p = esq(p);
            }
            return p;
        }
    };

    // Retorna o Sucessor do nó informado no parâmetro de entrada.
    // q: é um nó da árvore
    var sucessor = function (q) {
        if (dir(q))  // se dir(q) != NIL
            return minimo(dir(q));
        else {
            var p = pai(q);
            var ant = q;
            while (p && ant === dir(p)) { // enquanto p != NIL e ant = dir(p)
                ant = p;
                p = pai(p);
            }
            return p;
        }
    };


    // Inserir nó na árvore
    // T: Nó raiz
    // newNode: Novo nó para ser inserido
    var inserir = function (T, newNode) {
        var p = T;
        var ant = null; // ant = NIL
        var x = info(newNode);
        while (p) { // p != NIL
            ant = p;
            if (x < info(p))
                p = esq(p);
            else
                p = dir(p);
        }
        if (!ant) // ant = NIL
            T = newNode;
        else if (x < info(ant))
            esq(ant, newNode); // esq(ant) <= newNode
        else
            dir(ant, newNode); // dir(ant) <= newNode

        pai(newNode, ant); // Seta para o novo nó o pai dele.

        NodeBaseDynamic = T; // Atualizando a lista Global de Nó!
        // Retornando o novo nó para imprimir
        return newNode;
    };

    return {
        Busque: busque,
        BuscaIterativa: busqueIterativa,
        Minimo: minimo,
        Sucessor: sucessor,
        Inserir: inserir
    };
})(jQuery, PropertiesTree, PageUI);
