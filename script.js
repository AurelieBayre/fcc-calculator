let result = "";

document.getElementById("one").onclick = function() {clickOne()};
function clickOne() {
    document.getElementById("show").innerHTML = "1";
    result += "1";
}
document.getElementById("two").onclick = function() {clickTwo()};
function clickTwo() {
    document.getElementById("show").innerHTML = "2";
    result += "2";
}
document.getElementById("three").onclick = function() {clickThree()};
function clickThree() {
    document.getElementById("show").innerHTML = "3";
    result += "3";
}
document.getElementById("four").onclick = function() {clickFour()};
function clickFour() {
    document.getElementById("show").innerHTML = "4";
    result += "4";
}
document.getElementById("five").onclick = function() {clickFive()};
function clickFive() {
    document.getElementById("show").innerHTML = "5";
    result += "5";
}
document.getElementById("six").onclick = function() {clickSix()};
function clickSix() {
    document.getElementById("show").innerHTML = "6";
    result += "6";
}
document.getElementById("seven").onclick = function() {clickSeven()};
function clickSeven() {
    document.getElementById("show").innerHTML = "7";
    result += "7";
}
document.getElementById("eight").onclick = function() {clickEight()};
function clickEight() {
    document.getElementById("show").innerHTML = "8";
    result += "8";
}
document.getElementById("nine").onclick = function() {clickNine()};
function clickNine() {
    document.getElementById("show").innerHTML = "9";
    result += "9";
}

document.getElementById("zero").onclick = function() {clickZero()};
function clickZero() {
    document.getElementById("show").innerHTML = "0";
    result += "0";
}

document.getElementById("add").onclick = function() {clickAdd()};
function clickAdd() {
    document.getElementById("show").innerHTML = "+";
    result += "+";
}

document.getElementById("substract").onclick = function() {clickSubstract()};
function clickSubstract() {
    document.getElementById("show").innerHTML = "-";
    result += "-";
}
document.getElementById("multiply").onclick = function() {clickMultiply()};
function clickMultiply() {
    document.getElementById("show").innerHTML = "*";
    result += "*";
}

document.getElementById("divide").onclick = function() {clickDivide()};
function clickDivide() {
    document.getElementById("show").innerHTML = "/";
    result += "/";
}

document.getElementById("equal").onclick = function() {clickEqual()};
function clickEqual() {
    result = result.replace(/([a-z])/gi, "");
    let printResult = eval(result);
    //console.log(result, printResult);
    document.getElementById("show").innerHTML = "= " + printResult;
    
}
document.getElementById("ac").onclick = function() {clickAC()};
function clickAC() {
    document.getElementById("show").innerHTML = "";
    result="";
}