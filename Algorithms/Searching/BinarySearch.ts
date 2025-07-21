/**
 * Implementa o algoritmo de Busca Binária para encontrar um elemento em um array ordenado.
 * @param arr O array de números ordenado onde a busca será realizada.
 * @param target O número a ser procurado no array.
 * @returns O índice do elemento se encontrado, ou -1 se não estiver no array.
 */
function binarySearch(arr: number[], target: number): number {
  let left = 0; // Inicializa o ponteiro esquerdo no primeiro índice (0) [2, 6]
  let right = arr.length - 1; // Inicializa o ponteiro direito no último índice do array [2, 6]

  // Continua a busca enquanto o ponteiro esquerdo for menor ou igual ao direito [2, 6]
  // Isso garante que o espaço de busca seja válido (não vazio)

  while (left <= right) {
    // Calcula o índice do meio. Usamos Math.floor para garantir um índice inteiro [1, 2, 6]
    // Esta forma de calcular `mid` (left + (right - left) / 2) é mais segura para evitar
    // um possível overflow de inteiro em linguagens que usam inteiros de 32 bits,
    // embora seja menos preocupante em JavaScript/TypeScript.
    const mid = Math.floor(left + (right - left) / 2);

    // Verifica se o elemento no meio é o nosso alvo [2, 9]
    if (arr[mid] === target) {
      return mid; // Alvo encontrado, retorna seu índice [2, 9]
    }
    // Se o elemento no meio for menor que o alvo, o alvo deve estar na metade direita [2, 9]
    // porque o array está ordenado.
    else if (arr[mid] < target) {
      left = mid + 1; // Move o ponteiro esquerdo para uma posição após o meio [2, 6]
    }
    // Se o elemento no meio for maior que o alvo, o alvo deve estar na metade esquerda [2, 9]
    else {
      right = mid - 1; // Move o ponteiro direito para uma posição antes do meio [2, 6]
    }
  }

  // Se o loop terminar sem encontrar o alvo, significa que ele não está no array [2, 9]
  return -1;
}

// --- Exemplos de Uso ---
const mySortedArray = [-1, 0, 3, 5, 9, 12, 15, 21, 23, 30, 41];
const targetValue1 = 9;
const targetValue2 = 12;
const targetValue3 = 7; // Um valor que não está no array
const emptyList: number[] = [];
const singleElementList = [7];

console.log(
  `Buscando ${targetValue1} em [${mySortedArray}]: Índice ${binarySearch(
    mySortedArray,
    targetValue1
  )}`
);
// Esperado: Índice 4 (Conforme exemplo na fonte [2])

console.log(
  `Buscando ${targetValue2} em [${mySortedArray}]: Índice ${binarySearch(
    mySortedArray,
    targetValue2
  )}`
);
// Esperado: Índice 5 (Conforme exemplo na fonte [1, 6])

console.log(
  `Buscando ${targetValue3} em [${mySortedArray}]: Índice ${binarySearch(
    mySortedArray,
    targetValue3
  )}`
);
// Esperado: Índice -1 (Conforme exemplo na fonte [2, 9])

console.log(
  `Buscando 5 em [${emptyList}]: Índice ${binarySearch(emptyList, 5)}`
);
// Esperado: Índice -1 (Lida com arrays vazios, conforme discussão na fonte [14, 29])

console.log(
  `Buscando 10 em [${singleElementList}]: Índice ${binarySearch(
    singleElementList,
    10
  )}`
);
// Esperado: Índice 0 (Lida com arrays de um único elemento, conforme discussão na fonte [29])

console.log(
  `Buscando 5 em [${singleElementList}]: Índice ${binarySearch(
    singleElementList,
    5
  )}`
);
// Esperado: Índice -1
