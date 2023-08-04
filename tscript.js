const celsius = document.getElementsByTagName(number1)
const fahrenheit =document.getElementsByTagName(number2)

window.addEventListener("load",() => celsius.focus())

celsius.addEventListener("input", () => {
    fahrenheit.value = ((celsius.value * 9) / 5 + 32).toFixed(2)
    if(!celsius.value) fahrenheit.value = ""
})

fahrenheit.addEventListener("input", () =>{
    celsius.value = (((fahrenheit.value - 32) * 5) / 9).toFixed(2)
    if(!fahrenheit.value) celsius.value = ""
 })