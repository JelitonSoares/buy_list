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
let categoriaRemover;
let itemRemover;
let indexItem;
let podeRemover = false;


//         Menu Principal
while(continuar === true) {
    let menu = prompt('Se Deseja adicionar uma item digite "s", caso não queira digite "n" e caso queira remover digite "r": ');
    switch(menu){
        case 's':
            adicionar();
            break;
        case 'n':
            console.log('Até logo');
            console.log(` Sobremesa: ${sobremesa}\n Café da Tarde: ${cafeDaTarde}\n Petisco: ${petisco}\n Misto: ${misto}\n Bebida: ${bebida}`);
            continuar = false;
            break;
        case 'r':
            if (podeRemover === false){
                console.log('Você deve adicionar um item primeiro antes de remover!!');
            } else {
            categoriaRemover = prompt('Qual a categoria do item que você deseja remover ? ');
            remover();
            break;
            }
    }
}
//         Adicionando os itens para suas devidas listas"
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
    podeRemover = true;
}

function remover() {
    switch(categoriaRemover) {
        case 'sobremesa':
            removerLista(sobremesa);
            console.log(`Sobremesa: ${sobremesa}`);
            break;
        case 'cafe':
            removerLista(cafeDaTarde);
            console.log(`Café da Tarde: ${cafeDaTarde}`);
            break;
        case 'petisco':
            removerLista(petisco);
            console.log(`Petisco: ${petisco}`);
            break;
        case 'misto':
            removerLista(misto);
            console.log(`Misto: ${misto} `);
            break;
        case 'bebida':
            removerLista(bebida);
            console.log(`Bebida ${bebida}`);
            break;
        default:
            console.log('Categoria não encontrada!! Digite uma categoria válida: ');
    }
}

function removerLista(lista) {
    itemRemover = prompt('Qual item que você deseja remover ? ');
    indexItem = lista.indexOf(itemRemover);
    lista.splice(indexItem, 1);
}