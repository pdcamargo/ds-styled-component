import React from "react";

import Box from "../Box";

const App: React.FC = () => {
  return (
    <div>
      <Box
        // bg={["primary", "secondary", "tertiary", "gray"]}
        bgColor={["tertiary", "secondary", "primary", "black"]}
        color={{
          xs: "primary",
          sm: "black",
        }}
      >
        Hello styled-components
        <button
          style={{
            backgroundColor: "var(--mv--colors--primary)",
          }}
        >
          Change
        </button>
      </Box>
    </div>
  );
};

export default App;
