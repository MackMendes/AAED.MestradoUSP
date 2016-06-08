var AlgorGafro = (function () {

    var printGrafo = function (lbl) {
        this.lbl = lbl; // Propriedade PI
        pegaHelper = function (html) {
            $('#result').append(html);
        };

        // Método para monstrar o caminho mais curto entre Vertice 1 (vertOrigem) até Vértice 2 (vertFinal)
        // vertOrig: Vértice Origem
        // vertFinal: Vértice Destino
        this.PrintPath = function (vertOrig, vertFinal) {
            if (vertFinal === vertOrig)
                pegaHelper('<p>' + vertOrig + '</p>');
            else if (!lbl[vertFinal]) // lbl[v] = NIL
                pegaHelper('<p>Não existe caminho de ' + vertOrig + ' até ' + vertFinal + '</p>');
            else {
                this.PrintPath(vertOrig, lbl[vertFinal]);
                pegaHelper('<p>' + vertFinal + '</p>');
            }
        };

    };

    return {
        PrintGrafo: printGrafo
    };

})();