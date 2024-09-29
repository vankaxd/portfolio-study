import { ThemeProvider } from "styled-components";
import { theme } from "./utils/Theme";
import { MainBody, Container } from "./styles/Global.styled.js";
import Showcase from "./components/Showcase";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainBody>
        <Container>
          <Showcase />
        </Container>
      </MainBody>
    </ThemeProvider>
  );
}

export default App;
