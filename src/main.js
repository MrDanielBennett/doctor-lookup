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
})
$('#doc-button').click(function(){
  event.preventDefault();
  let doctor = $('#doctor-input').val();
  let newDocSearch = new UserSearch("N/A", doctor);
  console.log(newDocSearch);
})
});
