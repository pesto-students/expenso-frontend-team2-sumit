function Checkbox() {
  return (
    <input
      type="checkbox"
      className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 bg-white outline-none"
      onclick="checkAll(this)"
    />
  );
}

export default Checkbox;
