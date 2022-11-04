import ApproveIcon from "assets/icons/approve.icon";
import DocIcon from "assets/icons/doc.icon";
import RejectIcon from "assets/icons/reject.icon";
import RowItem from "./row-item";
import Checkbox from "./checkbox";

function Row({ children }) {
  return <tr className="h-24 border-gray-300 border-b hover:b">{children}</tr>;
}

export default Row;
