function rotate(nums, k) {
  // Criamos uma nova lista para armazenar os elementos rotacionados
  const rotated = [];
  // Percorremos o array nums
  for (let i = 0; i < nums.length; i++) {
    // Calculamos o índice do elemento rotacionado usando o módulo
    const rotatedIndex = (i + k) % nums.length;
    // Adicionamos o elemento rotacionado na nova lista
    rotated[rotatedIndex] = nums[i];
  }
  // Sobrescrevemos os elementos de nums com os elementos rotacionados
  for (let i = 0; i < nums.length; i++) {
    nums[i] = rotated[i];
  }
}
