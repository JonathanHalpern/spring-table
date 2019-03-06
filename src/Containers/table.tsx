import React, { FC } from "react";
import TableRow from "./tableRow";
import { Headers } from "../Components";

type Props = {
  data: ReadonlyArray<Array<string>>;
  sortTitle: string;
};

//this function should have a unit test
const sortCreator = (i: number) => (
  a: ReadonlyArray<string>,
  b: ReadonlyArray<string>
) => {
  if (Number(a[i]).toString() !== a[i] && Number(b[i]).toString() === b[i]) {
    return Number(a[i]) - Number(b[i]);
  }
  return a[i] > b[i] ? 1 : -1;
};

const Table: FC<Props> = ({ data, sortTitle }) => {
  const [headers, ...tableBodyData] = data;
  let sortIndex = headers.indexOf(sortTitle);
  if (sortIndex === -1) sortIndex = 0;
  const sortedTableBodyData = tableBodyData
    .slice()
    .sort(sortCreator(sortIndex));
  const totalElementsLength = sortedTableBodyData.length;

  return (
    <table>
      <Headers headers={headers} totalElementsLength={totalElementsLength} />
      {sortedTableBodyData.map((rowData, index) => (
        <TableRow
          rowData={rowData}
          index={index}
          key={rowData.join("")}
          totalElementsLength={totalElementsLength}
        />
      ))}
    </table>
  );
};
export default Table;
