//o codigo a seguir vai realizar a soma de todos os números impares que sejam multiplos de 3 dentro de limite e 1 até 500.

document.write('Você sabe dizer qual número teremos se somarmos todos os números impares multiplos de 3, dentro do limite de 1 até 500?<br><br>')

let numero = 0

for (let i = 0; i < 500; i++) {
    if((i % 2) != 0 && (i % 3) == 0) {
        numero = numero + i;
    }
}

document.write('<br>Se você disse o número ' + numero + ' você acertou!')
