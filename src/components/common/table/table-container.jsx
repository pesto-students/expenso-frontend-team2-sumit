import Body from "./body";
import Header from "./header";
import Table from "./table";

function TableContainer() {
  return (
    <div className="py-20">
      <div className="mx-auto container bg-white  shadow rounded">
        <Header />
        <Table />
      </div>
    </div>
  );
}
export default TableContainer;
