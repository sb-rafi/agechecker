
function checkAge() {
    var age = document.getElementById('ageInput').value;
    var adultCard = document.getElementById('adultCard');
    var childCard = document.getElementById('childCard');
  
    if (age >= 18) {
      adultCard.style.display = 'block';
      childCard.style.display = 'none';
    } else {
      adultCard.style.display = 'none';
      childCard.style.display = 'block';
    }
  }