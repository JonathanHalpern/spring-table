import React, { FC } from "react";
import { Link } from "react-router-dom";

type Props = {
  headers: ReadonlyArray<string>;
  totalElementsLength: number;
};

const Headers: FC<Props> = ({ headers, totalElementsLength }) => (
  <tr
    style={{
      position: "fixed",
      zIndex: totalElementsLength + 1,
      background: "white",
      top: 0
    }}
  >
    {headers.map((header: string) => (
      <th key={header} style={{ minWidth: 108 }}>
        <Link
          to={header}
          style={{
            color: "initial"
          }}
        >
          {header}
        </Link>
      </th>
    ))}
  </tr>
);

export default Headers;
