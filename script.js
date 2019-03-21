function handleSubmit(){
  $('form').submit(event => {
    event.preventDefault();
    const input = document.getElementById('searchItem').value;
    getRepos(input);
  })
}

function getRepos(input){
  fetch(`https://api.github.com/users/${input}/repos`)
  .then(response => response.json())
  .then(responseJson => displayResults(responseJson, input))
  .catch(error => alert('Something went wrong. Try again later.'))
  }

function displayResults(responseJson,input){
  
 $('.results1').replaceWith(`<h1 class="results1">Showing Results For: ${input}</h1>`);
 $('.results2').replaceWith(`<div class="results2"></div>`);
  for (let i=0; i < responseJson.length; i++){
    $('.results2').append(`<a href="${responseJson[i].html_url}"><h2>${responseJson[i].name}</h2></a>`);}
 console.log(responseJson); 
}

$(handleSubmit());