function saturdayFun(someData = "roller-skate") {
    return `This Saturday, I want to ${someData}!`;
}
 const mondayWork = function(someActivity = 'go to the office') {
    return `This Monday, I will ${someActivity}.`
 }

 function wrapAdjective(flair = "*") {
     return function (name = "special") {
        return `You are ${flair}${name}${flair}!`
     }
 }