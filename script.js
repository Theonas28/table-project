$(document).ready(function() {
    // Restrict the 'age' input in numbers only
    $('#age').on('input', function() {
        // Allow only numbers input using a regular expression
        this.value = this.value.replace(/[^0-8]/g, ''); // Replace any non-numeric characters
    });

    // Add a new row when the form is submitted
    $('#tableForm').on('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get input values
        let name = $('#name').val();
        let age = $('#age').val();

        // Add the row to the table if both fields are filled
        if (name && age) {
            $('#dataTable tbody').append(`
                <tr>
                    <td>${name}</td>
                    <td>${age}</td>
                    <td><button class="delete">Delete</button></td>
                </tr>
            `);

            // Clear the input fields
            $('#name').val('');
            $('#age').val('');
        }
    });

    // Delete a row when the delete button is clicked
    $('#dataTable').on('click', '.delete', function() {
        $(this).closest('tr').remove(); // Remove the closest table row (tr)
    });
});
