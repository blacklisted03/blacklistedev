// components/Button.js
export default function Button({ label, onClick }) {
    return (
      <button
        onClick={onClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 bg-black text-white p-4"
      >
        {label}
      </button>
    );
  }
  