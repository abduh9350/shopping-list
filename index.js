function shopping() {

    $(function() {
        $("#js-shopping-list-form").submit( event => {
             event.preventDefault();
            $('.shopping-list').append(`<li>
            <span class="shopping-item">${ $('input').val()}</span>
            <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                <span class="button-label">delete</span>
                </button>
            </div>
            </li>`)
        });
        
    

       /* $(".shopping-item-delete").click( event => {
            $(event.currentTarget).parent().parent().remove();
        });

        $(".shopping-item-toggle").click( event => {
            if($(event.currentTarget).find(".button-label").text()==="check") {
                $(event.currentTarget).parent().parent().find(".shopping-item").css("text-decoration", "line-through");
                $(event.currentTarget).find(".button-label").text("uncheck");
                //$(event.currentTarget).attr("class", "new-toggle");
                // $(event.currentTarget).find(".button-label").parent().css("new-toggle");
            }
            else {
                $(event.currentTarget).parent().parent().find(".shopping-item").css("text-decoration", "none");
                $(event.currentTarget).find(".button-label").text("check");
            }
        }) */

        /* $(".new-toggle").click( event => {
            $(event.currentTarget).parent().parent().find(".shopping-item").css("text-decoration", "none");
            $(event.currentTarget).find(".button-label").text("check");
            $(event.currentTarget).attr("class", "shopping-item-toggle");
            // $(event.currentTarget).find(".button-label").parent().addCss("shopping-item-toggle");
            })*/


    
    });
}

$(shopping);

$('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    $(this).closest('li').remove();
  });

  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    if($(event.currentTarget).find(".button-label").text()==="check") {
        $(event.currentTarget).parent().parent().find(".shopping-item").css("text-decoration", "line-through");
        $(event.currentTarget).find(".button-label").text("uncheck");
        //$(event.currentTarget).attr("class", "new-toggle");
        // $(event.currentTarget).find(".button-label").parent().css("new-toggle");
    }
    else {
        $(event.currentTarget).parent().parent().find(".shopping-item").css("text-decoration", "none");
        $(event.currentTarget).find(".button-label").text("check");
    }
})



