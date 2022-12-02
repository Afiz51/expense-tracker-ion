const reasonInput = document.querySelector("#input-reason")
const amountInput = document.querySelector("#inout-amount")
const cancelBtn = document.querySelector("#btn-cancel")
const confirmBtn = document.querySelector("#btn-confirm")

confirmBtn.addEventListener("click", () => {
    console.log("It works!")
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;

    if(enteredReason.trim() === 0 || enteredAmount === 0 || enteredAmount.trim() === 0) {
        return;
    }
})
