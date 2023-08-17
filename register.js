function onClickSubmit() {
  let companyName = document.getElementById("companyName").value;
  let contactName = document.getElementById("contactName").value;
  let contactNumber = document.getElementById("contactNumber").value;
  let tableAmount = document.getElementById("tableAmount").value;
  if (companyName === "" || contactName === "" || contactNumber === "") {
    window.alert("company name or contact name or contact number is empty");
  } else if (tableAmount !== "" && (tableAmount < 1 || tableAmount > 10)) {
    window.alert("table amount must be 1-10");
  } else {
    window.alert("registed!!!");
  }
}
