/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {
    $("#start").click(function() {
        if ($(".boundary").hasClass("youlose")) {
            $(".boundary").removeClass("youlose");
            $("#status").text("Click the \"S\" to begin.");
        }
        $("#status").mouseover(function() {
            $(".boundary").addClass("youlose");
        });
        $("p").mouseover(function() {
            $(".boundary").addClass("youlose");
        });
        $(".boundary").mouseover(function() {
            $(".boundary").addClass("youlose");
        });
    });
   
    
    $("#end").click(function() {
        if ($(".boundary").hasClass("youlose")) {
            //alert("Sorry, you lost. :(");
            $("#status").text("Sorry, you lost. :(");
        } else {
            //alert("You win! :)");
            $("#status").text("You win! :)");
        } 
    });
       
});