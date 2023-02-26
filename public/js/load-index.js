$( document ).ready(function() {
    $(this).scrollTop(0);

    animateLogo();
    animateGreetings();

});

function animateLogo() {
    
    //Step 1
    anime({
        targets: '#logo-main',

        opacity: 1,

        easing: 'linear',
        duration: 400,
        delay: 0,

        complete: function(anim) {

            //Step 2
            anime({
                targets: '#logo-div',
    
                height: "25vh",
    
                easing: 'spring(1, 80, 20, 0)',
                duration: 1000,
                delay: 1000
              });

            anime({
                targets: '#logo-main',
    
                height: "25vh",
    
                easing: 'spring(1, 80, 20, 0)',
                duration: 1000,
                delay: 800
              });

        }
      });

}

function animateGreetings(){
    dict = ["Hello World!", "Hallo Wereld!", "Bonjour monde!", "Ciao mondo!", "Olá Mundo!", "¡Hola Mundo!", "Labas pasauli!", "Hallo Welt!", "Hej Verden!", "Hei maailma!"]
    randNumber = Math.floor(Math.random() * dict.length);

    //Step 1
    $("#greetings-main").delay(5000).animate({
        opacity: 0,
        left: "+=50",
      }, 2000, "swing", function() {
        
        //Step 2
        $("#greetings-main").text(dict[randNumber])

        $("#greetings-main").animate({
            opacity: 1,
            left: "+=50",
          }, 2000, "swing", function() {
            
            //Step 3
            animateGreetings()
    
        });

    });

}

function jumpTo(location){
    if(location == "updates"){
      $("#updates-div")[0].scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    if(location == "services"){
      $("#services-div")[0].scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

}