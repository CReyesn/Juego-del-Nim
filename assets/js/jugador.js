$(document).ready(function(){
var j1,j2,palitos=undefined

if(palitos==undefined){
$(".inputJ1").hide()
$(".btnJ1").hide()
$(".inputJ2").hide()
$(".btnJ2").hide()
}

$(".btnPalitos").click(function(){
    palitos=parseInt($(".inputPalitos").val())
        do{
          $(".palitos").html("Ingrese numero de palitos a jugar (5 o más)")  
          if(palitos<5){
            $(".info").html('ATENCION: Debe ingresar 5 o más palitos')
          }else{
            $(".jugando").html("PARTIDA INICIADA")
            $(".info").html("")
            $(".palitos").html("Jugador 1: ")
            $(".inputPalitos").val('')
            $(".inputJ1").show()
            $(".inputPalitos").hide()
            $(".btnPalitos").hide()
            $(".btnJ1").show()
          }  
          break;
        }while(palitos<5)
})



        $(".btnJ1").click(function(){
            j1=parseInt($(".inputJ1").val())
            
            
            do{
                
                if(j1>3 || j1<1){
                    $(".info").html("ATENCION: Debe seleccionar <1,2,3> palitos")
                    sleep(2)
                }else{
                    $(".info").html("jugador 1 jugó "+j1+" palitos")
                }
                
            }while(j1>3 || j1<1)

            palitos=palitos-j1
            $(".infoPalitos").html("Quedan "+palitos+" palitos")

            switch (palitos) {
                case 0: case -1:{
                    $(".inicio").html("Volver al inicio") 
                    $(".resultado").html("Jugador 1 Perdiste")
                    $(".btnJ1").hide()
                    $(".inputJ1").hide()
                    $(".palitos").hide()
                    break;
                } 
                case 1: {
                    $(".resultado").html("Jugador 2 Perdiste")   
                    $(".inicio").html("Volver al inicio")
                    $(".btnJ1").hide()
                    $(".inputJ1").hide()
                    $(".palitos").hide()
                    break;
                } 
                    
            
            }
            if(palitos>1){
            $(".palitos").html("Jugador 2: ")
            $(".inputJ1").hide()
            $(".btnJ1").hide()
            $(".btnJ2").show()
            $(".inputJ2").show()
            $(".inputJ2").val('')
            }
        
        })

            $(".btnJ2").click(function(){
                j2=parseInt($(".inputJ2").val())
                
            do{
                
                if(j2>3 || j2<1){
                    $(".info").html("ATENCION: Debe seleccionar <1,2,3> palitos")
                    sleep(2)
                }else{
                    $(".info").html("jugador 2 jugó "+j2+" palitos")
                }
                
            }while(j2>3 || j2<1)
            palitos=palitos-j2
            $(".infoPalitos").html("Quedan "+palitos+" palitos")

            switch (palitos) {
                case 0: case -1:{
                    $(".resultado").html("Jugador 2 Perdiste")
                    $(".inicio").html("Volver al inicio")  
                    $(".btnJ2").hide()
                    $(".inputJ2").hide()
                    $(".palitos").hide()
                    break
                } 
                case 1: {
                    $(".resultado").html("Jugador 1 Perdiste") 
                    $(".inicio").html("Volver al inicio")
                    $(".btnJ2").hide()
                    $(".inputJ2").hide()
                    $(".palitos").hide() 
                    break
                }   
                    
            
            }
            if(palitos>1){
            $(".palitos").html("Jugador 1: ")
            $(".inputJ2").hide()
            $(".btnJ2").hide()
            $(".btnJ1").show()
            $(".inputJ1").show()
            $(".inputJ1").val('')
            }
            })

            sleep(2)
        
        

    

})


    
            
        
        
    
    
        


        
                


    
    

    
