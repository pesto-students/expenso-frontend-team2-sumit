import Checkbox from "./checkbox";
import TableHeaderItem from "./table-header-item";

function TableHeader({ children }) {
  return (
    <thead>
      <tr className="w-full h-16 border-gray-300  border-b py-8">
        {children}
      </tr>
    </thead>
  );
}

export default TableHeader;
