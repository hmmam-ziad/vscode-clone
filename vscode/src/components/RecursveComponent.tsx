import { useState } from "react";
import type { IFile } from "../interfaces";
import RightArrowIcon from "./SVG/Rigth";
import BottomArrowIcon from "./SVG/Bottom";
import RenderFileIcon from "./RenderFileIcon";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { setClickedFile, setOpenedFiles } from "../app/features/fileTreeSlice";
import { doseFileObjectExist } from "../utils/function";

interface Iprops {
    fileTree: IFile;
}

const RecursiveComponent = ({fileTree}: Iprops) => {

    const dispatch = useDispatch();
    const { openedFiles } = useSelector((state : RootState) => state.tree);

    const [isOpen, setIsOpen] = useState(false);

    // Handlers
    const toggle = () => setIsOpen(prev => !prev);
    const onFileClicked = () => {

        const exists = doseFileObjectExist(openedFiles, fileTree.id);
        dispatch(setClickedFile({
                    filename: fileTree.name,
                    fileContent: fileTree.content,
                    activeTabId: fileTree.id
                }));
        if(exists) {
            return;
        }
        dispatch(setOpenedFiles([...openedFiles, fileTree]));
        
    }

    return(
        <div  className="mb-2 ml-2 cursor-pointer">
            <div className="flex items-center mb-1">
                
                {
                    fileTree.isFolder ? 
                    <div onClick={toggle} className="flex items-center">
                        {isOpen ? <BottomArrowIcon /> : <RightArrowIcon />}
                         <RenderFileIcon filename={fileTree.name} isFolder={fileTree.isFolder} isOpen={isOpen}/>
                        <span>{fileTree.name}</span>
                    </div> : (
                    <div className="flex items-center mr-2" onClick={onFileClicked}>
                        <RenderFileIcon filename={fileTree.name}/>
                        <span className="ml-2">{fileTree.name}</span>
                    </div>)
                }
            
            
        </div>

            {isOpen && fileTree.children && fileTree.children.map((file, idx) => (
            <RecursiveComponent key={idx} fileTree={file} />
      ))}

        </div>
    );
}

export default RecursiveComponent