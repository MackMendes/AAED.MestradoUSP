var algorQuick = (function () {
    var partione = function (A, p, r) {  // supõe p <= r
        var x = A[r];
        var i = p - 1;
        var temp;
        for (var j = p; j <= r - 1; j++) {
            if (A[j] <= x) {
                i = i + 1;
                A = swap(A, i, j); // swap é uma função para A[i] <-> A[j];
            };
        }
        A = swap(A, (i + 1), r); // swap é uma função para A[i + 1] <-> A[r] 
        return i + 1;
    };

    var quickSort = function (A, p, r) {
        var q;
        if (p < r) {
            q = partione(A, p, r);
            console.log(A);
            quickSort(A, p, q - 1);
            console.log(A);
            quickSort(A, q + 1, r);
            console.log(A);
        }
    };

    return {
        QuickSort: quickSort
    };

})();


algorQuick.Quick2 = (function () {
    
    var sep = function (v, p, r) {
        var i, t;
        for (var i = p + 1; i <= r; i++) {
            if (v[p] > v[i]) {
                t = v[p];
                v[p] = v[i];
                v[i] = t;
            }

        }
        return p;
    };

    var quickSort = function (v, p, r) {
        var j;
        if (p < r) {
            j = sep(v, p, r);
            console.log(v);
            quickSort(v, p, j - 1);
            console.log(v);
            quickSort(v, j + 1, r);
            console.log(v);
        }
    };

    return {
        QuickSort: quickSort
    };

})();