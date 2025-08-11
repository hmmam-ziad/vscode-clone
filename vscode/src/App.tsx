
import { useSelector } from "react-redux";
import Preview from "./components/Preview"
import RecursiveComponent from "./components/RecursveComponent"
import ResizablePanel from "./components/ResizablePanel"
import { fileTree } from "./data/fileTree"
import type { RootState } from "./app/store";
import WellcomeTab from "./components/WellcomeTab";



function App() {
  const { openedFiles } = useSelector((state: RootState) => state.tree);

  return (
    <div>
      <div className="flex h-screen">
        
      
        <ResizablePanel 
        shwoLeftPanel
        leftPanel={
            <div className="w-64 p-2 ">
              <RecursiveComponent fileTree={fileTree} />
            </div>
        }
        
        rightPanel={
          openedFiles.length ? <Preview /> : <WellcomeTab />
        }
        />
      </div>
      
    </div>
  )
}

export default App
