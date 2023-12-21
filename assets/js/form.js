$(".input_text").focus(function(){
    $(this).prev('.fa').addclass('glowIcon')
})
$(".input_text").focusout(function(){
    $(this).prev('.fa').removeclass('glowIcon')
})


document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('loginForm');
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const nameInput = document.getElementById('nameInput').value;
      const surnameInput = document.getElementById('surnameInput').value;
      const emailInput = document.getElementById('emailInput').value;
  
      axios.post("https://65675cba64fcff8d73103f34.mockapi.io/xpolee", {
        name: nameInput,
        surname: surnameInput,
        email: emailInput,
      })
      .then((response) => {
        console.log('Data sent:', response.data);
        form.reset(); 
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    });
  });