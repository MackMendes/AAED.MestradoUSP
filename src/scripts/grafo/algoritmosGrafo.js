var AlgorGafro = (function () {
    var cor = {};
    var d = {};
    var lbl = {};


    // V: Todos os vértices do Grafo (Lista dos Vértices)
    // Adj: Lista de Adjacência
    // s: Vértice inicial da busca (vértice origem)
    var buscaLargura = function (V, Adj, s) {
        for (var i = 0, lgt = V.length; i < lgt; i++) { // Para cada vértice u em V, exceto s
            var u = V[i];
            if (u !== s) {
                cor[u] = enumCor.WHITE;
                d[u] = Infinity;  // Infinito positivo 
                lbl[u] = null;
            }
        }

        cor[s] = enumCor.GRAY;
        d[s] = 0;
        lbl[s] = null;
        var Q = [];
        ENQUEUE(Q, s);
        while (Q.length > 0) {
            var u = DEQUEUE(Q);
            for (var i = 0, lgt = Adj[u].length; i < lgt; i++) {
                var v = Adj[u][i];
                if (cor[v] === enumCor.WHITE) {
                    cor[v] = enumCor.GRAY;
                    d[v] = d[u] + 1;
                    lbl[v] = u;
                    ENQUEUE(Q, v);
                }
            }

            cor[u] = enumCor.BLACK;
        }

        dispose();
        // return 
    };

    var dispose = function () {
        cor = {};
        d = {};
        lbl = {};
    };


    var enumCor = { WHITE: 0, GRAY: 1, BLACK: 3 }

    // Enfilera em ArrayJob, o item
    var ENQUEUE = function (ArrayJob, item) {
        ArrayJob.push(item);
    };

    // Desfilera o primeiro item do ArrayJob
    var DEQUEUE = function (ArrayJob) {
        var result = ArrayJob.splice(0, 1);
        return result[0];
    };

    return {
        BFS: buscaLargura
    };


})();