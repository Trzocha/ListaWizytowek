$("document").ready(
    function (){
        let activeLP=1;
        let lastLP=0;
        
        $("#list span:first-child").css("background","#002144");
        
        $("#list span").click(
            function (){
                
                lastLP = activeLP;
                activeLP = $(this).attr("class");
                
                $("#list span").each(
                    function (){
                      $(this).removeAttr("style"); 
                    }       
                 );
                $("#no"+lastLP).animate({opacity:0},500);
                
                setTimeout(
                    function(){
                      $("#no"+activeLP).animate({opacity:1},500);              
                    },100        
                );
         
               $("."+activeLP).css("background","#002144");
            }        
        );
    }       
);