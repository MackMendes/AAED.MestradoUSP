/* 
Recebe um vetor A e um nó i cuja subárvore da qual é raiz não é um max-heap.
Devolve o vetor A contendo um max-heap na sub-árvore que se inicia em i.
*/
function maxHeapify(A, m, i){
	var esq = 2*i;
	var dir = (2*i) + 1;
	var maior = i;
	
	if (esq <= m && A[esq] > A[i])
		maior = esq;
	if (dir <= m && A[dir] > A[maior])
		maior = dir;
	if (maior != i){
		A = swap(A, i, maior);
		A = maxHeapify(A, m, maior);
	}
	
	return A;
}

// Função de teste
function testMaxHeapify(){
	/*O primeiro termo vale null, pois os índices em Javascript iniciam-se em 0.
	  Devido à determinação dos filhos de i com base em i, precisamos de arrays
	  iniciando em 1.*/
	var A = [null, 13, 46, 17, 34, 41, 15, 14, 23, 30, 21, 10, 12];
	var m = A.length-1;
	
	A = maxHeapify(A, m, 1);
	
	// Remover o elemento null
	A = A.slice(1);
	
	$("#resultMaxHeap").text(A.toString());
}