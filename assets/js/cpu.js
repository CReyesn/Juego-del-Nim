$(document).ready(function(){
    var j1,cpu,palitos=undefined

    if(palitos==undefined){
    $(".inputJ1").hide()
    $(".btnJ1").hide()
    }


    $(".btnPalitos").click(function(){
        palitos=parseInt($(".inputPalitos").val()) 
        
        
            $(".palitos").html("Ingrese numero de palitos a jugar (5 o más)")  
            if(palitos<5){
              $(".info").html('ATENCION: Debe ingresar 5 o más palitos')
            }else{
                if((palitos-2)%4==0){
                    cpu=1
                    $(".infoCPU").html("CPU jugó: "+cpu)
                }else{
                    if((palitos-3)%4==0){
                        cpu=2
                        $(".infoCPU").html("CPU jugó: "+cpu)
                    }else{
                        if(palitos%4==0){
                            cpu=3
                            $(".infoCPU").html("CPU jugó: "+cpu)
                        }else{
                            cpu=0
                            
                        }
                    }
                }

              palitos=palitos-cpu  
              $(".jugando").html("PARTIDA INICIADA")
              $(".infoPalitosCPU").html("Quedan "+palitos+" palitos")
              $(".palitos").html("Jugador: ")  
              $(".inputPalitos").val('')
              $(".inputJ1").show()
              $(".inputPalitos").hide()
              $(".btnPalitos").hide()
              $(".btnJ1").show()
            }  
            
        
    }) 


    


    $(".btnJ1").click(function(){
        j1=parseInt($(".inputJ1").val())
        
        
        do{
            
            if(j1>3 || j1<1){
                $(".info").html("ATENCION: Debe seleccionar <1,2,3> palitos")
                $(".inputJ1").val('')
                sleep(2)
            }else{
                $(".info").html("Jugador jugó "+j1+" palitos")
            }
            
        }while(j1>3 || j1<1)

        palitos=palitos-j1
        $(".infoPalitosJ1").html("Quedan "+palitos+" palitos")

        switch (palitos) {
            case 0: case -1:{
                $(".inicio").html("Volver al inicio") 
                $(".resultado").html("Humano perdiste") 
                $(".btnJ1").hide()
                $(".inputJ1").hide()
                $(".palitos").hide()
                break;
            } 
            case 1: { // nunca va a ocurrir 
                $(".resultado").html("CPU Perdiste")  
                $(".inicio").html("Volver al inicio")
                $(".btnJ1").hide()
                $(".inputJ1").hide()
                $(".palitos").hide()
                break;
            } 
    
        }
        
        if(palitos>1){
        $(".inputJ1").val('')
        if((palitos-2)%4==0){
            cpu=1
            $(".infoCPU").html("CPU jugó: "+cpu)
        }else{
            if((palitos-3)%4==0){
                cpu=2
                $(".infoCPU").html("CPU jugó: "+cpu)
            }else{
                if(palitos%4==0){
                    cpu=3
                    $(".infoCPU").html("CPU jugó: "+cpu)
                }else{
                    cpu=0
                    
                }
            }
        }
        palitos=palitos-cpu 
        $(".infoPalitosCPU").html("Quedan "+palitos+" palitos")
        switch (palitos) {
            case 0: case -1:{ //nunca va a ocurrir
                $(".inicio").html("Volver al inicio") 
                $(".resultado").html("CPU perdiste") 
                $(".btnJ1").hide()
                $(".inputJ1").hide()
                $(".palitos").hide()
                break;
            } 
            case 1: {
                $(".resultado").html("Humano Perdiste")  
                $(".inicio").html("Volver al inicio")
                $(".btnJ1").hide()
                $(".inputJ1").hide()
                $(".palitos").hide()
                break;
            } 
    
        }
        }

        
    
    })




})