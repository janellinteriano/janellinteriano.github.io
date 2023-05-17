window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('scroll', window.scrollY > 0);
  });

  // typing effect
  const typedText = document.getElementById('typed-text');
  const textArray = ['Hello, my name is Janell Interiano. ', 'I am a full-stack developer and a graduate of the software development boot camp at the Tech Academy. ',
   'I am skilled in multiple programming languages such as JavaScript, C#, Python, SQL, HTML, and CSS.'];
  
  let textIndex = 0;
  let charIndex = 0;
  
  function type() {
    if (textIndex < textArray.length) {
      if (charIndex < textArray[textIndex].length) {
        typedText.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 50);
      } else {
        textIndex++;
        if (textIndex < textArray.length) {
          typedText.innerHTML += '<br>'; // Add line break between sentences
          charIndex = 0;
          setTimeout(type, 1000);
        }
      }
    }
  }
  
  document.addEventListener('DOMContentLoaded', type);  