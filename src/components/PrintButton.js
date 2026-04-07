import React from 'react';
import { Button } from 'react-bootstrap';

export default function PrintButton() {
    const handlePrint = () => {
        const resumeContainer = document.querySelector('.resume');
        const topSideontainer = document.querySelector('.topSide');
        const footerDivcontainer = document.querySelector('.footer-div');
        const bottomSideontainer = document.querySelector('.bottomSide');

        // 1. Expand all sections
        document.querySelectorAll('.section-header.collapsed').forEach(header => {
            header.click();
        });

        // 2. Apply print styles
        resumeContainer.classList.add('print-active');
        topSideontainer.classList.add('print-active');
        footerDivcontainer.classList.add('print-active');
        bottomSideontainer.classList.add('print-active');

        // 3. Set up print cleanup
        const cleanUp = () => {
            resumeContainer.classList.remove('print-active');
            topSideontainer.classList.remove('print-active');
            footerDivcontainer.classList.remove('print-active');
            bottomSideontainer.classList.remove('print-active');
            window.removeEventListener('afterprint', cleanUp);
        };
        window.addEventListener('afterprint', cleanUp);

        // 4. Trigger print
        setTimeout(() => {
            window.print();
        }, 400);
    };

    return (
        <Button
            onClick={handlePrint}
            className="print-btn"
            aria-label="Print resume"
        >
            Print CV
        </Button>
    );
}