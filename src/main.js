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

    let promise = newSearch.searchSymptoms();

    promise.then(function(response) {
      body = JSON.parse(response);
      $('#first-name').text(`The humidity in ${city} is ${body.main.humidity}%`);
      $('#last-name').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
      $('#address')
      $('#phone-number')
      $('#website')
      $('#currently-accpeting')
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
      });

  });
  $('#doc-button').click(function(){
    event.preventDefault();
    let doctorFirstName = $('#doctor-first-name-input').val();
    let doctorLastName = $('#doctor-last-name-input').val();
    let newDocSearch = new UserSearch("N/A", doctorFirstName, doctorLastName);

    let promise = newDocSearch.searchDoctors();

    console.log(newDocSearch);
  });
});
