

document.addEventListener('DOMContentLoaded', () => {var button = document.getElementById("startfizzbuzz")
    button.addEventListener("click",Iteration)})


    console.log("Iteration")
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0)
    {console.log("FizzBuzz")
    }
    else if (i % 5 === 0)
    {console.log("Buzz")
    }
    else if(i % 3 === 0)
    {console.log("Fizz")
    }
    else (console.log(i)
        )
}

function BeispielFunktion() {
    console.log("Hey!!!!")
}
function Iteration() {
    let div = document.getElementById('output')
    div.innerHTML += ("Iteration")
    for (let i = 1; i <= 100; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            div.innerHTML += "FizzBuzz" + "<br>"
        } else if (i % 5 === 0) {
            div.innerHTML += "Buzz" + "<br>"
        } else if (i % 3 === 0) {
            div.innerHTML += "Fizz" + "<br>"
        } else div.innerHTML += i + "<br>"
    }
}

