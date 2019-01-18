import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {UserSearch} from './search';

$(document).ready(function() {
  $('#symptom-button').click(function(){
    event.preventDefault();
    let symptom = $('#symptom-input').val();
    let newSearch = new UserSearch(symptom);
    console.log(newSearch);

    let promise = newSearch.searchSymptoms(symptom);

    promise.then(function(response) {
       let body = JSON.parse(response);
      $('#name').text(body.data[0].practices[0].name);
      $('#address-street').text(body.data[0].practices[0].visit_address.street);
      $('#address-city').text(body.data[0].practices[0].visit_address.city);
      $('#address-state').text(body.data[0].practices[0].visit_address.state);
      $('#phone-number').text(body.data[0].practices[0].phones[0].number);
      $('#website').text(body.data[0].practices[0].website);
      $('#currently-accpeting').text(body.data[0].practices[0].accpets_new_patients);
    },
    function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });

  });
  $('#doc-button').click(function(){
    event.preventDefault();
    let doctorFirstName = $('#doctor-first-name-input').val();
    let doctorLastName = $('#doctor-last-name-input').val();
    let newDocSearch = new UserSearch("N/A", doctorFirstName, doctorLastName);

    let promise = newDocSearch.searchDoctors(doctorFirstName, doctorLastName);


    promise.then(function(response) {
       let body = JSON.parse(response);
       $('#name').text(body.data[0].practices[0].name);
       $('#address-street').text(body.data[0].practices[0].visit_address.street);
       $('#phone-number').text(body.data[0].practices[0].phones[0].number);
       $('#website').text(body.data[0].practices[0].website);
       $('#currently-accpeting').text(body.data[0].practices[0].accpets_new_patients);
    },
    function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });

    console.log(newDocSearch);
  });
});
