import redlineSync from 'readline-sync';
import chalk from 'chalk';

const listaProps = [];
let resp = "";

const addProp = (prop) => {
  listaProps.push(prop);
};

const ordenarProps = () => {
  listaProps.sort();
};

const listarProps = () => {
  listaProps.forEach((elemento)=> { console.log(`• ${elemento}`); });
};

while (true) {
  resp = redlineSync.question(chalk.yellow("Digite a propriedade CSS ou 'SAIR' para exibir a listagem e encerrar: "));

  if (resp.toLowerCase() == "sair") {
    console.log(chalk.bgRed('Lista Ordenada de Propriedades CSS: '));
    ordenarProps();
    listarProps();
    console.log(chalk.red('---------------------------------X---------------------------------'));
  break;
 
  } else if (resp.toLowerCase() !== "sair" && resp !=="") {
    addProp(resp);
  }
}