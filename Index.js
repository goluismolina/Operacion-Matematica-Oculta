function Operacion(a , b){
    // Operacion de suma y resta
    let suma = a + b; 
    let resta = a - b;

    // Variable que concatena como strings las operaciones anteriores
    let concatenados = String(resta) + String(suma);

    // Retorna como numeros la concatenacion anterior
    return Number(concatenados);
}
// Se agregan valores a la funcion
Operacion(5,4);
