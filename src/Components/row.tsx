import React, { FC } from "react";

type Props = {
  rowData: ReadonlyArray<string>;
};

const Row: FC<Props> = ({ rowData }) => (
  <>
    {rowData.map((entry, i) => (
      /*
        currently the th will not change its position in the array, so it is acceptable to use i as a key
        if a unique key is needed, then use the columns header
      */
      <td style={{ width: 110, textAlign: "center" }} key={i}>
        {entry}
      </td>
    ))}
  </>
);

export default Row;
