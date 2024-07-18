$(document).ready(function() {
    // Inicializar los datepickers
    $(".datepicker").datepicker({
        dateFormat: 'dd/mm/yy', // Formato de fecha
        onSelect: function(selectedDate, instance) {
            var startDate = new Date(selectedDate);
            var endDate = new Date(startDate);
            endDate.setFullYear(endDate.getFullYear() + 1); // Sumar un año
            var formattedEndDate = $.datepicker.formatDate('dd/mm/yy', endDate); // Formatear la fecha de fin de vigencia

            // Establecer automáticamente un año después en el campo de fin de vigencia
            $("#fin_vigencia").datepicker("setDate", formattedEndDate);
        }
    });

    // Configurar el datepicker para el campo de fin de vigencia
    $("#fin_vigencia").datepicker({
        dateFormat: 'dd/mm/yy' // Formato de fecha
    });

    // Manejar el envío del formulario
    $('#formulario-soat').on('submit', function(event) {
        event.preventDefault();

        // Obtener los datos del formulario
        var formData = $(this).serializeArray();
        var jsonData = {};

        // Convertir los datos a un objeto JSON
        $.each(formData, function() {
            jsonData[this.name] = this.value;
        });

        // Ejemplo de cómo enviar los datos a la API usando fetch (puedes ajustar según la API específica)
        $.ajax({
            url: 'URL_DE_LA_API_DE_SEGUROS',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(jsonData),
            success: function(response) {
                // Manejar la respuesta de la API aquí (por ejemplo, mostrar un mensaje de éxito)
                alert('Venta de SOAT exitosa. ¡Gracias!');
                // Puedes redirigir a otra página o realizar acciones adicionales según la respuesta
            },
            error: function(xhr, status, error) {
                console.error('Error:', error);
                // Manejar errores de la API (por ejemplo, mostrar un mensaje de error al usuario)
                alert('Ocurrió un error al procesar la venta de SOAT. Por favor, inténtalo de nuevo más tarde.');
            }
        });
    });
});




