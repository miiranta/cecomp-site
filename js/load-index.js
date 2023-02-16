$( document ).ready(function() {
    
    animateLogo();

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

