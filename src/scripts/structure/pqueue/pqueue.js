/* 
 * Dado um max-heap S, retorna o elemento de maior prioridade.
 * Baseia-se na propriedade básica de um max-heap: S(chao(i/2)) >= S(i)
 */
function maximum(S){
	return S[0];
}

// Remove e devolve o elemento de maior prioridade.
function extractMax(S){
	var max = S[1];
	var m = S.length;
	
	S[1] = S[m];
	//Arranja o elemento raiz até chegar em m-1, pois m é a posição que estamos extraindo.
	maxHeapify(S,m-1, 1);
	
	return max;
}

// Aumenta a prioridade p de um elemento s em S.
function increaseKey(S, s, p){
	S[s] = p;
	
	while(s > 1 && S[s] > S[Math.floor(s/2)]){
		S = swap(S, s, Math.floor(s/2));
		s = Math.floor(s/2);
	}
	
	return S;
}

// Insere um novo elemento no maxheap S com prioridade p.
function maxHeapInsert(S, p){
	var m = S.length;
	var S = S.concat(-Infinity);	//insere o elemento na última posição
	S = increaseKey(S, m, p); //Aumenta a prioridade para colocá-lo na posição certa.
	
	return S;
}

function testMaximum(){
	var A = [null, 46,41,34,23,30,21,14,17,12,15,13,10];
	var n = A.length - 1;
	
	// Remove o elemento nulo
	A = A.slice(1);
	
	$("#resultQueue").text("Máximo é: " + maximum(A));
}

function testExtractMax(){
	var A = [null, 46,41,34,23,30,21,14,17,12,15,13,10];
	var n = A.length - 1;

	$("#resultQueue").text("Máximo removido: " + extractMax(A) + " ");	
	$("#resultQueue").append("Heap resultante: " + A.toString());
}

function testIncreaseKey(){
	var A = [null, 46,41,34,23,30,21,14,17,12,15,13,10];
	var n = A.length - 1;

	$("#resultQueue").text("IncreaseKey(S, 6, 50): " + increaseKey(A, 6, 50).toString());
}

function testMaxHeapInsert(){
	var A = [null, 46,41,34,23,30,21,14,17,12,15,13,10];
	var n = A.length - 1;
	
	$("#resultQueue").text("InsertKey(S, 25): " + maxHeapInsert(A, 25).toString());
}