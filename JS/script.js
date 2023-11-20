
function mudarCorSucesso(componente) {



    componente.style.backgroundColor = "#8aff8a"

}

function mudarCorFalha(componente) {


    componente.style.backgroundColor = "#ff8a8a"


}




document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // var ids = ['Baixa', 'Media', 'Alta', 'Urgente'];
    // ids.forEach(function (id) {

    //     var radioInput = document.getElementById(id);

    //     if (radioInput) {
    //         console.log("ID:", id, "Valor:", radioInput.value);
    //     } else {
    //         console.log("ID não encontrado:", id);
    //     }
    // });

    let raioValidation = false;
    document.getElementsByName("Prioridade").forEach(function (c) {

        if (c.checked) {
            raioValidation = true;
        }

    });


    var nomeInput = document.getElementById('nome');
    var nome = nomeInput.value.trim();
    // var descInput = document.getElementById('desc')
    // var desc = descInput.value.trim();
    // var prioridade = priInput.value.trim();



    if (nome === '') {
        mudarCorFalha(nomeInput);
        $('#myModal').modal('show');
        var closeButton = document.querySelector('#Falha');
        if (closeButton !== null) {
            closeButton.addEventListener('click', function (event) {
                var modal = document.getElementById('myModal');
                if (modal !== null) {
                    $('#myModal').modal('hide');
                }
            });

        }

    } else if (nome) {
        mudarCorSucesso(nomeInput);
    }

    if (!raioValidation) {

        $('#myModal').modal('show');
        var closeButton = document.querySelector('#Falha');
        if (closeButton !== null) {
            closeButton.addEventListener('click', function (event) {
                var modal = document.getElementById('myModal');
                if (modal !== null) {
                    $('#myModal').modal('hide');
                }
            });

        }

    }

    // if (desc === '') {
    //     mudarCorFalha(descInput);
    //     $('#myModal').modal('show');
    //     var closeButton = document.querySelector('.close');
    //     if (closeButton !== null) {
    //         closeButton.addEventListener('click', function (event) {
    //             var modal = document.getElementById('myModal');
    //             if (modal !== null) {
    //                 $('#myModal').modal('hide');
    //             }
    //         });

    //     }
    // } else {
    //     mudarCorSucesso(descInput);
    // }

    // if (nome !== '' && desc !== '') {
    //     nomeInput.classList.remove('empty');
    //     nomeInput.classList.add('filled');
    //     descInput.classList.remove('empty');
    //     descInput.classList.add('filled');
    // } else {
    //     nomeInput.classList.remove('filled');
    //     nomeInput.classList.add('empty');
    //     descInput.classList.remove('filled');
    //     descInput.classList.add('empty');
    //     $('#myModal').modal('show');
    // }

    if (nome != '' && raioValidation) {

        var nome = document.getElementById('nome').value;
        var prioridade = document.querySelector('input[name="Prioridade"]:checked').value;
        var descricao = document.getElementById('desc').value;

        var data = [];
        var checkboxes = document.querySelectorAll('input[name="data"]:checked');
        checkboxes.forEach(function (checkbox) {
            data.push(checkbox.value);
        });


        var resultContainer = document.getElementById('resultContainer');
        resultContainer.innerHTML = `
        <h3>Resultados:</h3>
        <p><strong>Nome da tarefa:</strong> ${nome}</p>
        <p><strong>Prioridade:</strong> ${prioridade}</p>
        `;
        if (descricao === '' || descricao === null) {

            resultContainer.innerHTML += `<p><strong>Descrição:</strong> Essa informação não foi fornecida! </p>`

        } else {
            resultContainer.innerHTML += `<p><strong>Descrição:</strong> ${descricao}</p>`
        }
        if (data.length === 0) {
            console.log('Esta caindo aqui')
            resultContainer.innerHTML += `<p><strong>Horarios:</strong> Essa informação não foi fornecida! </p>`


        } else {
            console.log(data);
            resultContainer.innerHTML += `<p><strong>Horarios:</strong> ${data.join(', ')}</p>`
        }
        $('#myModalSucess').modal('show');



    }
    var closeButton = document.querySelector('#sucesso');
    if (closeButton !== null) {
        closeButton.addEventListener('click', function (event) {
            var modal = document.getElementById('myModalSucess');
            if (modal !== null) {
                $('#myModalSucess').modal('hide');
            }
        });

    }


});