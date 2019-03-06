import React, { FC } from "react";
import TableRow from "./tableRow";
import { Headers } from "../Components";

type Props = {
  data: ReadonlyArray<Array<string>>;
  sortTitle: string;
};

//should add unit test
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
  const [headers, ...tableData] = data;
  let sortIndex = headers.indexOf(sortTitle);
  if (sortIndex === -1) sortIndex = 0;
  const sortedData = tableData.slice().sort(sortCreator(sortIndex));
  const totalElementsLength = sortedData.length;

  return (
    <table>
      <Headers headers={headers} totalElementsLength={totalElementsLength} />
      {sortedData.map((rowData, i) => (
        <TableRow
          rowData={rowData}
          index={i}
          key={rowData.join("")}
          totalElementsLength={totalElementsLength}
        />
      ))}
    </table>
  );
};
export default Table;
