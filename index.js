let win = 30 //numero de vitorias
let loss = 5 // numero de derrotas

function calculateWinRate (wins, losses){
    return wins - losses
}

function calculateNivel(winRate){
     if (winRate <= 10 ){
        return "Ferro"
     }else if (winRate > 10 && winRate <= 20){
        return "Bronze"
     }else if (winRate > 20 && winRate <= 50){
        return "Prata"
     }else if (winRate > 50 && winRate <= 80){
        return "Ouro"
     }else if (winRate > 80 && winRate <= 90){
        return "Diamante"
     }else if (winRate > 90 && winRate <= 100){
        return "Lendario"
     }else{
        return "Imortal"
     }
}

let winRate = calculateWinRate(win, loss)
let nivel =  calculateNivel(winRate)

console.log("O Herói tem um saldo de " + winRate + " vitorias e está no nível " + nivel )