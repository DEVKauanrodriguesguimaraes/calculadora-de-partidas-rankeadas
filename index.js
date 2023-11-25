//Vitórias, derrotas, saldo de vitórias, resultado do nível, nível
let win = 500
let defeats = 0
let winResult = sum(win, defeats)
let levelResult = ""

function sum(win, defeats) {
    let winBalance = (win - defeats)
    return winBalance
}
switch (true) {
    case winResult <= 10:
        levelResult = "Iron"
        break;
    case winResult > 10 && winResult <= 20:
        levelResult = "Bronze"
        break;
    case winResult > 20 && winResult <= 50:
        levelResult = "Silver"
        break;
    case winResult > 50 && winResult <= 80:
        levelResult = "Gold"
        break;
    case winResult > 80 && winResult <= 90:
        levelResult = "Diamond"
        break;
    case winResult > 90 && winResult <= 100:
        levelResult = "Legendary"
        break;
    default:
        winResult > 100
        levelResult = "Imomortal"
}
console.log(`O Herói tem saldo de ${winResult} está no nível ${levelResult}`)
