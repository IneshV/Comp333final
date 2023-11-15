// Define a function to handle PDF file uploads and display
function handleFileUpload(event) {
    event.preventDefault();
    const fileInput = document.getElementById('pdf-file');
    const pdfDisplay = document.getElementById('pdf-display');

    // Check if a file is selected
    if (fileInput.files.length === 0) {
        alert('Please select a PDF file.');
        return;
    }

    // Get the selected file
    const file = fileInput.files[0];

    // Check if the file is a PDF
    if (!file.name.toLowerCase().endsWith('.pdf')) {
        alert('Please select a valid PDF file.');
        return;
    }

    // Create a new FileReader
    const reader = new FileReader();

    // Define the onload event handler for the FileReader
    reader.onload = function () {
        const pdfBlob = new Blob([reader.result], { type: 'application/pdf' });

        // Create an object URL from the PDF blob
        const pdfUrl = URL.createObjectURL(pdfBlob);

        // Display the PDF using an iframe
        const iframe = document.createElement('iframe');
        iframe.src = pdfUrl;
        iframe.width = '100%';
        iframe.height = '500px';

        // Clear previous PDF displays
        pdfDisplay.innerHTML = '';

        // Append the iframe to the PDF display area
        pdfDisplay.appendChild(iframe);
    };

    // Read the selected file as a binary blob
    reader.readAsArrayBuffer(file);
}

// Attach the handleFileUpload function to the form's submit event
document.getElementById('upload-form').addEventListener('submit', handleFileUpload);
