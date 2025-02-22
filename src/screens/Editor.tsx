import React from "react"
import Toolbar from "../components/Toolbar"
import CodeEditor from "../components/CodeEditor"
import BottomPanel from "../components/BottomPanel"
import PinsDigitalBar from "../components/PinsDigitalBar"
import PinsAnalogBar from "../components/PinsAnalogBar"
import SerialMonitor from "../components/SerialMonitor"

const Editor = () => {
  return (
    <div className="arduino-simulator">
      <Toolbar />
      <CodeEditor />
      <BottomPanel>
        <PinsDigitalBar />
        <PinsAnalogBar />
        <SerialMonitor />
      </BottomPanel>
    </div>
  )
}

export default Editor
