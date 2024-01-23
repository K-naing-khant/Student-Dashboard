// Variables //
const examButton = document.querySelector("#examButton");
const examModal = new bootstrap.Modal('#examModal');
const examSchedule = document.querySelector("#examSchedule");
const examScheduleForm = document.querySelector('#examScheduleForm');


// Function //
const createExamSchedule = (examSubject, examClass, examDay, examDate, examTime) => {
  const tr = document.createElement("tr");
  tr.className = "user-select-none border"
  tr.innerHTML = `
    <td id="examSubject">${examSubject}</td>
    <td id="examClass">${examClass}</td>
    <td id="examDate">${examDay}</td>
    <td id="examDate">${examDate}</td>
    <td id="examTime">${examTime}</td>
    <td><a href="" class="bi bi-three-dots"></a></td>
  `;
  return tr;
}


// Process //
examButton.addEventListener("click", () => {
  examModal.show();
})

examScheduleForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  let examSubject = formData.get("subjectInput");
  let examClass = formData.get("classInput");
  let examDay = formData.get("dayInput");
  let examDate = formData.get("dateInput");
  let examTime = formData.get("timeInput");
  examSchedule.append(createExamSchedule(examSubject, examClass, examDay, examDate, examTime));

  examScheduleForm.reset();
})