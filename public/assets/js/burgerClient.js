$(function() {
    $(".eatBurger").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
        console.log(id);

        $.ajax({
            method: "PUT",
            url: "/api/burgers/" + id,
            data: {devoured: true}
            
          }).then(function(){
              console.log("changed to devoured");
              location.reload();
          });
    })

  $(".create-form").on("submit", function(event) {
    
    event.preventDefault();
    
    var newBurger = {
      burger_name: $("#burgerName").val().trim(),
      devoured: 0
    };

    $.ajax("/api/burgers", {
      method: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        
        location.reload();
      }
    );
  });


});