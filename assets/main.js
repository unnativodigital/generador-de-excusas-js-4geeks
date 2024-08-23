window.onload = function() {
    let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'my phone', 'the car'];
    let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

    let indice_mayor_who = who.length - 1;
    let numero_aleatorio_who = Math.random() * indice_mayor_who;
    numero_aleatorio_who = Math.round(numero_aleatorio_who);

    let indice_mayor_action = action.length - 1;
    let numero_aleatorio_action = Math.random() * indice_mayor_action;
    numero_aleatorio_action = Math.round(numero_aleatorio_action);

    let indice_mayor_what = what.length - 1;
    let numero_aleatorio_what = Math.random() * indice_mayor_what;
    numero_aleatorio_what = Math.round(numero_aleatorio_what);

    let indice_mayor_when = when.length - 1;
    let numero_aleatorio_when = Math.random() * indice_mayor_when;
    numero_aleatorio_when = Math.round(numero_aleatorio_when);

    let elemento_html = document.querySelector('#excuse');

    let primera_frase = who[numero_aleatorio_who];
    let segunda_frase = action[numero_aleatorio_action];
    let tercera_frase = what[numero_aleatorio_what];
    let cuarta_frase = when[numero_aleatorio_when];

    elemento_html.innerHTML = `${primera_frase} ${segunda_frase} ${tercera_frase} ${cuarta_frase}`;
};
