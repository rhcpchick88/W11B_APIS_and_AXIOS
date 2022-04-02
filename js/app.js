function getFacts (){
    fact = document.getElementById('catFact').value;
    axios.request({
        method : "GET",
        url : "https://catfact.ninja/fact?max_length=140"
    }).then(catFactFound).catch(catFactFailure);

}

function catFactFound(response){
    console.log(response);
    let fact = response.data.fact;
    console.log(fact);
    document.getElementById('catFact').innerText = fact;
}

function catFactFailure(error){
    console.log(error);
}

document.getElementById('getCatFact').addEventListener('click', getFacts);