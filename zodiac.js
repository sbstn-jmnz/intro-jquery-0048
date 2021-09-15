$('select').change(function(){
    console.log($(this).val())
})

$('button').click(function(event){
    // previene el comportamiento por defecto que traen los botones
    event.preventDefault()
    
    var option = $('select').val()
    var zodiacText = ''
    
    if(option == 'Lib'){
        zodiacText = Lib
    }else if(option == 'Esc'){
        zodiacText = Esc
    }else if(option == 'Sag'){
        zodiacText = Sag
    }else if(option == 'Vir'){
        zodiacText = Vir
    }else if(option == 'Leo'){
        zodiacText = Leo
    }else if(option == 'Can'){
        zodiacText = Can
    }else if(option == 'Gem'){
        zodiacText = Gem
    }else if(option == 'Tau'){
        zodiacText = Tau
    }else if(option == 'Ari'){
        zodiacText = Ari
    }else if(option == 'Cap'){
        zodiacText = Cap
    }else if(option == 'Acu'){
        zodiacText = Acu
    }else if(option == 'Pis'){
        zodiacText = Pis
    }
    
    $('#result').text(zodiacText)
    $('#myModal').modal()
})

var Lib = "Algún mensaje positivo para alegrar el miserable día de Libra"
var Esc = "Algún mensaje positivo para alegrar el miserable día de Escorpión "
var Sag = "Algún mensaje positivo para alegrar el miserable día Sagitatio"
var Vir = "Algún mensaje positivo para alegrar el miserable día de Virgo"
var Leo = "Algún mensaje positivo para alegrar el miserable día de Leo"
var Can = "Algún mensaje positivo para alegrar el miserable día de Cancer"
var Gem = "Algún mensaje positivo para alegrar el miserable día de Geminis"
var Tau = "Algún mensaje positivo para alegrar el miserable día de Tauro"
var Ari = "Algún mensaje positivo para alegrar el miserable día de Aries"
var Cap = "Algún mensaje positivo para alegrar el miserable día de Capricornio"
var Acu = "Algún mensaje positivo para alegrar el miserable día de Acuario"
var Pis = "Algún mensaje positivo para alegrar el miserable día de Piscis"

