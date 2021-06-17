import React from "react";
import {
  colorToken,
  IColorToken,
  backgroundToken,
  IBackgroundToken,
} from "../../theme/tokens";

import { compose } from "../../theme/utils";

export type BoxProps = IBackgroundToken &
  IColorToken &
  React.DOMAttributes<HTMLDivElement>;

const BoxStyle = compose<BoxProps>("div")(backgroundToken, colorToken);

const Box: React.FC<BoxProps> = ({ children, ...props }) => {
  return <BoxStyle {...props}>{children}</BoxStyle>;
};

export default Box;
