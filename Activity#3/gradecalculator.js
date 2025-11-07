function calculateGrade() {
      let project = parseFloat(document.getElementById("project").value) || 0;
      let quiz = parseFloat(document.getElementById("quiz").value) || 0;
      let midterm = parseFloat(document.getElementById("midterm").value) || 0;
      let finals = parseFloat(document.getElementById("finals").value) || 0;
      let activities = parseFloat(document.getElementById("activities").value) || 0;

      let average = (project * 0.25) +
                    (quiz * 0.15) +
                    (midterm * 0.25) +
                    (finals * 0.25) +
                    (activities * 0.10);

      let remarks = "";
      if (average >= 90) {
        remarks = "Excellent";
      } else if (average >= 80) {
        remarks = "Very Good";
      } else if (average >= 70) {
        remarks = "Good";
      } else if (average >= 60) {
        remarks = "Fair";
      } else {
        remarks = "Needs Improvement";
      }

      document.getElementById("average").textContent = average.toFixed(2);
      document.getElementById("remarks").textContent = remarks;
    }

// Attach a single click handler after DOM is ready. This prevents adding listeners repeatedly
// and avoids relying on inline `onclick` attributes.
document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('calculateBtn');
  if (btn) {
    btn.addEventListener('click', calculateGrade);
  }
});