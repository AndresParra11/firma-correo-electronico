import { useState } from "react";
import Form from "./components/Form/Form";
import TemplateHTML from "./components/TemplateHTML/TemplateHTML";

const App = () => {
  const [infoHTML, setInfoHTML] = useState({});
  return (
    <>
      {/*  <Form setInfoHTML={setInfoHTML} /> */}
      <TemplateHTML />
    </>
  );
};

export default App;
