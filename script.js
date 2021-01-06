$(document).ready(function() {
  //getItem
  // parse: converts back to object
  var itemsArray = JSON.parse(localStorage.getItem("items")) || [];
  console.log(itemsArray);
  for (var i = 0; i < itemsArray.length; i++) {
    var itemText = itemsArray[i];
    generateList(itemText);
  }
  $("#add-items").on("submit", function(e) {
    e.preventDefault();
    var wishItemEl = $("#wish-item");
    var wishPriceEl = $("#wish-price");
    var wishSizeEl = $("#wish-size");
    var wishColorEl = $("#wish-color");
    var itemText = wishItemEl.val() + " " + wishPriceEl.val()+ " " + wishSizeEl.val()+ " " + wishColorEl.val();
    generateList(itemText);
    itemsArray.push(itemText);

    //setItem
    // converts to string
    localStorage.setItem("items", JSON.stringify(itemsArray));
  });

  function generateList(itemText) {
    var listEl = $("<li>");
    listEl.append(itemText);
    var list = $("#list-items");
    //delete button
    var delItem = $("<button>");
    delItem.text("remove");
    delItem.addClass("btn btn-danger");
    delItem.on("click", function() {
      $(listEl).remove();
    });

    list.append(listEl);
    listEl.append(delItem);
    var hrEl = $("<hr>");
    listEl.after(hrEl);
  }
});
