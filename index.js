const counters = document.querySelectorAll(".counter")

counters.forEach(counters=>{
    counters.innerText = "0"
    increment()

    function increment() {
        let current = +counters.innerText
        const data = counters.getAttribute("data-ceil")
        const increase = data / 15
        current = Math.ceil(current + increase)
        counters.innerText= 
        current
        if (current < data) {
            setTimeout
            (increment, 50)
            
            }
            else{
                counters.innerText= data

            }
        
        
    }
})