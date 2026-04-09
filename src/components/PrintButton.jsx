import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';

export default function PrintButton() {
    const handlePrint = () => {
        const resumeContainer = document.querySelector('.resume');

        // 1. Expand all collapsed sections
        document.querySelectorAll('.section-header.collapsed').forEach(header => {
            header.click();
        });

        // 2. Set up print cleanup
        const cleanUp = () => {
            resumeContainer?.classList.remove('print-active');
            window.removeEventListener('afterprint', cleanUp);
        };
        window.addEventListener('afterprint', cleanUp);

        // 3. Trigger print after transition completes
        setTimeout(() => {
            window.print();
        }, 400);
    };

    return (
        <button
            onClick={handlePrint}
            className="print-btn"
            aria-label="Print resume"
        >
            <FontAwesomeIcon icon={faPrint} />
        </button>
    );
}