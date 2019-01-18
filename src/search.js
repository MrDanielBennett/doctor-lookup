export class UserSearch {
  constructor(symptom, doctorFirstName, doctorLastName) {
    this.symptom = symptom;
    this.doctorFirstName = doctorFirstName;
    this.doctorLastName = doctorLastName;
  }

  searchSymptoms(symptom){
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&location=or-portland&sort=best-match-asc&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }

  searchDoctors(doctorFirstName, doctorLastName){
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?qfirst_name=${doctorFirstName}&last_name=${doctorLastName}&location=or-portland&sort=best-match-asc&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}
