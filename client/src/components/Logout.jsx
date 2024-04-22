import React from "react";
import toast from "react-hot-toast";

function Logout() {
  const handleLogout = () => {
    try {
      localStorage.removeItem("Users");
      toast.success("Logout successfully");

      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      toast.error("Error: " + error);
      setTimeout(() => {}, 2000);
    }
  };
  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer mx-4"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;