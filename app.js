do {
    var  ctotal = 0

    do{
        ctotal = ctotal = Math.floor(Math.random() * 11)
        alert(`${ctotal} is the new value`)
    } while (ctotal >= 16)

    var a = prompt('wanna aplay again buddy?')
} while(a != "no")
