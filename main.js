// table values
// Expense categories
var expcategories = [
  "Eat",
  "Health and Fitness",
  "Insurances",
  "Shopping",
  "Transportation",
  "Entertainment",
  "Bills",
  "Rent",
  "Education",
  "Leisure and Travel",
  "Social",
  "Suscriptions",
  "One-off Cost",
];
// Income categories
var inccategories = ["Regular", "One-off", "Casual", "Other"];
// Expsense Subcategories
var expsubcategories = [
  "Dine out",
  "Groceries",
  "Delivery",
  "Internet and Phone",
  "Electricity",
  "Gas",
  "Water",
  "Movies",
  "Games",
  "Books",
  "Drinks",
  "Pets",
  "Doctor and Pharmacy",
  "Personal Care",
  "Gym and Sports",
  "Accessories",
  "Clothing and footwear",
  "Electronics",
  "Public Transportation",
  "Vehicle Maintenance",
  "Parking Fees and fines",
  "Petrol",
  "Taxi and Uber",
  "Social Meals and drinks",
  "Social Activities",
  "Social Gifts",
  "Other",
];
// Income Subcategories
var incsubcategories = [
  "Salary",
  "Bonus",
  "Casual Work",
  "Selling",
  "Interest Money",
  "Gifts",
  "Benefit",
  "Tax Refund",
  "Social Gifts",
  "Other",
];
// Paid by methods
var paidby = [
  "CBA Debit",
  "Amex",
  "Direct Debit",
  "Cash",
  "PayPal",
  "Alipay",
  "WechatPay",
];

// get current date
var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + "-" + mm + "-" + dd;

function listOptions(arr) {
  var result = "";
  for (let i = 0; i < arr.length; i++) {
    result += '<option value="' + arr[i] + '">' + arr[i] + "</option> ";
  }
  return result;
}

// ---- default table html ----

// date
var tabledate = `<input class="incexp" type="date" value="${today}">`;

// income or expense
var tableincexp =
  '<select class="incexp" name="incexp" onchange="toggle_category(this.value)" > <option value="Expense">Expense</option> <option value="Income">Income</option> </select>';

// amount
var tableamount = '<input class="incexp" type="text" value="$0.00">';

// categories
var exptablecat = listOptions(expcategories);
var inctablecat = listOptions(inccategories);

var tablecategories =
  '<select class="incexp" name="cat" id = "category">' +
  exptablecat +
  "</select>";

// subcategories
var expsubcategories = listOptions(expsubcategories);
var incsubcategories = listOptions(incsubcategories);

var tablesubcat =
  '<select class="incexp" name="subcat" id = "subcategory">' +
  expsubcategories +
  "</select>";

// description
var tabledesc = '<input class="incexp" type="text" placeholder="Description">';

// Paid by
var tablepaidby =
  '<select class="incexp" name="subcat">' + listOptions(paidby) + "</select>";

var table = document.getElementById("transactions");

function addNewRow() {
  row = table.insertRow(-1);
  row.insertCell(0).innerHTML = tabledate;
  row.insertCell(1).innerHTML = tableincexp;
  row.insertCell(2).innerHTML = tableamount;
  row.insertCell(3).innerHTML = tablecategories;
  row.insertCell(4).innerHTML = tablesubcat;
  row.insertCell(5).innerHTML = tabledesc;
  row.insertCell(6).innerHTML = tablepaidby;
}

function toggle_category(value) {
  let cat = document.getElementById("category");
  let subcat = document.getElementById("subcategory");

  if (value == "Expense") {
    cat.innerHTML = exptablecat;
    subcat.innerHTML = expsubcategories;
  } else {
    cat.innerHTML = inctablecat;
    subcat.innerHTML = incsubcategories;
  }
}
