$(document).ready(function() {
    $.get("about.html", function(data){
        $("#aboutme").html(data)
    })
    $.get("experience.html", function(data){
        $("#experience").html(data)
    })
    $.get("education.html", function(data){
        $("#education").html(data)
    })
    $.get("skills.html", function(data){
        $("#skills").html(data)
    })
    $.get("nav.html", function(data){
        $("#navigation").html(data)
    })
    $.get("more.html", function(data){
        $("#more").html(data)
    })
    $.get("footer.html", function(data){
        $("#footer").html(data)
    })
})