import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export default function PrintButton() {
    const navigate = useNavigate();

    const handlePrintClick = () => {
        navigate('/hidden-resume');
    };

    return (
        <button
            onClick={handlePrintClick}
            className="print-btn"
            aria-label="View Print Format"
        >
            <FontAwesomeIcon icon={faPrint} />
        </button>
    );
}
