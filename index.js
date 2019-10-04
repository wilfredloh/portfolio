window.onload = () => {

    console.log('running')

      $(function () {
        let count = 0;
        
        var set = setInterval(function () {
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
    "Gamer",
    "Web Developer"
  ]