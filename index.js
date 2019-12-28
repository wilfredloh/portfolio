
window.onload = () => {

  console.log('running')

  // Configuration of Typed.js fields
  let options = {
    strings: titleArray,
    typeSpeed: 100,
    loop: true,
    backDelay: 1100,
    backSpeed: 30
  };

  let typed = new Typed('.text-slider', options);

  let title = document.querySelector('.title');

  // Set a timeout to show "Learn More" after 2 seconds
  setTimeout( ()=> {
    title.classList.remove("hide");
    title.classList.add('show');
  }, 2000)

  // Configuration of fade animation
  $(function () {
    let count = 0;
    
    let set = setInterval(function () {
      if (count === titleArray.length-1) {
          count = 0;
      }
    //   console.log(count)
    //   let num = Math.floor(Math.random()*titleArray.length) 
      $("#title").fadeOut(400, function () {
        $(this).text(titleArray[count]).fadeIn(400);
      });
      count++;
    }, 2500);

    if (window.location.href.includes('edit')) {
      clearInterval(set);
    }
  });

  // Modal JQuery
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })
  
};
  
let titleArray = [
  "Web Developer",
  "Front End Ninja", 
  "Full Stack Developer",
  "Software Engineer",
  "Back End Wizard",
  "User-Centric Designer",  
  "Hacker",
  "Marketer",
  "Gamer"
  // "Web Developer"
]

