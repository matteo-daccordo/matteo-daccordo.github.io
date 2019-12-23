$(document).ready(function() {
    $.get("about.html", function(data){
        console.log(data)
        $("#aboutme").html(data)
    })
    $.get("experience.html", function(data){
        console.log(data)
        $("#experience").html(data)
    })
    $.get("education.html", function(data){
        console.log(data)
        $("#education").html(data)
    })
    $.get("skills.html", function(data){
        console.log(data)
        $("#skills").html(data)
    })
    $.get("nav.html", function(data){
        $("#navigation").html(data)
    })
    $.get("footer.html", function(data){
        $("#footer").html(data)
    })
})