function getSimplicityOfNumber (number){
    if (number > 1000) return "Данные неверны.";
    if (number === 0) return "Ноль-это ноль. Число непростое";
    if (number === 1) return "Один - это один.";
    let divisionsCount = 0;
    for (let i=1; i<= number;i++){
        if (number % i=== 0) divisionsCount++;
    }
    if (divisionsCount===2)
    return "Число простое";
    else
    return "Число непростое";
}
console.log(getSimplicityOfNumber(5));