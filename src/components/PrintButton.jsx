import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';

export default function PrintButton() {
    const handlePrint = () => {
        // No need to expand sections — print.css forces all content visible via @media print.
        // The browser takes a snapshot for the print dialog, so collapsed sections
        // appear fully expanded in the printout without any DOM manipulation.
        window.print();
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
