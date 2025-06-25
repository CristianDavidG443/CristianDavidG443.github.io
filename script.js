const { use } = require("react");

function dowloadPDF() {
    const element = document.querySelector('.container-lg');
   cons opt ={
    margins: [0, 0, 0, 0],
    filename: 'Hoja de vida Cristian David Gonzalez.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2,useCORS: true,scrollY: 0 },
jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
pagebreack:{mode: ['css', 'legacy'],}

};
html2pdf()
    .from(element)
    .set(opt)
    .save();
}