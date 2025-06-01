var database = require("../database/config");

// Total de pessoas que têm cachorro (soma de todas as raças)
function obterTotalDogs() {
    var instrucao = `
        SELECT 
            SUM(shitzu + golden + viralata + yorkshire + pastorAlemao + outro) AS total_dogs
        FROM votacao;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Total de pessoas que não têm cachorro
function obterNaoTemDogs() {
    var instrucao = `
        SELECT 
            SUM(naoTem) AS nao_tem_cachorro
        FROM votacao;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Dados para gráfico com soma de cada raça
function carregarGraficoDogs() {
    var instrucao = `
        select 'Shitzu' AS raca, SUM(shitzu) AS quantidade FROM votacao
        union
        select 'Golden', SUM(golden) FROM votacao
        union
        select 'Vira-lata', SUM(viralata) FROM votacao
        union
        select 'Yorkshire', SUM(yorkshire) FROM votacao
        union
        select 'Pastor Alemão', SUM(pastorAlemao) FROM votacao
        union
        select 'Outro', SUM(outro) FROM votacao
        union
        select 'Nenhum', SUM(naoTem) FROM votacao;

    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    obterTotalDogs,
    obterNaoTemDogs,
    // obterMaisTem,
    // obterMenosTem,
    carregarGraficoDogs
}
