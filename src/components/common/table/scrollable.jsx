function Scrollable({ children }) {
  return (
    <div className="w-full overflow-x-scroll xl:overflow-x-hidden">
      {children}
    </div>
  );
}

export default Scrollable;