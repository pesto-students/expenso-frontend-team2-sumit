import * as React from "react";
import TableBody from "../common/table/body";
import Header from "../common/table/header";
import Table from "../common/table/table";
import TableHeader from "../common/table/table-header";
import Row from "../common/table/row";
import RowItem from "../common/table/row-item";
import Checkbox from "../common/table/checkbox";
import DocIcon from "assets/icons/doc.icon";
import ApproveIcon from "assets/icons/approve.icon";
import RejectIcon from "assets/icons/reject.icon";
import TableHeaderItem from "../common/table/table-header-item";

function Approval() {
  const columns = [
    "Requester",
    "Invoice Number",
    "Title",
    "Amount",
    "Date",
    "Document",
    "",
  ];

  return (
    <div className="mx-auto container bg-white  shadow rounded">
      <Header title="Requests For Approval" />
      <Table>
        <TableHeader>
          <TableHeaderItem className="pl-8">
            <Checkbox />
          </TableHeaderItem>
          {columns.map((column) => (
            <TableHeaderItem key={column}>{column}</TableHeaderItem>
          ))}
        </TableHeader>
        <TableBody>
          {/* Row will be obtained by mapping from data received from API */}
          <Row>
            <RowItem className="pl-8 pr-6 text-left">
              <Checkbox />
            </RowItem>
            <RowItem>Carrie Anthony</RowItem>
            <RowItem>#MC10023</RowItem>
            <RowItem>Toyota Motors</RowItem>
            <RowItem>₹2,500</RowItem>
            <RowItem>02.03.20</RowItem>
            <RowItem>
              <DocIcon />
            </RowItem>
            <RowItem className="hover">
              <div className="flex justify-between">
                <ApproveIcon />
                <RejectIcon />
              </div>
            </RowItem>
          </Row>
        </TableBody>
      </Table>
    </div>
  );
}

export default Approval;
