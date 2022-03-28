import {
  Navbar,
  Footer,
  About,
  FaqLanding,
  Register,
  Error,
  Landing,
  Blog,
  Places,
  FaqAll,
  SingleFaqPostDetails,
  ContactForm,
} from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/globalStyles";

import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <GlobalStyles /> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FaqLanding/>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/register" element={<Register />} />
          <Route path="/places" element={<Places />} />

          <Route path="/contact" element={<ContactForm />} />
          <Route path="/faq-all/:id/*" element={<SingleFaqPostDetails />} />
          <Route path="/faq-all" element={<FaqAll />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
