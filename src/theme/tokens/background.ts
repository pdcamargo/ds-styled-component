import { css } from "styled-components";

import { getMediaQueriesCss, getObjectCssVariableName } from "../utils";
import { IThemeCssTokenKey, ResponsiveProps } from "../types";

export type IBackgroundToken = {
  bg?: ResponsiveProps<IThemeCssTokenKey<"colors">>;
  background?: ResponsiveProps<IThemeCssTokenKey<"colors">>;
  bgColor?: ResponsiveProps<IThemeCssTokenKey<"colors">>;
  backgroundColor?: ResponsiveProps<IThemeCssTokenKey<"colors">>;
};

const getBgColor = (
  key: string,
  values?: ResponsiveProps<IThemeCssTokenKey<"colors">>
) => {
  return (
    values &&
    css`
      ${getMediaQueriesCss(key, values, (bg) =>
        getObjectCssVariableName("colors", bg)
      )}
    `
  );
};

export const backgroundToken = css<IBackgroundToken>`
  ${({ bg, background }) => getBgColor("background", bg || background)}

  ${({ bgColor, backgroundColor }) =>
    getBgColor("background-color", bgColor || backgroundColor)}
`;
