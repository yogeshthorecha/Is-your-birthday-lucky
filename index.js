const dateOfBirth = document.querySelector("#dob");
const luckyNumber = document.querySelector("#lucky-no");
const checkButton = document.querySelector("#check");
const outputBox = document.querySelector("#output-box")

checkButton.addEventListener('click',function(){
    var sum = sumOfDob(dateOfBirth.value);
    var luckyNumberr = luckyNumber.value;
    if(sum&&luckyNumberr){
    var luckyOrNot =checkDobIsLucky(luckyNumberr,sum);
    outputBox.innerText = luckyOrNot;
    }else  outputBox.innerText = "Please enter details in both the fields😑"
})
function sumOfDob(dateOfBirth){
    dateOfBirth = dateOfBirth.replaceAll("-","");
    var sum=0;
    for(let i=0;i<dateOfBirth.length;i++){
        sum  = sum + Number(dateOfBirth.charAt(i))
    }
    return sum;
}
function checkDobIsLucky(luckyNumber,sum){
     if(sum%luckyNumber === 0){
        return "yes your birthday is lucky😁";
     }
     else return "your birthday is not lucky☹";
}