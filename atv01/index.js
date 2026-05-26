import { unique, groupBy, sumBy } from './arrayUtils.js';

let nums = [1, 2, 2, 3, 4, 4, 5];
let names = ['diego', 'chris', 'diego', 'erick'];

console.log("testando unique com numeros:", unique(nums));
console.log("testando unique com nomes:", unique(names));

let users = [
    { name: 'diego', role: 'admin' },
    { name: 'chris', role: 'user' },
    { name: 'erick', role: 'admin' }
];

let tasks = [
    { title: 'tela de login', status: 'done' },
    { title: 'api de pagamentos', status: 'doing' },
    { title: 'banco de dados', status: 'done' }
];

console.log("agrupando usuarios por cargo:", groupBy(users, 'role'));
console.log("agrupando tarefas por status:", groupBy(tasks, 'status'));

let cart = [
    { item: 'teclado', price: 150 },
    { item: 'mouse', price: 80 }
];

let hours = [
    { day: 'segunda', time: 6 },
    { day: 'terca', time: 8 },
    { day: 'quarta' } 
];

console.log("somando total do carrinho:", sumBy(cart, 'price'));
console.log("somando total de horas:", sumBy(hours, 'time'));