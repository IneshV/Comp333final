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

// Function to get selected text within the PDF content
function getSelectedText() {
    const iframe = document.querySelector("#pdf-display iframe");
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

    const selectedText = iframeDocument.getSelection().toString();

    return selectedText;
}

// Function to get text from the currently displayed PDF page
function getTextFromPDF() {
    const iframe = document.querySelector("#pdf-display iframe");
    const pdfWindow = iframe.contentWindow;

    pdfWindow.getSelection().removeAllRanges();
    pdfWindow.PDFViewerApplication.pdfViewer.getSelectionText().then(selectedText => {
        if (!selectedText.trim()) {
            alert("No text was selected within the PDF.");
            return; // Exit the function if no text is selected
        }

        updateSelectedTextInSidebar(selectedText);
    }).catch(err => {
        console.error('Error fetching selected text:', err);
        alert('An error occurred while retrieving selected text.');
    });
}

// Event listener for "Select Text" button
document.getElementById("select-text").addEventListener("click", () => {
    getTextFromPDF();
});

// ... (previous code)

// Attach the handleFileUpload function to the form's submit event
document.getElementById('upload-form').addEventListener('submit', handleFileUpload);
