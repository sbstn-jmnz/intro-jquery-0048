$("p").click(function(){
    $(this).toggle()
    console.log(this)
})
$("button").click(function(){
    $("p").show()
})
$("#sayHello").click(function(){
    var messagge = "Hola clase" 
    alert(messagge)
    console.log(messagge)
})

$('.jumbotron').mouseenter(function(){
    alert("Te gusta el mueve mueve")
})

$('.jumbotron').mouseleave(function(){
    alert("Quiero mover el bote")
})

$('#bigBtn').dblclick(function(){
    alert("Doble click!!")
})


$('input').keypress(function(){
    $('h2').text($(this).val())
    console.log($(this).val())
})