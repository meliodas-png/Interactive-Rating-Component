let textEl = document.getElementById("text")
let rate = 4;
function one(number) {
    rate = number;
}

function submit() {
    text.innerHTML = `You selected ${rate} out of 5`
}
one()
submit()