// === Age Calculator Script ===

document.getElementById("calculate").addEventListener("click", function () {
  const dob = document.getElementById("dob").value;
  const result = document.getElementById("result");

  if (!dob) {
    result.textContent = "⚠️ Please select your date of birth.";
    result.style.color = "red";
    return;
  }

  const birthDate = new Date(dob);
  const today = new Date();

  if (birthDate > today) {
    result.textContent = "⚠️ Date of birth cannot be in the future.";
    result.style.color = "red";
    return;
  }

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  // Adjust for negative days or months
  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  result.style.color = "#333";
  result.textContent = `🎉 You are ${years} years, ${months} months, and ${days} days old.`;
});
