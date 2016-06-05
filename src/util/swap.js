// Troca os valores das posições i e j no vetor A
function swap(A, i, j){
	var temp;
	
	temp = A[i];
	A[i] = A[j];
	A[j] = temp;
	
	return A;
}