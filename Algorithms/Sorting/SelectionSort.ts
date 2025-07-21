/**
   Vamos supor que um professor está organizando os alunos do menor para o maior em uma turma
 */
function selectionSort(arr: Array<number>): Array<number> {
  const n = arr.length; // [64, 25, 12, 22, 11];

  // Loop externo (Posição) -> O(n)
  for (let i = 0; i < n - 1; i++) {
    // Usamos i < (n-1), porque o último elemento da lista sempre será o maior
    // Se o caso for do menor para o maior.
    // Se fizermos i < n, seria redudante, já que o último elemento já é o caso que esperamos

    // Vamos supor que o primeiro item já é o menor
    let minIndex = i;

    // Loop Interno (Elemento) -> O(n)
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
      /**
      *  O professor está tentando preencher a 3ª vaga da fila (i = 2). 
      *  Ele olha todos os alunos restantes e encontra o mais baixo. 
      *  Mas e se o aluno mais baixo que ele encontrou já estiver na 3ª vaga?
         Nesse caso, o minIndex (a posição do aluno mais baixo) seria igual a i (a vaga que ele quer preencher). 
         Se os dois são iguais, não há motivo para fazer uma troca! O aluno já está no lugar certo. 
         Esse if evita que o algoritmo faça uma troca inútil de um elemento com ele mesmo. 
         É uma pequena otimização.
      */
    }
  }

  return arr;
}

console.log(selectionSort([64, 25, 12, 22, 11]));
