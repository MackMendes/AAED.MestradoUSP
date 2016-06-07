﻿// Dependence: PropertiesTree
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

        return T; // returna árvore 
    };

    // Detela Nó Verificando o menor nó do lado direito do pai deletado
    // T: Nó raiz
    // x: Valor do Nó para ser deletado 
    var deleteNode = function (T, x) {
        var tempFilho = T;
        if (!T) // T = NIL
            return T;
        else if (x < info(T)) {// Vá para esq
            esq(T, deleteNode(esq(T), x));
            return T;
        }
        else if (x > info(T)) {  // Vá para dir
            dir(T, deleteNode(dir(T), x));
            return T;
        }
        else {  // encontrei um nó para deletar. 
            if (esq(T) && dir(T)) {// possui 2 filho
                var minDireito = minimo(dir(T));
                info(T, info(minDireito));
                dir(T, deleteNode(dir(T), info(T)));
                return T;
            }
            else { // Só tem um filho
                if (esq(T)) {
                    tempFilho = esq(T);
                    return tempFilho;
                }
                else if (dir(T)) {
                    tempFilho = dir(T);
                    return tempFilho;
                }
                else {
                    T = null;
                    return null;
                }
            }
        }
    };

    return {
        Busque: busque,
        BuscaIterativa: busqueIterativa,
        Minimo: minimo,
        Sucessor: sucessor,
        Inserir: inserir,
        DeletaNo: deleteNode
    };
})(jQuery, PropertiesTree, PageUI);





//// Deletar nó da árvore
//// T: Nó raiz
//// x: Valor do Nó para ser deletado
//var deletaNo = function (T, x) {
//    var nodeDelete = busque(T, x);
//    var resultadoDelete = deleta(nodeDelete);
//    //T = returnaNoPai(resultadoDelete);

//    NodeBaseDynamic = T; // Atualizando a lista Global de Nó!
//};

//// Função auxiliar para fazer as verificações sobre a removação do nó
//// nodeDelete: Valor do Nó para ser deletado
//var deleta = function (nodeDelete) {  // Já supondo que nodeDelete != NIL
//    var nodeAux = null;
//    // caso 1º (Nó único)
//    if (!pai(nodeDelete) && !esq(nodeDelete) && !dir(nodeDelete))  // Se pai(T) = NIL e esq(T) = NIL e dir(T) = NIL
//        return nodeAux;
//        // caso 2º (se possui só um nó)
//    else if (!esq(nodeDelete) || !dir(nodeDelete)) {  // Se esq(T) = NIL OU dir(T) = NIL
//        if (esq(nodeDelete)) // Se esq(T) != NIL
//            nodeAux = esq(nodeDelete);
//        else
//            nodeAux = dir(nodeDelete);
//        pai(nodeAux, pai(nodeDelete));
//        return nodeAux;
//    }
//        // Caso 3º (quando o nó tem dois filhos)
//    else {
//        nodeAux = sucessor(nodeDelete);
//        if (nodeAux) {
//            pai(nodeAux, pai(nodeDelete));
//            esq(nodeAux, esq(nodeDelete));
//            dir(nodeAux, dir(nodeDelete));
//            return nodeAux;
//        }
//    }
//};