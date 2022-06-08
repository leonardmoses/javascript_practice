let units = ''
let userHeight = ''
let userWeight = ''
let bmi = ''

const promptUnit = document.getElementById("unit");
promptUnit.addEventListener("click" , askUnits);

const promptHW = document.getElementById("heightWeight")
promptHW.addEventListener("click" , askHeightWeight)

function askUnits() {
    units = prompt("KG or LBS").toUpperCase()
    document.getElementById("units").innerHTML = `You are using ${units}`
}

console.log(units)

function askHeightWeight() {
    if (units == "LBS") {
        userHeight = parseFloat(prompt("What is your height in Inches?"))*0.0254;
        userWeight = parseFloat(prompt("What is your weight in LBS?"))*0.45359237;
        console.log(userHeight,userWeight, "lbs")
    } else if (units == "KG") {
        userHeight = parseInt(prompt("What is your height in Meters?"));
        userWeight = parseInt(prompt("What is your weight in KGs?"));
        console.log(userHeight, userWeight,"kg")
    }

    document.getElementById("height").innerHTML = `Your height is ${userHeight}`
    document.getElementById("weight").innerHTML = `Your weight is ${userWeight}`

    bmi = userWeight/userHeight**2
    document.getElementById("bmiString").innerHTML = `Your BMI is ${bmi}`
}






//bmi formula = weight/(heigh^2)

function bmiCalculator(height, weight) {
    userHeight = w
    bmi = weight/height**2
}