let units = 'LBS'
let userHeight = ''
let userWeight = ''
let bmi = ''
let length = ''
let weight = ''

const promptUnit = document.getElementById("unit");
promptUnit.addEventListener("click" , askUnits);

const promptHW = document.getElementById("heightWeight")
promptHW.addEventListener("click" , askHeightWeight)

function askUnits() {
    units = prompt("KG or LBS").toUpperCase()
    document.getElementById("units").innerHTML = `You are using ${units}`
}

function askHeightWeight() {
    if (units == "LBS") {
        length = 'Inches'
        weight = 'lbs'
        userHeight = parseFloat(prompt("What is your height in Inches?"));
        userWeight = parseFloat(prompt("What is your weight in LBS?"));
        convertedHeight = userHeight*0.0254
        convertedWeight = userWeight*0.45359237
        bmi = parseFloat((convertedWeight/convertedHeight**2).toFixed(1))
        console.log(typeof bmi)
    } else if (units == "KG") {
        length = 'Meters'
        weight = 'KGs'
        userHeight = parseFloat(prompt("What is your height in Meters?"));
        userWeight = parseFloat(prompt("What is your weight in KGs?"));
        bmi = parseFloat((userWeight/userHeight**2).toFixed(1))
        console.log(typeof bmi)
    }

    document.getElementById("height").innerHTML = `Your height is ${userHeight} ${length}`
    document.getElementById("weight").innerHTML = `Your weight is ${userWeight} ${weight}`
    document.getElementById("bmiString").innerHTML = `Your BMI is ${bmi}`
}

//bmi formula = weight/(heigh^2)