import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../App';

export default function PrintButton() {
    const navigate = useNavigate();
    const { language, translations } = useContext(LanguageContext);

    const handlePrintClick = () => {
        navigate('/hidden-resume');
    };

    return (
        <button
            onClick={handlePrintClick}
            className="print-btn"
            aria-label={translations[language].ui.printFormat}
        >
            <FontAwesomeIcon icon={faPrint} />
        </button>
    );
}
