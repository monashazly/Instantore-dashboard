import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";

import { Header } from "../components"

const changeColor = (args)=>{
document.getElementById('preview').style.backgroundColor = args.currentValue.hex
}

const ColorPicker = () => {
  return (
    <div className="mx-2 mt-20 md:m-10 p-2 md:p-5 bg-white rounded-3xl">
      <Header category="App" title="Color Picker" />
      <div className="text-center">
        <div id="preview"/>
        <div className="flex justify-center items-center gap-12 flex-wrap">
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Palette</p>
            <ColorPickerComponent 
            id="inline-palette"
            mode="Palette"
            modeSwitcher={false}
            inline
            showButtons={false}
            change={changeColor}/>
          </div>
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Picker</p>
            <ColorPickerComponent 
            id="inline-palette"
            mode="Picker"
            inline
            modeSwitcher={false}
            showButtons={false}
            change={changeColor}/>
          </div>
        </div>
      </div>
      <div className="mt-20 text-center">
      © 2023 All rights reserved by <a href="https://github.com/monashazly/Instantore-dashboard">Mona shazly</a>
      </div>
    </div>
  )
}

export default ColorPicker
