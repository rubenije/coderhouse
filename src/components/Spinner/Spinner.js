import { React } from 'react';

const Spinner = () => (
    <div className="text-center">
        <div className="spinner-grow text-danger" role="status">
            <span className="visually-hidden">Cargando...</span>
        </div>
    </div>
);

export default Spinner;