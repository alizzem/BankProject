let f = 'RUB'
let t = 'USD'

document.querySelectorAll('.currency div label').
forEach((item) => {
    item.addEventListener('click',function(ev){
        f = ev.target.innerText;
        amount()
    })
})

document.querySelectorAll('.currency2 div label').
forEach((item) => {
    item.addEventListener('click',function(ev){
        t = ev.target.innerText;
        amount()
    })
})

inputdiv.addEventListener('input', amount)

function amount(){
    fetch(`https://api.exchangerate.host/latest?base=${f}&symbols=${t}`)
        .then(respond => respond.json())
        .then(data => {
          outputdiv.value = (inputdiv.value * data.rates[t]).toFixed(2);
        })
}