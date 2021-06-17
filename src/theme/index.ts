const breakpoints = ["36rem", "48rem", "62rem", "75rem"];

const mediaQueries = {
  sm: `@media screen and (min-width: ${breakpoints[0]})`,
  md: `@media screen and (min-width: ${breakpoints[1]})`,
  lg: `@media screen and (min-width: ${breakpoints[2]})`,
  xl: `@media screen and (min-width: ${breakpoints[3]})`,
};

const radii = {
  zero: "0",
  sm: "0.188rem",
  md: "0.344rem",
  lg: "0.5rem",
  full: "99999px",
};

const colors = {
  primary: "red",
  secondary: "blue",
  tertiary: "yellow",
  white: "white",
  black: "black",
  gray: "#cecece",
};

const theme = {
  radii,
  mediaQueries,
  colors,
};

export default theme;
