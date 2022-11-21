let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ];
   let nomeAtletas = atletas.map(function(nomes){
    return nomes.nome // Aparecer o nome
})

let obterNotas = atletas.map(function(notas){
return notas.notas // Obter notas
})
   function obterMedia(){
    let medias = []; // armazenar médias
    for (let i = 0; i < obterNotas.length; i++) {
        let organizar = obterNotas[i];

        function comparaNumeros(a,b) {
            if (a == b) return 0; 
            if (a < b) return -1; 
            if (a > b) return 1;
            }
        let ordem = organizar.sort(comparaNumeros);
        let notasComputadas = ordem.slice(1, 4)
        let media = notasComputadas.reduce(function(total, atual){
            return total + atual
        },0);
       medias[i] = (media/notasComputadas.length).toFixed(2);
    }
    return medias;
}

for (let i = 0; i < atletas.length; i++) {
console.log("Nome: " + nomeAtletas[i])
console.log("Notas: " + obterNotas[i])
console.log("Média: " + obterMedia()[i])
}
// Vai aparecer no console:
/*
Nome: Cesar Abascal
Notas: 10,9.34,8.42,10,7.88
Média: 9.25
Nome: Fernando Puntel
Notas: 7,8,9.33,10,10
Média: 9.11
Nome: Daiane Jelinsky
Notas: 7,8,9.5,9.5,10
Média: 9.00
Nome: Bruno Castro
Notas: 9,9.5,10,10,10
Média: 9.83
*/