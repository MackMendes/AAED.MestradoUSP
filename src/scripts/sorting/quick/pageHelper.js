var TesteQuickSort = function () {
    var A = [99, 33, 55, 77, 11, 22, 88, 66, 33, 44];
    
    var countArray = A.length - 1;
    algorQuick.QuickSort(A, 0, countArray);

    console.log(A);

};

var TesteQuickSort2 = function () {
    var A = [99, 33, 55, 77, 11, 22, 88, 66, 33, 44];

    var countArray = A.length - 1;
    algorQuick.Quick2.QuickSort(A, 0, countArray);

    console.log(A);

};