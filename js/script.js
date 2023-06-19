
function pesquisarNome() {
    const nomeInput = document.querySelector("#api-input").value;
      
    axios.get(`https://api.agify.io/?name=${nomeInput}`)
      .then(function (response) {
       const resultado = response.data;
        console.log("idade: " + resultado['age']);
        console.log( "nome: " + resultado['name' ]);
        if(resultado['age'] === null){
            console.log("TA entrando no if");
            alert("Nome não encontrado");
            
          }
      })
      .catch(function (error) {
        console.error(error);
      });


     
  }
  



















const apiBtn = document.querySelector("#api-btn");

apiBtn.addEventListener("click", function (clique) {

    clique.preventDefault();
    pesquisarNome();

});