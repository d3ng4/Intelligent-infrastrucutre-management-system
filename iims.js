// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Fetch infrastructure data from the backend API
    fetch('/api/infrastructure')
        .then(response => response.json())
        .then(data => displayInfrastructure(data))
        .catch(error => console.log(error));

    // Function to display infrastructure in the dropdown
    function displayInfrastructure(infrastructure) {
        const infrastructureSelect = document.getElementById('infrastructure');
        infrastructure.forEach(item => {
            const option = document.createElement('option');
            option.value = item.id;
            option.textContent = item.name;
            infrastructureSelect.appendChild(option);
        });
    }

    // Handle form submission to inspect infrastructure
    document.getElementById('inspect-infrastructure-form').addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(this);
        const data = {
            infrastructure_id: formData.get('infrastructure'),
            status: formData.get('status'),
            inspection_date: formData.get('inspection-date')
        };

        // Submit data to the backend API for infrastructure inspection
        fetch('/api/inspect_infrastructure', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.message);
                // You can add further actions like showing a success message, updating the UI, etc.
            })
            .catch(error => console.log(error));
    });
});


