import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";

import { Header } from "../components";

const Editor = () => {
  return (
    <div className="mx-2 mt-20 md:m-10 p-2 md:p-5 bg-white rounded-3xl">
      <Header category="App" title="Editor" />
      <RichTextEditorComponent>
        <Inject services={[HtmlEditor, Image, Link, QuickToolbar, Toolbar]} />
      </RichTextEditorComponent>
      <div className="mt-20 text-center">
      © 2023 All rights reserved by <a href="https://github.com/monashazly/Instantore-dashboard">Mona shazly</a>
      </div>
    </div>
  );
};

export default Editor;
