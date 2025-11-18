let employees = [];

    function addEmployee() {
    const name = document.getElementById('employeeName').value.trim();           
    const days = parseFloat(document.getElementById('daysWorked').value);
    const rate = parseFloat(document.getElementById('dailyRate').value);
    const deduction = parseFloat(document.getElementById('deductionAmount').value);

        if (!name || isNaN(days) || isNaN(rate) || isNaN(deduction)) {
            alert("please fill in all fields correctly");
            return;
        }

        const gross = days * rate;
        const net = gross - deduction;

        employees.push({ name, days, rate, deduction, gross, net });

        displayTable();
        clearFields();
    }

    function deleteEmployee() {
        const line = parseInt(prompt("enter the line number to delete:"));
        if (isNaN(line) || line < 1 || line > employees.length) {
            alert("invalid");
            return;
        }

        employees.splice(line - 1, 1);
        displayTable();
    }

    function displayTable() {
        const tbody = document.querySelector("#payrollTable tbody");
        tbody.innerHTML = "";

        employees.forEach((emp, index) => {
            const row = `
                <tr>
                    <td>${index + 1}</td>
                    <td>${emp.name}</td>
                    <td>${emp.days}</td>
                    <td>₱${emp.rate.toFixed(2)}</td>
                    <td>₱${emp.gross.toFixed(2)}</td>
                    <td>₱${emp.deduction.toFixed(2)}</td>
                    <td>₱${emp.net.toFixed(2)}</td>
                </tr>
            `;
            tbody.innerHTML += row;
        });
    }

    function clearFields() {
        document.getElementById('employeeName').value = "";
        document.getElementById('daysWorked').value = "";
        document.getElementById('dailyRate').value = "";
        document.getElementById('deductionAmount').value = "";
    }