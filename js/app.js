//CREATED MAIN FUNCTION
function getFacts (){
    fact = document.getElementById('catFact').value;
    axios.request({
        method : "GET",
        url : "https://catfact.ninja/fact?max_length=140"
    }).then(catFactFound).catch(catFactFailure);
}
//SUCCESS FUNCTION
function catFactFound(response){
    console.log(response);
    let fact = response.data.fact; //PULLED A FACT FROM THE ARRAY IN THE CAT FACT API
    console.log(fact);
    document.getElementById('catFact').innerText = fact; //MADE THE H1 ELEMENT DISPLAY THE FACT
}
//FAILURE FUNCTION
function catFactFailure(error){
    console.log(error);
}
//ADDED AN EVENT TO DISPLAY A FACT WHEN THE BUTTON IS CLICKED
document.getElementById('getCatFact').addEventListener('click', getFacts);