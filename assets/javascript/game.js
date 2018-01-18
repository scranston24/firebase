var config = {
   apiKey: "AIzaSyDljq5aIbg4zEM8f4vHyYeU-_RF2iW27Yw",
   authDomain: "train-schedule-a443b.firebaseapp.com",
   databaseURL: "https://train-schedule-a443b.firebaseio.com",
   projectId: "train-schedule-a443b",
   storageBucket: "train-schedule-a443b.appspot.com",
   messagingSenderId: "116782673648"
 };

 firebase.initializeApp(config);

 var database = firebase.database();

$("#add-train-btn").on("click", function(event) {
  event.preventDefault();

  var trainName = $("#train-name-input").val().trim();
  var trainDestination = $("#destination-input").val().trim();
  var trainFirst = $("#first-input").val().trim();
  var trainFrequency = $("#frequency-input").val().trim();

  var newTrain = {

    name: trainName,
    destination: trainDestination,
    first: trainFirst,
    frequency: trainFrequency
  };

  database.ref().push(newTrain);

  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.first);
  console.log(newTrain.frequency);

  alert("Train succesfully added");

  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#first-input").val("");
  $("frequency-input").val("");
});

database.ref().on("child_added", function(childSnapshot, prevChildKey) {
  console.log(childSnapshot.val());

  var trainName = childSnapshot.val().name;
  var trainDestination = childSnapshot.val().destination;
  var trainFirst = childSnapshot.val().first;
  var trainFrequency = childSnapshot.val().frequency;

  console.log(trainName);
  console.log(trainDestination);
  console.log(trainFirst);
  console.log(trainFrequency);
});
