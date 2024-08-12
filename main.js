$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const novaTask = $('#task-new').val()
        const novaTarefaLista = $(`<li>${novaTask}</li>`)
        $(novaTarefaLista).appendTo('ul')
    })


})
