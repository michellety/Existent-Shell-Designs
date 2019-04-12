// Get references to page elements
var $contactFirst = $("#contact-first");
var $contactLast = $("#contact-last");
var $contactEmail = $("#contact-email");
var $contactMessage = $("#contact-message");
var $cButton = $("#send");


// // The API object contains methods for each kind of request we'll make
var API = {
  saveContact: function(contact) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/contacts",
      data: JSON.stringify(contact)
    });
  },
  getContact: function() {
    return $.ajax({
      url: "api/contacts",
      type: "GET"
    });
  },
  deleteContact: function(id) {
    return $.ajax({
      url: "api/contacts/" + id,
      type: "DELETE"
    });
  }
};

// refreshContacts gets new examples from the db and repopulates the list
var refreshContacts = function() {
  API.getContacts().then(function(data) {
    var $contacts = data.map(function(contact) {
      var $a = $("<a>")
        .text(contact.text)
        .attr("href", "/contact/" + contact.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": contact.id
        })
        .append($a);

    //   var $button = $("<button>")
    //     .addClass("btn btn-danger float-right delete")
    //     .text("ｘ");

    //   $li.append($button);

      return $li;
    });

    // $exampleList.empty();
    // $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var contact = {
    firstName : $contactFirst.val().trim(),
    lastName :  $contactLast.val().trim(), 
    contactEmail : $contactEmail.val().trim(),
    message : $contactMessage.val().trim() 

  };

  if (!(contact.firstName && contact.lastName && contact.contactEmail && contact.message)) {
    alert("You must enter completely fill out the form!");
    return;
  }

  API.saveContact(contact).then(function() {
    refreshContacts();
  });

  //clear contact form 
  $contactFirst.val("");
  $contactLast.val("");
  $contactEmail.val("");
  $contactMessage.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteContact(idToDelete).then(function() {
//     refreshContacts();
//   });
// };

// Add event listeners to the submit and delete buttons
$cButton.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);
