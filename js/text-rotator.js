var typed;

$( document ).ready(function() { 
  window.typed = new Typed('#typed', {
    strings: [""]    
  });
  
});

$( window ).on( "load", function() { 

        setTimeout(function() {
          
         window.typed.destroy();
           var typed = new Typed('#typed', {
            strings: ["POSICIONAR EMPRESAS Y PERSONAS", "ANTICIPAR, ADMINISTRAR Y SUPERAR CRISIS", "COMUNICAR DE MANERA EFECTIVA"],
            typeSpeed: 60,
            backSpeed: 12,    
            backDelay: 1500,
            loop: true,
            loopCount: Infinity,
          }); 
        }, 600);
        
});
