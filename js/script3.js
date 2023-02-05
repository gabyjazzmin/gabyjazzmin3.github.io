$(document).ready(function() {

    // Start your code from here
    
    let animals = [
        "futbol femenil", "cafe", "cafeterias", "musica", 
        "festivales", "poesia", "zoe", "perros", "doggos"
      ];
    
    
      function populateButtons(array){
        $("#animal-buttons").empty();
    
    array.forEach(element => {
        
        var a = $("<button>");
        a.text(element)
        a.addClass("animal-button")
        a.attr("data-type",element)
        $("#animal-buttons").append(a);
    });
    }
    
    // La logica del click de cada boton para hacer la llamda al API
    $("#animal-buttons").on("click", ".animal-button", function() {
        let APIKEY = "q1b0pWH5NdpyDgEfx6pgE0JcwA43tXN3";
        $("#animals").empty();
        let limit = 10;
        let animal = $(this).text();
        let queryURL = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${animal}&limit=${limit}&offset=0&rating=g&lang=en`
    
        $.ajax({
            url:queryURL,
            method: "GET",
        }).then(function(res){
            res.data.forEach((element, index) => {
                var a = $("<img>");
                a.addClass("animal-image");
                a.attr("src", element.images.original_still.url)
                a.attr("data-static", element.images.original_still.url);
                a.attr("data-dynamic", element.images.original.url);
                a.attr("data-moving", "false");

                var x = $("<div>");
                $(x).append(a);                
                $(x).append(`<h4> Rating: '${element.rating}'</h4>`);
                $("#animals").append(x);
            })
        })
    })
    
    
    // La lógica del click de cada imagen para "intercambiar las urls"
    $("#animals").on("click", ".animal-image", function(){
        console.log($(this).attr('data-moving'));
        if($(this).attr('data-moving') == "false"){
            $(this).attr('data-moving', "true").attr("src", $(this).attr('data-dynamic'));
        } 
        else{
            $(this).attr('data-moving', "false").attr("src", $(this).attr('data-static'));
        }
    })
    
    
    // La lógica del formulario para agregar mas botones a la lista
    $("#add-animal").on("click", function(e) {
        e.preventDefault();
        var a = $("<button>");
        let animal = $("#animal-input").val();
        a.text(animal)
        a.addClass("animal-button")
        a.attr("data-type",animal)
        $("#animal-buttons").append(a);
    })

    
    
    populateButtons(animals);
    });
