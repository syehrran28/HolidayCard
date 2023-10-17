// function to open the card
function open_card() {
  document.getElementById("outside").className = "open-card";
}

// function to close the card
function close_card() {
  document.getElementById("outside").className = ".open-card";
}

function displayDiv(e) {
  var detailsInfoDisplay =
    document.getElementById("details-info").style.display;
  var contactsInfoDisplay =
    document.getElementById("contacts-info").style.display;
  var locationsInfoDisplay =
    document.getElementById("location-info").style.display;

  if (e == "details-title") {
    if (detailsInfoDisplay == "block") {
      document.getElementById("details-info").style.display = "none";
    } else {
      document.getElementById("details-info").style.display = "block";
    }
  }

  if (e == "contacts-title") {
    if (contactsInfoDisplay == "block") {
      document.getElementById("contacts-info").style.display = "none";
    } else {
      document.getElementById("contacts-info").style.display = "block";
    }
  }

  if (e == "location-title") {
    if (locationsInfoDisplay == "block") {
      document.getElementById("location-info").style.display = "none";
    } else {
      document.getElementById("location-info").style.display = "block";
    }
  }
}

// function to display thank you message after submitting the form
function displayThanks() {
  var nextStep = document.querySelector("#rsvp-submit");
  nextStep.addEventListener("click", function (e) {
    // validating user input
    if (
      document.getElementById("rsvp-name").value.length > 0 &&
      document.getElementById("rsvp-phone").value.length > 0 &&
      document.getElementById("rsvp-guests").value.length > 0
    ) {
      e.preventDefault();
      document.getElementById("rsvp-form").style.display = "none";
      document.getElementById("rsvp-thanks").style.display = "block";
    }
  });
}
