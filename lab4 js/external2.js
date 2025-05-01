let name_input = document.getElementById("student_name");
let grade_input = document.getElementById("student_grade");
let add_btn = document.getElementById("add_btn");
let table_body = document.getElementById("student_table").tBodies[0];
let error_msg = document.getElementById("error_msg");
let sort_select = document.getElementById("sort_select");
let filter_select = document.getElementById("filter_select");

let students = [];

  function capitalizeName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  }

  function getSelectedDepartment() {
    return document.querySelector('input[name="dept"]:checked').value;
  }

  function showError(message) {
    error_msg.innerText = message;
    error_msg.style.display = "inline";
    setTimeout(() => {
      error_msg.style.display = "none";
    }, 3000);
  }

  function renderTable() {
    table_body.innerHTML = "";

    let filtered = [...students];

    if (filter_select.value === "failed") {
      filtered = filtered.filter(s => s.grade < 60);
    } else if (filter_select.value === "success") {
      filtered = filtered.filter(s => s.grade >= 60);
    }

    if (sort_select.value === "name") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort_select.value === "grade") {
      filtered.sort((a, b) => a.grade - b.grade);
    }

    for (let student of filtered) {
      let tr = document.createElement("tr");

      if (student.grade < 60) {
        tr.classList.add("failed"); 
      } else if (student.grade < 75) {
        tr.classList.add("medium"); 
      } else {
        tr.classList.add("success"); 
      }
      
      let td_name = document.createElement("td");
      td_name.innerText = student.name;

      let td_grade = document.createElement("td");
      td_grade.innerText = student.grade;

      let td_dept = document.createElement("td");
      td_dept.innerText = student.department;

      let td_delete = document.createElement("td");
      let delBtn = document.createElement("button");
      delBtn.innerText = "🗑️";
      delBtn.onclick = () => {
        students = students.filter(s => s.name !== student.name);
        renderTable();
      };
      td_delete.appendChild(delBtn);

      tr.appendChild(td_name);
      tr.appendChild(td_grade);
      tr.appendChild(td_dept);
      tr.appendChild(td_delete);

      table_body.appendChild(tr);
    }
  }

  add_btn.onclick = () => {
    let name = capitalizeName(name_input.value.trim());
    let gradeStr = grade_input.value.trim();
    let grade = parseInt(gradeStr);
    let department = getSelectedDepartment();

    // Validation
    if (!name || students.find(s => s.name === name)) {
      showError("Name is empty or already exists.");
      return;
    }

    if (isNaN(grade) || gradeStr === "" || grade < 0 || grade > 100) {
      showError("Grade must be a number between 0 and 100.");
      return;
    }

    students.push({
      name: name,
      grade: grade,
      department: department
    });

    name_input.value = "";
    grade_input.value = "";
    renderTable();
  };

  sort_select.onchange = renderTable;
  filter_select.onchange = renderTable;

