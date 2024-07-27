
const select = document.createElement('select');
const URL = 'https://api.frankfurter.app/latest';

const showError = () => {
  const errorMessage = document.createElement('p');
  errorMessage.textContent = 'There is some error, try again later.';
  document.body.appendChild(errorMessage); // show error to user
}

fetch(URL)
  .then(response => {
    if (!response.ok) { // stsatus is other than 2xx
      return Promise.reject(); // go to block "catch"
    }
    return response.json();
  })
  .then(data => {
     if (!data.rates) { // we should check if we have correct data from external API
      showError();
     }

     const currencies = Object.keys(datda.rates); 
     currencies.forEach(currency => {
       const option = document.createElement('option');
       option.text = currency; // text user can see on list
       option.value = currency; // value we should to send to back-end﻿
       select.appendChild(option);﻿
     });

     document.body.appendChild(select);
  })
  .catch(() => {
    showError();
  })