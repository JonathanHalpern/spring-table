import React, { FC } from "react";
import { Row } from "../Components";
import { useSpring, animated } from "react-spring";

type Props = {
  index: number;
  rowData: ReadonlyArray<string>;
  totalElementsLength: number;
};

const TableRow: FC<Props> = ({ index, rowData, totalElementsLength }) => {
  const { transform } = useSpring({
    transform: `translateY(${(index + 1) * 44}px)`
  });
  return (
    <animated.tr
      style={{
        position: "absolute",
        transform,
        background: "white",
        height: 41,
        display: "flex",
        alignItems: "center",
        zIndex: totalElementsLength - index,
        borderTop: "1px solid #eee"
      }}
    >
      <Row rowData={rowData} />
    </animated.tr>
  );
};

export default TableRow;
