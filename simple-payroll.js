//INITIALIZATION
function initEventHandler() {
  document.getElementById("employeeName").addEventListener("input", () => {
    document.getElementById("employeeName").value = document.getElementById("employeeName").value.replace(/[<>`"'\/\\;\[\]\{\}`]/g, ''); 
  });

  document.getElementById("daysWorked").addEventListener("change", computeGrossPay);
  document.getElementById("dailyRate").addEventListener("change", computeGrossPay);
  document.getElementById("deductionAmount").addEventListener("change", computeNetPay);
  document.getElementById("rowAdd").addEventListener("click", addRow);
  document.getElementById("rowDelete").addEventListener("click", deleteRow);
  document.getElementById("rowDeleteAll").addEventListener("click", deleteAll);
}

//OTHER FUNCTIONS (ALPHABETICAL ORDER)
function addRow() {
  let employeeInfo = {
    "employeeName":document.getElementById("employeeName").value,
    "daysWorked":document.getElementById("daysWorked").value,
    "dailyRate":document.getElementById("dailyRate").value,
    "grossPay":document.getElementById("grossPay").value,
    "deductionAmount":document.getElementById("deductionAmount").value,
    "netPay":document.getElementById("netPay").value
  };
  rowInfo.push(employeeInfo);

  document.getElementById("payrollDisplay").innerHTML +="<tr>"
  +"<td>"+(rowInfo.length)+"</td>"
  +"<td>"+employeeInfo.employeeName+"</td>"
  +"<td>"+employeeInfo.daysWorked+"</td>"
  +"<td>"+employeeInfo.dailyRate+"</td>"
  +"<td>"+employeeInfo.grossPay+"</td>"
  +"<td>"+employeeInfo.deductionAmount+"</td>"
  +"<td>"+employeeInfo.netPay+"</td>"
  +"</tr>";
  updateRows();
}

function computeGrossPay() 
{
  document.getElementById("daysWorked").value = round(document.getElementById("daysWorked").value, 0);
  document.getElementById("dailyRate").value = round(document.getElementById("dailyRate").value, 2);
  document.getElementById("grossPay").value = round(document.getElementById("daysWorked").value * document.getElementById("dailyRate").value, 2);
  computeNetPay();
}

function computeNetPay()
{
  document.getElementById("deductionAmount").value = round(document.getElementById("deductionAmount").value, 2);
  document.getElementById("netPay").value = round(document.getElementById("grossPay").value - document.getElementById("deductionAmount").value, 2);
}

function deleteRow() {
  let n = document.getElementById("rowDelete").value;
  n > 0 ? rowInfo.splice(n-1, 1) : null;
  document.getElementById("rowDelete").value = null;
  updateRows();
}

function deleteAll() {
  document.getElementById("rowDisplay").innerHTML = null;
  rowInfo = [];
}

function round(IN, DP) {
    IN = parseFloat(IN);
    if (!isNaN(IN)) {
        IN = IN.toFixed(DP);
    }
    return IN;
}

function updateRows() {
  document.getElementById("payrollDisplay").innerHTML = "";
  let employeeCount = rowInfo.length;

  for (let i = 0; i < employeeCount; i++) {
    document.getElementById("payrollDisplay").innerHTML +="<tr>"
    +"<td>"+(i+1)+"</td>"
    +"<td>"+rowInfo[i].employeeName+"</td>"
    +"<td>"+rowInfo[i].daysWorked+"</td>"
    +"<td>"+rowInfo[i].dailyRate+"</td>"
    +"<td>"+rowInfo[i].grossPay+"</td>"
    +"<td>"+rowInfo[i].deductionAmount+"</td>"
    +"<td>"+rowInfo[i].netPay+"</td>"
    +"</tr>";
  }

  //Reset Values
  document.getElementById("employeeName").value = null;
  document.getElementById("daysWorked").value = null;
  document.getElementById("dailyRate").value = null;
  document.getElementById("deductionAmount").value = null;
  document.getElementById("grossPay").value = null;
  document.getElementById("netPay").value = null;
}