class Cerebro {
  constructor(tamanho) {
    this.direcoes = [];
    this.passo = 0;
    this.randomize(tamanho);
  }

  // Define todos os vetores em direções para um vetor aleatório com tamanho 1.
  randomize(tamanho) {
    for (var i = 0; i < tamanho; i++) {
      this.direcoes[i] = this.getRandomDirection();
    }
  }

  // Retorna uma direção aleatória.
  getRandomDirection() {
    var numeroAleatorio = floor(random(9));
    switch (numeroAleatorio) {
      case 0:
        return createVector(0, 1);
      case 1:
        return createVector(1, 1);
      case 2:
        return createVector(1, 0);
      case 3:
        return createVector(1, -1);
      case 4:
        return createVector(0, -1);
      case 5:
        return createVector(-1, -1);
      case 6:
        return createVector(-1, 0);
      case 7:
        return createVector(-1, 1);
      case 8:
        return createVector(0, 0);
    }
    return createVector();
  }

  // Cria uma cópia perfeita do cérebro atual.
  clone() {
    var clone = new Cerebro(this.direcoes.length);
    for (var i = 0; i < this.direcoes.length; i++) {
      clone.direcoes[i] = this.direcoes[i].copy();
    }
    return clone;
  }

  // Realiza uma mutação do cérebro definindo direções para vetores aleatórios.
  mutate(died, deathStep) {
    // Chance de que um vetor tenha suas direções alteradas.
    for (var i = 0; i < this.direcoes.length; i++) {
      var rand = random(1);
      if (died && i > deathStep - 10) {
        rand = random(0.2);
      }

      if (rand < mutationRate) {
        this.direcoes[i] = this.getRandomDirection();
      }
    }
  }

  // Aumenta o número de movimentos em 5.
  increaseMoves() {
    for (var i = 0; i < increaseMovesBy; i++) {
      this.direcoes.push(this.getRandomDirection());
    }
  }
}