// Rearranja A[1..n] em ordem crescente
function heapSort(A, n){
	A = buildMaxHeap(A, n); //Heapsort precisa que o vetor seja um maxheap para ordenar
	
	for (var i = n; i >= 2; i--){
		A = swap(A, 1, i);			//Maior elemento do vetor para a última posição.
		A = maxHeapify(A, i-1, 1);
	}
	
	return A;
}

// Função teste
function testHeapSort(){
	var A = [null, 14, 13, 34, 17, 15, 10, 46, 23, 12, 41, 30, 21];
	var n = A.length - 1;
	
	A = heapSort(A, n);
	
	// Remove o elemento nulo
	A = A.slice(1);
	
	$("#resultHeapSort").text(A.toString());
}