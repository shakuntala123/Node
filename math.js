function add(a,b){
   return a+b;
}
function subtract(a,b){
    return a-b;
 }

function divide(a,b)
{
    return a/b;
}

function multiply(a,b)
{
    return a*b;
}

module.exports={
 add,
 sub:subtract,
 multiply,
 divide
}

exports.mudulo=(a,b) => a % b;