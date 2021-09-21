function getAgeInDays () {

    var YearsOfBirth = prompt(" Quelle est votre année de naissance ?");
    var AgeInDays = (2021 - YearsOfBirth)*365;
    console.log(AgeInDays);
    var h1 = document.createElement('h1');
    h1.setAttribute('id','ShowAgeInDays');
    var textAnswer = document.createTextNode('You are '+AgeInDays+' years old');
    h1.appendChild(textAnswer);
    document.getElementById('container_result').appendChild(h1);
}

function remove_result() {

   var rm = document.getElementById('ShowAgeInDays');
   rm.remove();

}