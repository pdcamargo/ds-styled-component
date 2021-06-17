import styled, {
  FlattenInterpolation,
  ThemedStyledProps,
} from "styled-components";
import theme from ".";
import { ITheme, ResponsiveBreakpoints, ResponsiveProps } from "./types";

export const compose =
  <T extends {}>(as: keyof JSX.IntrinsicElements | React.ComponentType<any>) =>
  (...tokens: FlattenInterpolation<ThemedStyledProps<any, any>>[]) =>
    styled(as || "div")<T>`
      ${tokens}
    `;

const cssVarNamePrefix = "mv";
const cssVarNameSeparator = "--";

export const createObjectCssVariables = <
  T extends keyof ITheme = keyof ITheme,
  K extends ITheme[T] = ITheme[T]
>(
  tokenName: T,
  obj: K
) => {
  const keys = Object.keys(obj);

  return keys.reduce((prev, current) => {
    const value = obj[current as keyof K];

    return `${prev}${
      prev !== "" ? "\n" : ""
    }--${cssVarNamePrefix}${cssVarNameSeparator}${tokenName}${cssVarNameSeparator}${current}: ${value};`;
  }, "");
};

export const getObjectCssVariableName = <
  T extends keyof ITheme = keyof ITheme,
  K extends keyof ITheme[T] = keyof ITheme[T]
>(
  tokenName: T,
  objValue?: K
) => {
  return `var(--${cssVarNamePrefix}${cssVarNameSeparator}${tokenName}${cssVarNameSeparator}${objValue})`;
};

const getMediaQueryByArray = <T>(
  key: string,
  values: Array<any>,
  parser: (currentValue: T) => string
) => {
  const mediaQueryKeys = Object.keys(theme.mediaQueries);

  return mediaQueryKeys.reduce((prev, current, idx: number) => {
    if (!values[idx]) {
      return prev;
    }

    if (idx === 0) {
      return `${key}: ${parser(values[0])};`;
    }

    const currentBreakpoint = current as keyof ITheme["mediaQueries"];

    return `
      ${prev}
      ${theme.mediaQueries[currentBreakpoint]} {
        ${key}: ${parser(values[idx])};
      }
      \n
    `;
  }, "");
};

const getMediaQueryByObject = <T>(
  key: string,
  values: ResponsiveBreakpoints<T>,
  parser: (currentValue: T) => string
) => {
  const mediaQueryKeys = Object.keys(theme.mediaQueries);

  return Object.keys(values).reduce((prev, current) => {
    const currentBreakpoint = current as keyof ResponsiveBreakpoints<T>;

    if (current === "xs") {
      return `${key}: ${parser(values[currentBreakpoint] as T)};`;
    }

    return `
      ${prev}
      ${
        theme.mediaQueries[
          mediaQueryKeys.find(
            (key) => key === current
          ) as keyof ITheme["mediaQueries"]
        ]
      } {
        ${key}: ${parser(values[currentBreakpoint] as T)};
      }
      \n
    `;
  }, "");
};

export const getMediaQueriesCss = <T>(
  key: string,
  values: ResponsiveProps<T>,
  parser?: (currentValue: T) => string
) => {
  const defaultParser = (currentValue: T) => `${currentValue}`;
  const parserFn = parser || defaultParser;

  if (Array.isArray(values)) {
    return getMediaQueryByArray(key, values, parserFn);
  } else if (typeof values === "object") {
    return getMediaQueryByObject(key, values, parserFn);
  }

  return `${key}: ${parserFn(values as any)};`;
};
