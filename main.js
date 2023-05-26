const prompt = require('prompt-sync')({sigint: true});
let sobremesa = [];
let cafeDaTarde = [];
let petisco = [];
let misto = [];
let bebida = [];
let item;
let categoria;
let continuar = true;
let itemRemover;
let indexItem;
let podeRemover = false;
let condicaoAdicionar = false;

while(continuar === true) {
    let menu = prompt('Se Deseja adicionar uma item digite "s", caso não queira digite "n" e caso queira remover digite "r": ');
    switch(menu){
        case 's':
            categoria = prompt('Digite qual a categoria do item que você deseja adicionar ? ');
            condicaoAdicionar = true;
            escolherCategoria();
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
            categoria = prompt('Qual a categoria do item que você deseja remover ? ');
            condicaoAdicionar = false;
            escolherCategoria();
            break;
            }
        }
    }

function escolherCategoria() {
    switch(categoria) {
        case 'sobremesa':
            adicionarOuRemover(sobremesa);
            console.log(`Sobremesa: ${sobremesa}`);
            break;
        case 'cafe':
            adicionarOuRemover(cafeDaTarde);
            console.log(`Café da Tarde: ${cafeDaTarde}`);
            break;
        case 'petisco':
            adicionarOuRemover(petisco);
            console.log(`Petisco: ${petisco}`);
            break;
        case 'misto':
            adicionarOuRemover(misto);
            console.log(`Misto: ${misto}`);
            break;
        case 'bebida':
            adicionarOuRemover(bebida);
            console.log(`Bebida: ${bebida}`);
            break;
    }
}

function adicionarOuRemover(lista) {
    if (condicaoAdicionar === true){
        adicionarItem(lista);
    } else {
        removerItem(lista);
    }
}

function adicionarItem(lista) {
    item = prompt('Qual item você deseja adicionar nessa lista ? ');
    lista.push(item);
    podeRemover = true;
}

function removerItem(lista) {
    itemRemover = prompt('Qual item você deseja remover dessa lista ? ');
    indexItem = lista.indexOf(itemRemover);
    lista.splice(indexItem, 1);
}
