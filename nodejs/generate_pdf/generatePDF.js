// For browser use
function generatePDF(fileName = "test") {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text("Hello there", 10, 10)

    const file = fileName + ".pdf"
    doc.save(file)
}

// For Node.js use (uncomment if needed)
// import { jsPDF } from "jspdf";
// export function generatePDF(fileName) {
//     const doc = new jsPDF();
//     doc.text("Hello there", 10, 10)
//     const file = fileName + ".pdf"
//     doc.save(file)
// }
// generatePDF("test");