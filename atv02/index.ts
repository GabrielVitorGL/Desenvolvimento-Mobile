import utils = require('./arrayUtils');

let nums: number[] = [1, 2, 2, 3, 4, 4, 5];
let names: string[] = ['diego', 'chris', 'diego', 'erick'];

console.log("testando unique com numeros:", utils.unique(nums));
console.log("testando unique com nomes:", utils.unique(names));

interface User {
    name: string;
    role: string;
}

let users: User[] = [
    { name: 'diego', role: 'admin' },
    { name: 'chris', role: 'user' },
    { name: 'erick', role: 'admin' }
];

interface Task {
    title: string;
    status: string;
}

let tasks: Task[] = [
    { title: 'tela de login', status: 'done' },
    { title: 'api de pagamentos', status: 'doing' },
    { title: 'banco de dados', status: 'done' }
];

console.log("agrupando usuarios por cargo:", utils.groupBy(users, 'role'));
console.log("agrupando tarefas por status:", utils.groupBy(tasks, 'status'));

interface Item {
    item: string;
    price: number;
}

let cart: Item[] = [
    { item: 'teclado', price: 150 },
    { item: 'mouse', price: 80 }
];

interface Work {
    day: string;
    time?: number;
}

let hours: Work[] = [
    { day: 'segunda', time: 6 },
    { day: 'terca', time: 8 },
    { day: 'quarta' } 
];

console.log("somando total do carrinho:", utils.sumBy(cart, 'price'));
console.log("somando total de horas:", utils.sumBy(hours, 'time'));