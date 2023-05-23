//         Váriaveis do programa
const prompt = require('prompt-sync')({sigint: true});
let sobremesa = [];
let cafeDaTarde = [];
let petisco = [];
let misto = [];
let bebida = [];
let item;
let categoria;
let continuar = true;
//         Menu Principal
while(continuar === true) {
    let menu = prompt('Se Deseja adicionar uma item digite "s", caso não queira digite "n": ');
    switch(menu){
        case 's':
            adicionar();
            break;
        case 'n':
            console.log('Até logo');
            console.log(` Sobremesa: ${sobremesa}\n Café da Tarde: ${cafeDaTarde}\n Petisco: ${petisco}\n Misto: ${misto}\n Bebida: ${bebida}`);
            continuar = false;
            break;
    }
}
//         Adicionando os itens para suas devidas listas
function adicionar() {
    item = prompt('Digite o item que você deseja adicionar: ');
    categoria = prompt('Em que categoria está este item ? Sobremesa, café da tarde, petisco, misto ou bebida ? ');
    switch (categoria){
        case 'sobremesa':
            adicionarLista(sobremesa);
            console.log(`Sobremesa: ${sobremesa}`);
            break;
        case 'cafe':
            adicionarLista(cafeDaTarde);
            console.log(`Café da Tarde: ${cafeDaTarde}`);
            break;
        case 'petisco':
            adicionarLista(petisco);
            console.log(`Petisco: ${petisco}`);
            break;
        case 'misto':
            adicionarLista(misto);
            console.log(`Misto: ${misto}`);
            break;
        case 'bebida':
            adicionarLista(bebida);
            console.log(`Bebida: ${bebida}`);
            break;
        default:
        console.log('Categoria não encontrada!! Digite uma categoria válida: ');
    }
}
function adicionarLista(lista) {
    lista.push(item);
}