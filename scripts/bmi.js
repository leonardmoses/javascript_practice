let units = 'LBS'
let userHeight = ''
let userWeight = ''
let bmi = ''
let length = ''
let weight = ''

let dispHeight = document.getElementById("height")
let dispWeight = document.getElementById("weight")
let dispBMI = document.getElementById("bmiString")

const promptUnit = document.getElementById("unit");
promptUnit.addEventListener("click" , askUnits);

const promptHW = document.getElementById("heightWeight")
promptHW.addEventListener("click" , askHeightWeight)

function askUnits() {
    while (units !== 'KG' || units !== 'LBS') {
        units = prompt("KG or LBS").toUpperCase();
        if (units === 'KG' || units === 'LBS') break
    }

    dispHeight.innerHTML = ''
    dispWeight.innerHTML = ''
    dispBMI.innerHTML = ''
    
    // if (units === 'KG') {
    //     length = 'Meters'
    //     weight = 'KGs'
    //     dispHeight.innerHTML = `Your height is ${(userHeight)} ${length}`
    //     dispWeight.innerHTML = `Your weight is ${(userWeight)} ${weight}`
    //     dispBMI.innerHTML = `Your BMI is ${bmi}`
    //     console.log("Metric")
    //     console.log(userHeight)
    //     console.log(userWeight)
    // } else if (units === 'LBS') {
    //     length = "Inches"
    //     weight = "LBs"
    //     dispHeight.innerHTML = `Your height is ${(userHeight*39.3701)} ${length}`
    //     dispWeight.innerHTML = `Your weight is ${(userWeight*2.20462)} ${weight}`
    //     dispBMI.innerHTML = `Your BMI is ${bmi}`
    //     console.log("Imperial")
    //     console.log(userHeight)
    //     console.log(userWeight)
    // } else {
    //     dispHeight.innerHTML = ``
    //     dispWeight.innerHTML = ``
    //     dispBMI.innerHTML = ``
    //     console.log("Neither")
    // }

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
        bmi = parseFloat((convertedWeight / convertedHeight**2).toFixed(1))
    } else if (units == "KG") {
        length = 'Meters'
        weight = 'KGs'
        userHeight = parseFloat(prompt("What is your height in Meters?"));
        userWeight = parseFloat(prompt("What is your weight in KGs?"));
        bmi = parseFloat((userWeight/userHeight**2).toFixed(1))
    }

    dispHeight.innerHTML = `Your height is ${userHeight} ${length}`
    dispWeight.innerHTML = `Your weight is ${userWeight} ${weight}`
    dispBMI.innerHTML = `Your BMI is ${bmi}`
}

//bmi formula = weight/(heigh^2)