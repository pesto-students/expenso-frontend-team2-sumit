import Scrollable from "./scrollable";

function Table({ children }) {
  return (
    <Scrollable>
      <table className="min-w-full bg-white w-full overflow-x-scroll xl:overflow-x-hidden">
        {children}
      </table>
    </Scrollable>
  );
}

export default Table;
