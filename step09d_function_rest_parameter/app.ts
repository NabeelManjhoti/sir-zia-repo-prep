//Named function with Rest parameters
function staff(bossName:string, ...otherStaff:string[]){
    return bossName + " " + otherStaff.join(" ");
};

let myStaff = staff("Mbappe", "Vini", "Rodrygo", "Bellingham");;
console.log(myStaff);

//Anonymous function type with rest parameters.
let footballPlayers:(captain:string, ...midfielders:string[]) => string =
function midfielders(captain:string, ...midfielders:string[]){
    return captain + " " + midfielders.join(" ");
};

let myTeam = footballPlayers("Modric", "Valverde", "Brahim", "Guler");
console.log(myTeam);

//Note: Rest, optional and default parameters can only
// be at the end of the parameter list									