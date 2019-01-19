import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {UserSearch} from './search';
import './styles.css';
$(document).ready(function() {
  $('.results').hide();
  $('#symptom-button').click(function(){
    event.preventDefault();
    let symptom = $('#symptom-input').val();
    let newSearch = new UserSearch(symptom);
    let promise = newSearch.searchSymptoms(symptom);

    promise.then(function(response) {
      let body = JSON.parse(response);
      if (body.data.length === 0){
        $('.doctor-info').text("There are no doctors in the Portland area that match the input.");
      } else {
        for(let i = 0; i < 10; i++){
          $('.doctor-info').append(body.data[i].practices[0].name + " " + `<br>` + body.data[i].practices[0].visit_address.street + " " + `<br>` +  body.data[i].practices[0].visit_address.city + ", " +  body.data[i].practices[0].visit_address.state + " " + `<br>` + "Phone Number: " + " " + body.data[i].practices[0].phones[0].number + " " + `<br>` + "Taking new Patients? (t/f): " +
          // removing website because it seems no doctors have them.
          body.data[i].practices[0].accepts_new_patients + `<br>` + `<br>`);
        }
      }
    },
    function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
    $('.results').show();
  });
  $('#doc-button').click(function(){
    event.preventDefault();
    let doctorFirstName = $('#doctor-first-name-input').val();
    let doctorLastName = $('#doctor-last-name-input').val();
    let newDocSearch = new UserSearch("N/A", doctorFirstName, doctorLastName);
    let promise = newDocSearch.searchDoctors(doctorFirstName, doctorLastName);

    promise.then(function(response) {
      let body = JSON.parse(response);
      if (body.data.length === 0){
        $('.doctor-info').text("There are no doctors in the Portland area that match the input.");
      } else {
        for(let i = 0; i < 10; i++){
          $('.doctor-info').append(body.data[i].practices[0].name + " " + `<br>` + body.data[i].practices[0].visit_address.street + " " + `<br>` +  body.data[i].practices[0].visit_address.city + ", " +  body.data[i].practices[0].visit_address.state + " " + `<br>` + "Phone Number: " + " " + body.data[i].practices[0].phones[0].number + " " + `<br>` + "Taking new Patients? (t/f): " +
          // removing website because it seems no doctors have them.
          body.data[i].practices[0].accepts_new_patients + `<br>` + `<br>`);
        }
      }
    },
    function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
    $('.results').show();
  });
});
