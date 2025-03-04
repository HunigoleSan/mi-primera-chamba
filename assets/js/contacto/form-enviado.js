$(document).ready(function() {
    $('#contact-form').on('submit', function(event) {
        event.preventDefault();  

        var form = $(this);

        $.ajax({
            url: form.attr('action'),  
            method: form.attr('method'),  
            data: form.serialize(),  
            success: function(response) {
                
                alert('Formulario enviado');
            },
            error: function() {
                
                alert('Formulario enviado');
            },
            complete: function() {
                
                    location.reload();  
            }
        });
    });
});
