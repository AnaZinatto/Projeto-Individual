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

// // Cachorro que mais tem (raça com maior soma)
// function obterMaisTem() {
//     var instrucao = `
//         SELECT raca, quantidade FROM (
//             SELECT 'Shitzu' AS raca, SUM(shitzu) AS quantidade FROM votacao
//             UNION
//             SELECT 'Golden', SUM(golden) FROM votacao
//             UNION
//             SELECT 'Vira-lata', SUM(viralata) FROM votacao
//             UNION
//             SELECT 'Yorkshire', SUM(yorkshire) FROM votacao
//             UNION
//             SELECT 'Pastor Alemão', SUM(pastorAlemao) FROM votacao
//             UNION
//             SELECT 'Outro', SUM(outro) FROM votacao
//         ) AS dados
//         ORDER BY quantidade DESC
//         LIMIT 1;
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }

// // Cachorro que menos tem (raça com menor soma)
// function obterMenosTem() {
//     var instrucao = `
//         SELECT raca, quantidade FROM (
//             SELECT 'Shitzu' AS raca, SUM(shitzu) AS quantidade FROM votacao
//             UNION
//             SELECT 'Golden', SUM(golden) FROM votacao
//             UNION
//             SELECT 'Vira-lata', SUM(viralata) FROM votacao
//             UNION
//             SELECT 'Yorkshire', SUM(yorkshire) FROM votacao
//             UNION
//             SELECT 'Pastor Alemão', SUM(pastorAlemao) FROM votacao
//             UNION
//             SELECT 'Outro', SUM(outro) FROM votacao
//         ) AS dados
//         ORDER BY quantidade ASC
//         LIMIT 1;
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }

// Dados para gráfico com soma de cada raça
function carregarGraficoDogs() {
    var instrucao = `
        SELECT 'Shitzu' AS raca, SUM(shitzu) AS quantidade FROM votacao
        UNION
        SELECT 'Golden', SUM(golden) FROM votacao
        UNION
        SELECT 'Vira-lata', SUM(viralata) FROM votacao
        UNION
        SELECT 'Yorkshire', SUM(yorkshire) FROM votacao
        UNION
        SELECT 'Pastor Alemão', SUM(pastorAlemao) FROM votacao
        UNION
        SELECT 'Outro', SUM(outro) FROM votacao
        UNION
<<<<<<< HEAD
        SELECT 'Nenhum', SUM(naoTem) FROM votacao;

=======
        SELECT 'Nenhum', SUM(naoTem) AS quantidade FROM votacao;
>>>>>>> 6731436e3becac9ab37566efa08a071797b75359
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
