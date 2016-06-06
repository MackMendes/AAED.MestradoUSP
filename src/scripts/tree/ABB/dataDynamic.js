// Nó Raiz
var NodeBaseDynamic = null;

// Classe com as estrutura de árvore utilizada no exemplo da professora Karina
var TreeDynamic = function (info) {
    this.info = isNaN(parseInt(info)) ? null : parseInt(info);
    this.esq = null;
    this.dir = null;
    this.pai = null;
};
