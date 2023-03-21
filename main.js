/*    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

let randomColor = [red.toFixed(0), green.toFixed(0), blue.toFixed(0)]
console.log(randomColor) */

function getRandomColor() {
    // Gerar valores aleatórios para as componentes RGB
    let red = Math.floor(Math.random() * 256) 
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)
  
    // Criar uma string que representa a cor em formato hexadecimal
    const color = "#" + 
      red.toString(16).padStart(2, '0') + 
      green.toString(16).padStart(2, '0') + 
      blue.toString(16).padStart(2, '0');
  
    return color;
  }
  
  // Exemplo de uso
  console.log(getRandomColor());