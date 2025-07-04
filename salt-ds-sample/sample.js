import { Button, SaltProvider } from "@salt-ds/core";

import "@salt-ds/theme/index.css";

function App() {
  return (
    <SaltProvider>
      <Button sentiment="accented" appearance="solid">Button</Button>
    </SaltProvider>
  );
}