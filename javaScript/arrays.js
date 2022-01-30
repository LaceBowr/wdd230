// example 1
//const steps = ["one", "two", "three"];
//const stepsHtml = steps.map(function (step) {
//  return `<li>${step}</li>`;
//});
//document.getElementById("myList").innerHTML = stepsHtml.join();

//**************************************/
let gradesArray = gradesArray.split(,)= grades
const grades = [];
let sum = 0
function convertGradesToNumbers(grade){
    let total = 0
    if (grade === "A") {
        total = 4;
    } 
    if (grade === "A-") {
        total = 3.66;
    }
    if (grade === "B+") {
        total = 3.33;
    }
    if (grade === "B") {
        total = 3;
    }
    if (grade === "B-") {
        total = 2.66;
    }
    if (grade === "C+") {
        total = 2.33;
    }
    if (grade === "C") {
        total = 2;
    }
    if (grade === "C-") {
        total = 1.66;
    }
    if (grade === "D+") {
        total = 1.33;
    }
    if (grade === "D") {
        total = 1;
    }
    if (grade === "D-") {
        total = .67;
    }
    else (grade === "F") {
        total = 0;
    }

    return total;
}


let gradeNum = grades.map(convertGradesToNumbers);
const pointsTotal = gradeNum.reduce(function (total, item){
    return total + item;
});

const gpa = pointsTotal / gradeNum.length;



//for (let i = 0; i < grades.length; i++) {
//    sum += gradeNum[i];
//}

//console.log(sum);
