import React from 'react';

const Logout = ({ onLogout }) => {
    return (
        <button className="bg-red-600 mx-5 text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer" onClick={onLogout}>
            Logout
        </button>
    );
};

export default Logout;
