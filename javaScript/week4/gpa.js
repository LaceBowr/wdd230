
function getGrades(inputSelector){
    let grades = document.getElementById("grades").value;
    let gradesArray = grades.split(",");
    gradesArray.map(grade => grade.toUpperCase());
    return gradesArray;
}
document.getElementById("submitButton").addEventListener("click", clickHandler);

function clickHandler(){
    let gradesArray = getGrades();
    let gpaArray = gradesArray.map(lookUpGrade);
    let pointsTotal = gpaArray.reduce(function (total, item){
        return total + item;
    });
    
    let gpa = pointsTotal / gpaArray.length;
    let gpaString = gpa.toString();
    document.getElementById("output").innerHTML = gpaString;
}

function lookUpGrade(grade){   
    if (grade === "A") {
        total = 4;
    } 
    else if (grade === "A-") {
        total = 3.66;
    }
    else if (grade === "B+") {
        total = 3.33;
    }
    else if (grade === "B") {
        total = 3;
    }
    else if (grade === "B-") {
        total = 2.66;
    }
    else if (grade === "C+") {
        total = 2.33;
    }
    else if (grade === "C") {
        total = 2;
    }
    else if (grade === "C-") {
        total = 1.66;
    }
    else if (grade === "D+") {
        total = 1.33;
    }
    else if (grade === "D") {
        total = 1;
    }
    else if (grade === "D-") {
        total = .67;
    }
    else {
        total = 0;
    }
    return total;
}
    