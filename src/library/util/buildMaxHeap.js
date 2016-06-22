//Recebe um vetor A[1..n] e o transforma em um max-heap
function buildMaxHeap(A, n) {
    for (i = Math.floor(n / 2) ; i >= 1; i--)
        A = maxHeapify(A, n, i)
    return A;
}

function testBuildMaxHeap() {
    var A = [null, 14, 13, 34, 17, 15, 10, 46, 23, 12, 41, 30, 21];
    var n = A.length - 1;

    A = buildMaxHeap(A, n);

    // Remove o elemento nulo
    A = A.slice(1);

    $("#resultBuildMaxHeap").text(A.toString());
}