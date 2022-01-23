// example 1
//const steps = ["one", "two", "three"];
//const stepsHtml = steps.map(function (step) {
//  return `<li>${step}</li>`;
//});
//document.getElementById("myList").innerHTML = stepsHtml.join();

//**************************************/
const grades = ["A", "B", "A"];
let sum = 0
function convertGradesToNumbers(grade){
    let total = 0
    if (grade === "A") {
        total = 4;
    } 
    if (grade === "B") {
        total = 3;
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
