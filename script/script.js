$(document).ready(function() {
    $(".card.small-card-type img").hover(function() {
            $(".card.small-card-type.btn-efct button.add-to-playlist-button-no").css("display", "block");
        },
        function() {
            $(".card.small-card-type.btn-efct button.add-to-playlist-button-no").css("display", "none");
        });
        $(".svg-inline--fa.fa-play.fa-w-14").click(function(){
            $(this).toggleClass("fa-pause");
        });
});
