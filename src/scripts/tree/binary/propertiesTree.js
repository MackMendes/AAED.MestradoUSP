var PropertiesTree = (function () {
    // Pega o Filho do lado direito (GET) ou Seta o novo lado esquerdo do nó (SET)
    // T: Nó Atual
    var esq = function (T, valor) {
        if (T) {
            if (!valor) // Se for nulo
                return T.esq;
            else
                T.esq = valor;
        }
    };

    // Pega o Filho do lado direito (GET) ou Seta o novo lado direito do nó (SET)
    // T: Nó Atual
    var dir = function (T, valor) {
        if (T) {
            if (!valor) // Se for nulo
                return T.dir;
            else
                T.dir = valor;
        }
    };

    // Informa o valor do nó (GET)
    // T: Nó Atual
    var info = function (T) {
        if (T)
            return T.info;
    };

    // Informa o Pai do nó (GET) ou Seta o novo pai do nó (SET)
    // T: Nó Atual
    var pai = function (T, valor) {
        if (T) {
            if (!valor) // Se for nulo
                return T.pai;
            else
                T.pai = valor;
        }
    };

    return {
        Esq: esq,
        Dir: dir,
        Info: info,
        Pai: pai,
    };

})();