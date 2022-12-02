const reasonInput = document.querySelector("#input-reason");
const amountInput = document.querySelector("#inout-amount");
const cancelBtn = document.querySelector("#btn-cancel");
const confirmBtn = document.querySelector("#btn-confirm");
const expenseList = document.querySelector("#expense-list");
const totalExpensesOutput = document.querySelector("#total-expenses");
const alertCtrl = document.querySelector("ion-alert");

let totalExpenses = 0;
const clear = () => {
  reasonInput.value = "";
  amountInput.value = "";
};
confirmBtn.addEventListener("click", async () => {
  const enteredReason = reasonInput.value;
  const enteredAmount = amountInput.value;

  if (
    enteredReason.trim().length <= 0 ||
    enteredAmount <= 0 ||
    enteredAmount.trim() <= 0
  ) {
    const alert = document.createElement("ion-alert");
    alert.header = "Alert";
    alert.message = "Please enter a valid reason and amount";
    alert.buttons = ["Okay"];

    document.body.appendChild(alert);
    await alert.present();
    return;
  }
  console.log(enteredAmount, enteredReason);

  const newItem = document.createElement("ion-item");
  newItem.textContent = enteredReason + ": $" + enteredAmount;

  expenseList.appendChild(newItem);

  totalExpenses += Number(enteredAmount);

  totalExpensesOutput.textContent = totalExpenses;
  clear();
});

cancelBtn.addEventListener("click", clear);
