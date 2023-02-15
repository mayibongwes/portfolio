document.addEventListener("DOMContentLoaded", function() {
    // remove default text
    const headline = document.querySelector(".intro");
    headline.innerHTML = "";
    
    /* replaced with typed */
    var options = {
        strings: ['Hi there','My name is <span style="color:#6D1A36;font-weight:bold">Mayibongwe Sibanda</span>, and I am a <span style="color:#F75C03;font-weight:bold">Full-stack developer</span> and a <span style="color:#63535B;font-weight:bold">Software Engineer</span> with over 4 years of experience.'],
        typeSpeed: 40,
        showCursor: false,
        contentType: 'html'
      };
      
      var typed = new Typed('.intro', options);

  });