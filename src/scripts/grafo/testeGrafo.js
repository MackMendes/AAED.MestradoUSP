var testeBuscaLargura = function () {
    debugger;
    // Vértices
    var V = [1, 2, 3, 4, 6];

    // Lista de Adjacência (um objeto com as propriedade sendo númerico, só JavaScript pra fazer isso! FODA!!!!! \m/ S2 JS!!!!!)
    var Adj = {
        1: [6],
        2: [3, 6],
        3: [2, 4, 6],
        4: [1, 5],
        5: [4, 6],
        6: [1,4]
    };

    // Vértice de inicio
    var s = 3;

    AlgorGafro.BFS(V, Adj, s);

};




var testeBuscaLarguraApostila = function () {
    debugger;
    // Vértices
    var V = ['s', 'r', 'v', 'w', 't', 'u', 'x', 'y'];

    // Lista de Adjacência (um objeto com as propriedade sendo númerico, só JavaScript pra fazer isso! FODA!!!!! \m/ S2 JS!!!!!)
    var Adj = {
        's': ['w', 'r'],
        'w': ['s', 't', 'x'],
        'r': ['v', 's'],
        'v': ['r'],
        't': ['w', 'x', 'u'],
        'x': ['w', 't', 'y'],
        'y': ['x', 'u'],
        'u': ['t', 'y'],
    };

    // Vértice de inicio
    var s = 's';

    AlgorGafro.BFS(V, Adj, s);

};

