function makeDiamond(char: string): string {
  const alphabet: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const index: number = alphabet.indexOf(char.toUpperCase());
  let diamond: string = '';

  for (let i = 0; i <= index; i++) {
    const spaces: string = ' '.repeat(index - i);
    if (i === 0) {
      diamond += spaces + 'A' + spaces + '\n';
    } else {
      const letters: string = alphabet[i] + ' '.repeat(2 * i - 1) + alphabet[i] + '\n';
      diamond += spaces + letters + spaces;
    }
  }
  for (let i = index - 1; i >= 0; i--) {
    const spaces: string = ' '.repeat(index - i);
    if (i === 0) {
      diamond += spaces + 'A' + spaces;
    } else {
      const letters: string = alphabet[i] + ' '.repeat(2 * i - 1) + alphabet[i] + '\n';
      diamond += spaces + letters + spaces;
    }
  }
  return diamond;
}

console.log(makeDiamond('E'));