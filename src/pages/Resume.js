import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Content from '../components/Content';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const Resume = () => {
    const printDocument = () => {
        const input = document.getElementById('divToPrint');
        html2canvas(input).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'JPEG', 0, 0);
            // pdf.output('dataurlnewwindow');
            pdf.save('download.pdf');
        });
    };

    return (
        <>
            <div className="mb5">
                <button onClick={printDocument}>Print</button>
            </div>
            <div
                id="divToPrint"
                className="mt4"
                style={{
                    backgroundColor: '#f5f5f5',
                    width: '210mm',
                    minHeight: '297mm',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}
            >
                <div>Note: Here the dimensions of div are same as A4</div>
                <div className="wrapper">
                    <Sidebar />
                    <Content />
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Resume;
