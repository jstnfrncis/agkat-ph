import React from 'react';

const FileInput = ({ id, name, onChange, required, error }) => {
    return (
        <div>
            <input
                type="file"
                id={id}
                name={name}
                onChange={onChange}
                required={required}
                className="border"
            />
            {error && <p className="mt-2 text-red-600 text-sm">{error}</p>}
           
        </div>
    );
};

export default FileInput;
