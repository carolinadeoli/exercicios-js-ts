//const tresHoras = 60 * 60 * 3 * 1000;
//const data = new Date(0 + tresHoras); //função construtura - 0 = timestamp unix ou época unix. 3 horas por conta da Timezone

function formatoEsquerda (num){
    return num >=10 ? num: `0${num}`
}

function formataData(data){
    const dia = formatoEsquerda(data.getDate());
    const mes = formatoEsquerda(data.getMonth() + 1);
    const ano = formatoEsquerda(data.getFullYear());
    const hora = formatoEsquerda(data.getHours());
    const min = formatoEsquerda(data.getMinutes());
    const seg = formatoEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil)