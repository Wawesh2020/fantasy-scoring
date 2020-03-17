const calculateScore = (player) => {
    switch (player.position) {
        case 'QB':
            return calculateTotalPassing(player) + calculateTotalRushing(player)       

        case 'RB': 
            return   calculateTotalRushing(player) + calculateTotalReceiving(player) + calculateTotalKickReturn(player) + calculateTotalPuntReturn(player)

        case 'WR': 
            return   calculateTotalRushing(player) + calculateTotalReceiving(player) + calculateTotalKickReturn(player) + calculateTotalPuntReturn(player)

        case 'TE': 
            return    calculateTotalReceiving(player)  

        default:
            return 0 
    }
} 


function calculateTotalPassing(player) { 
    const yards = player.stats.passing.yards / 25 
    const touchdowns = player.stats.passing.touchdowns * 6
    const interceptions = player.stats.passing.interceptions  * - 3
    

    return yards + touchdowns + interceptions 
}

function calculateTotalRushing(player){
    const yards = player.stats.rushing.yards / 10
    const touchdowns = player.stats.rushing.touchdowns * 6
    const fumbles = player.stats.rushing.fumbles  * - 3

    return yards + touchdowns  + fumbles
}

function calculateTotalReceiving(player){ 
    const yards = player.stats.receiving.yards / 10 
    const touchdowns = player.stats.receiving.touchdowns * 6
    const fumbles = player.stats.receiving.fumbles * - 3 
    const receptions = player.stats.receiving.receptions * 1

    return yards + touchdowns + receptions  + fumbles
}

function calculateTotalKickReturn(player){
    const yards = player.stats.return.kickreturn.yards / 15
    const touchdowns = player.stats.return.kickreturn.touchdowns * 6
    const fumbles = player.stats.return.kickreturn.fumbles * - 3
    

    return yards + touchdowns + fumbles
}


function calculateTotalPuntReturn(player){
    const yards = player.stats.return.puntreturn.yards / 15
    const touchdowns = player.stats.return.puntreturn.touchdowns * 6
    const fumbles = player.stats.return.puntreturn.fumbles * - 3
    

    return yards + touchdowns + fumbles
}

function calculateTotalFieldGoals(player){
    const attempts = player.stats.fieldgoals.attempts * 0
    const made = player.stats.fieldgoals.made * 0
    return attempts + made
}

function calculateTotalXp(player){
    const attempts = player.stats.xp.attempts * 0
    const made = player.stats.xp.made * 0
    return attempts + made
}

module.exports = calculateScore 

