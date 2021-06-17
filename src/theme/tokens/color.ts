import { css } from "styled-components";

import { getMediaQueriesCss, getObjectCssVariableName } from "../utils";
import { IThemeCssTokenKey, ResponsiveProps } from "../types";

export type IColorToken = {
  color?: ResponsiveProps<IThemeCssTokenKey<"colors">>;
};

const getColor = (values?: ResponsiveProps<IThemeCssTokenKey<"colors">>) => {
  return (
    values &&
    `
    ${getMediaQueriesCss("color", values, (bg) =>
      getObjectCssVariableName("colors", bg)
    )}
  `
  );
};

export const colorToken = css<IColorToken>`
  ${({ color }) => getColor(color)}
`;
