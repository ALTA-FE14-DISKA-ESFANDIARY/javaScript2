function cetakTablePerkalian(number: number): void {
  let output = "";
  
  for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= number; j++) {
      output += i * j + "\t";
    }
    output += "\n";
  }
  console.log(output);
}

cetakTablePerkalian(9);