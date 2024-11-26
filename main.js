const bill = document.getElementById("bill");
const people = document.getElementById("people");
const tipAmount = document.getElementById("tipAmount");
const total = document.getElementById("total");
const tcustom = document.getElementById("tcustom")
const tips = document.querySelectorAll("input[name='tip']")
const reset = document.getElementById("reset")


const handleChange = (e) => {
    let p = 0;
    for(let i = 0; i < tips.length; i++){
        if(tips[i].checked){
            p = tips[i].value
            break;
        }else{
            p = tcustom.value
        }
    }
    tipAmount.innerHTML = calcAmount(p, bill.value, people.value)
    total.innerHTML = calcTotal(p, bill.value, people.value)
}

const calcAmount = (tip=0, bill=0, people=0) => {
    let res = (Math.round(100 * (tip/100*bill/people))/100)
    if(!res || res == Infinity){
        return 0;
    }
    return res;
}
const calcTotal = (tip=0, bill=0, people) => {
    let res = (Math.round(100*((tip/100+1)*bill)/people)/100)
    if(!res || res == Infinity){
        return 0;
    }
    return res;
}

const handleChangeCustom = (e) => {
    tips.forEach(tip => tip.checked = false)
    handleChange(e)
}

const resetValue = () => {
    bill.value = 0
    tcustom.value = 0
    people.value = 0
    tips.forEach(tip => tip.checked = false)
    total.innerHTML = 0
    tipAmount.innerHTML = 0
}



reset.addEventListener("click", resetValue)
total.addEventListener("keyup", handleChange)
people.addEventListener("keyup", handleChange)
bill.addEventListener("keyup", handleChange)
tcustom.addEventListener("keyup", handleChangeCustom)
tips.forEach(tip => tip.addEventListener("change", handleChange))