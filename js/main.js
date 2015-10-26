/* your code goes here! */

/* Use clever selections and event handlers to assign the described interactivity */

$("#change-content").click(function() {
    var select = $("#selector").val();
    var content = $("#newContent").val();
    $(select).text(content);
});

$("#add-at-end").click(function() {
    var select = $("#selector").val();
    var content = $("#newContent").val();
    $(select).append(content);
});

$("#add-at-start").click(function() {
    var select = $("#selector").val();
    var content = $("#newContent").val();
    $(select).prepend(content);
});
