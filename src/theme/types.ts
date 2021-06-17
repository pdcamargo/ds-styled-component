import theme from ".";

export type ITheme = typeof theme;

export type IThemeCssTokenKey<
  T extends keyof ITheme = keyof ITheme,
  K = keyof ITheme[T]
> = K;

export type ResponsiveBreakpoints<T> = {
  xs?: T;
  sm?: T;
  md?: T;
  lg?: T;
};

export type ResponsiveProps<T> = T | Array<T> | ResponsiveBreakpoints<T>;
