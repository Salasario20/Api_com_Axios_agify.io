
function pesquisarNome() {
    const nomeInput = document.querySelector("#api-input").value;

    axios.get(`https://api.agify.io/?name=${nomeInput}`)
        .then(function (response) {
            const resultado = response.data;

            if (resultado['age'] === null) {

                alert("Nome não encontrado");
                location.reload();

            }
            else {
                console.log("idade: " + resultado['age']);
                console.log("nome: " + resultado['name']);
                const nameResultado = resultado['name'];
                const ageResultado = resultado['age'];
                const li1 = document.querySelector(".li-name");
                const li2 = document.querySelector(".li-age");
                
                
                li2.textContent = `Nome: ${nameResultado}`;
                li1.textContent = `Suposta idade: ${ageResultado}`;
                const ulElement = document.querySelector("#ul-api");
                ulElement.appendChild(li2);
                ulElement.appendChild(li1);
            }
        })
        .catch(function (error) {
            alert(error);
            location.reload();
        });



}




















const apiBtn = document.querySelector("#api-btn");

apiBtn.addEventListener("click", function (clique) {

    clique.preventDefault();
    pesquisarNome();

});