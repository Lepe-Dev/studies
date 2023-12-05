const addition = function (a,b){
    return a+b
}
console.log('the result is: ', addition(9,3))


function addition2 (a,b){
    return a+b
}
console.log('the result is: ', addition2(2,7))


function substraction(a,b){
    return a-b
}
console.log('the result is: ', substraction(12, 4))


function multiplication(a,b){
    return a*b
}
console.log('the result is: ', multiplication(12, 4))


function division(a,b){
    return a/b
}
console.log('the result is: ', division(12, 4))

const isAllowed = () => {
    const userAge = prompt('Enter your age')
    if(userAge >= 18){
        alert("You're allowed to buy alcohol")
    }else{
        alert("You're not allowed to buy alcohol")
    }
}

isAllowed()