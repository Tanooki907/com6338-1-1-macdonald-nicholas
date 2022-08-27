function greet() {
    var name = prompt("What is your name?")
    alert("Hello, " + name)
    var age = parseInt(prompt("How old are you?"))
    var bday = confirm("Have you already had your birthday this year?")
    var thisYear = new Date()
    var birthYear
    if (bday) {
        birthYear = thisYear.getFullYear() - age
    }else{
        birthYear = thisYear.getFullYear() - (age+1)
    }
    alert ("You were born on " + birthYear)
}