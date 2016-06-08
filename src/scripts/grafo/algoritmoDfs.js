var AlgorDFS = (function (pegaHelper, algorGafro) {
    var cor = {};
    var d = {};
    var lbl = {};


    // V: Todos os vértices do Grafo (Lista dos Vértices)
    // Adj: Lista de Adjacência
    
    var buscaProfundidade = function (V, Adj) {
        
    };

    var dispose = function () {
        cor = {};
        d = {};
        lbl = {};
    };


    var enumCor = { WHITE: 0, GRAY: 1, BLACK: 3 };

    


    var printPath = function (vOrig, vDesti) {
        var print = new algorGafro.PrintGrafo(lbl);
        print.PrintPath(vOrig, vDesti);
    }


    return {
        Buscar: buscaLargura,
        PrintPathBFS: printPath
    };

})(PegaHelper, AlgorGafro);