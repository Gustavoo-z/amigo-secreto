let amigos = [];

function adicionar() {
    let nomeAmigo = document.getElementById("nome-amigo").value;
        if (nomeAmigo == '') {
            alert('Nome inválido!');
            return
        } else if (amigos.includes(nomeAmigo)) {
            alert('Esse nome já foi inserido!');
            return;
        }
    let listaAmigos = document.getElementById("lista-amigos");
    document.getElementById("nome-amigo").value = '';
    amigos.push(nomeAmigo);
        if (listaAmigos.contains = listaAmigos.textContent) {
            listaAmigos.textContent = listaAmigos.textContent + ', ' + nomeAmigo;
        } else {
            listaAmigos.textContent = listaAmigos.textContent + nomeAmigo;
        }  
}

function sortear() {
    if (amigos.length < 4) {
        alert('Para sortear são necessários no minímo 4 amigos!');
        return;
    }

    embaralhar(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    
    for (let i = 0; i < amigos.length; i++) {
            if (i == amigos.length - 1) {
                sorteio.innerHTML = sorteio.innerHTML + amigos [i] + ' ➜ ' + amigos[0] + '<br/>';
            } else {
                sorteio.innerHTML = sorteio.innerHTML + amigos [i] + ' ➜ ' + amigos[i + 1] + '<br/>';
            }
    }
}

function embaralhar(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById("nome-amigo").value = '';
    document.getElementById("lista-amigos").textContent = '';
    document.getElementById("lista-sorteio").textContent = '';
}