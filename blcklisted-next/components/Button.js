// components/Button.js
export default function Button({ label, onClick }) {
    return (
      <button
        onClick={onClick}
        className="inline-block text-sm my-4 px-8 py-3 bg-custom-orange text-white rounded bg-black text-white p-4"
      >
        {label}
      </button>
    );
  }
  