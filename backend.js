document.getElementById('calculateButton').addEventListener('click', function () {
  const studentCode = document.getElementById('studentCode').value.trim();
  const studentName = document.getElementById('studentName').value.trim();
  const exam1 = parseFloat(document.getElementById('exam1').value);
  const exam2 = parseFloat(document.getElementById('exam2').value);
  const exam3 = parseFloat(document.getElementById('exam3').value);

  if (!studentCode || !studentName || isNaN(exam1) || isNaN(exam2) || isNaN(exam3)) {
    document.getElementById('result').innerText = "กรุณากรอกข้อมูลทุกช่องให้ถูกต้อง";
    return;
  }

  const average = ((exam1 + exam2 + exam3) / 3).toFixed(2);
  let grade = "";

  if (average >= 80) grade = "A";
  else if (average >= 75) grade = "B+";
  else if (average >= 70) grade = "B";
  else if (average >= 65) grade = "C+";
  else if (average >= 60) grade = "C";
  else if (average >= 55) grade = "D+";
  else if (average >= 50) grade = "D";
  else grade = "F";

  document.getElementById('result').innerHTML = `
    <p>Student Code: ${studentCode}</p>
    <p>Student Name: ${studentName}</p>
    <p>Average Score: ${average}</p>
    <p>Grade: ${grade}</p>
  `;
});
console.log("Dev. By ณัฐวัฒน์&จิรายุตร์")
