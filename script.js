$(document).ready(function() {
  //getItem
  // parse: converts back to object
  var itemsArray = JSON.parse(localStorage.getItem("items")) || [];

  $("#add-items").on("submit", function(e) {
    e.preventDefault();
    // console.log("form clicked");
    var itemEl = $("#item");
    var itemText = itemEl.val();
    var listEl = $("<li>");
    listEl.append(itemText);
    var list = $("#list-items");
    var delItem = $("<button>");
    delItem.text("Delete");
    delItem.addClass("btn btn-danger");
    delItem.on("click", function() {
      $(listEl).remove();
    });
    list.append(listEl);
    listEl.append(delItem);

    itemsArray.push(itemText);

    //setItem
    // converts to string
    localStorage.setItem("items", JSON.stringify(itemsArray));
  });
});
