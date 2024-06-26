// dummy course code data with credit points
const courseData = {
    "CSE01": 4,
    "CSE02": 3,
    "CSE03": 3,
    "CSE04": 3,
    "CSE05": 3,
    "CSE06": 3,
    "CSE07": 2,
    "CSE08": 3,
    "CSE09": 3,
    "CSE10": 3,
    "CSE11": 3,
    "CSE12": 3,
    "CSE13": 3,
    "CSE14": 3,
    "CSE15": 4,
    "CSE16": 3,
    "CSE17": 3,
    "CSE18": 3,
    "CSE19": 3,
    "CSE20": 3,
    "IT101": 4,
    "IT102": 3,
    "IT103": 3,
    "IT104": 3,
    "IT105": 3,
    "IT106": 3,
    "IT107": 4,
    "IT108": 3,
    "IT109": 4,
    "IT110": 3,
    "IT111": 3,
    "IT112": 3,
    "IT113": 3,
    "IT114": 3,
    "IT115": 3,
    "IT116": 3,
    "IT117": 3,
    "IT118": 2,
    "IT119": 3,
    "IT120": 3,
}

// generate prompt for user to enter course code and grade
function generateForm() {
    const noOfCourses = document.getElementById('noOfCourses').value;
    const courseDetails = document.getElementById('courseDetails');
    courseDetails.innerHTML = '';
    for (let i = 1; i <= noOfCourses; i++) {
        courseDetails.innerHTML += `
            <label for="course${i}">Course ${i} : </label>
            <input type="text" id="course${i}" name="course${i}" required>
            <label for="grade${i}">Grade ${i} : </label>
            <input type="text" id="grade${i}" name="grade${i}" required>
            <br>
        `;
    }
    document.getElementById('courseForm').style.display = 'block';
    document.getElementById('noOfCoursesForm').style.display = 'none';
    document.getElementById('result').style.display = 'none';
}

// calculate cgpa
function calculateCGPA() {
    const noOfCourses = document.getElementById('noOfCourses').value;
    let totalCreditPoints = 0;
    let totalCredits = 0;
    for (let i = 1; i <= noOfCourses; i++) {
        const courseId = document.getElementById(`course${i}`).value;
        const grade = document.getElementById(`grade${i}`).value;
        totalCreditPoints += courseData[courseId] * grade;
        totalCredits += courseData[courseId];
    }
    const cgpa = totalCreditPoints / totalCredits;
    document.getElementById('courseForm').style.display = 'none';
    document.getElementById('noOfCoursesForm').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('cgpa').innerHTML = `CGPA : ${cgpa.toFixed(2)}`;
}