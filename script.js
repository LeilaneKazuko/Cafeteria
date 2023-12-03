let cafes = [
    {
        nome: "Cappuccino"
    },
    {
        nome: "Espresso"
    },
    {
        nome: "Irish Coffee"
    },
    {
        nome: "Caffè Latte"
    },
    {
        nome: "Macchiato"
    },
    {
        nome: "Mocha"
    },
    {
        nome: "Duplo"
    },
    {
        nome: "Preto"
    }
];

let pedidos = [
    {
        nome: "Fiona",
        cafe: "Cappuccino"
    },
    {
        nome: "Shrek",
        cafe: "Preto"
    },
    {
        nome: "Burro",
        cafe: "Mocha"
    },
    {
        nome: "Dragão",
        cafe: "Duplo"
    },
    {
        nome: "Pinóquio",
        cafe: "Espresso"
    }
];

function carregarCafes() {
    let table = document.getElementById('dados');

    cafes.forEach(cafe => {
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        td.innerHTML = cafe.nome;
        tr.appendChild(td);
        table.appendChild(tr);
    });
}

function adicionarCafe(e) {
    e.preventDefault();

    let input = document.getElementById('input-cafe');
    if (input.value.length == 0) return alert('Nome do café não pode estar vazio!');

    let table = document.getElementById('dados');
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.innerHTML = input.value;
    tr.appendChild(td);
    table.appendChild(tr);
    input.value = '';

    setTimeout(() => {
        alert('Cafe cadastrado com sucesso!');
    }, 100);
}

function carregarPedidos() {
    let table = document.getElementById('dados');
    let select = document.getElementById('input-cafe');

    pedidos.forEach(nome => {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        td1.innerHTML = nome.nome;
        td2.innerHTML = nome.cafe;
        tr.appendChild(td1);
        tr.appendChild(td2);
        table.appendChild(tr);
    });

    cafes.forEach(cafe => {
        let option = document.createElement('option');
        option.innerHTML = cafe.nome;
        select.appendChild(option);
    });
}

function adicionarPedido(e) {
    e.preventDefault();

    let input = document.getElementById('input-nome');
    if (input.value.length == 0) return alert('Nome do cliente não pode estar vazio!');

    let select = document.getElementById('input-cafe');
    if (select.value.length == 0) return alert('Selecione um Café!');

    let table = document.getElementById('dados');
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    td1.innerHTML = input.value;
    td2.innerHTML = select.value;
    tr.appendChild(td1);
    tr.appendChild(td2);
    table.appendChild(tr);
    input.value = '';
    select.value = '';

    setTimeout(() => {
        alert('Pedido inserido com sucesso!');
    }, 100);
}