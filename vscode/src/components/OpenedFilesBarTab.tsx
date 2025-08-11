import { useDispatch, useSelector } from "react-redux";
import type { IFile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";
import { setClickedFile, setOpenedFiles, setTabIdToRemoveFile } from "../app/features/fileTreeSlice";
import type { RootState } from "../app/store";


interface Iprops {
    file: IFile;
}

const OpenedFilesBarTab = ({ file }: Iprops) => {
    
    const dispatch = useDispatch();
    
    const { openedFiles, clickedFile: {activeTabId} } = useSelector((state: RootState) => state.tree);

    // Handler for closing the file tab
    const handleOnClick = () => {
        dispatch(setClickedFile({
            filename: file.name,
            fileContent: file.content,
            activeTabId: file.id
        }));
    };
    const onRemove = (id: string) => {
        const filltered = openedFiles.filter(file => file.id !== id);
        
        dispatch(setOpenedFiles(filltered));


        const lastTab = filltered[filltered.length - 1];
        if (!lastTab) {
            dispatch(setOpenedFiles([]));
            dispatch(setClickedFile({activeTabId: null, fileContent: undefined, filename: ""}));
            return;
        }
        dispatch(setClickedFile({activeTabId: lastTab.id, fileContent: lastTab.content, filename: lastTab.name}));

    }

    return(
        <div className="flex items-center p-2" onClick={handleOnClick}  
        onContextMenu={e => {
            e.preventDefault();
            dispatch(setTabIdToRemoveFile(file.id));
        }}
        style={{
            borderTop: file.id === activeTabId ? "2px solid #cf6ccf" : "2px solid transparent",
        }}>

            <span>
                <RenderFileIcon filename={file.name}/>
            </span>

            <span className="cursor-pointer duration-300 flex justify-center 
            items-center w-fit mx-2 p-1 rounded-md">
                {file.name}
            </span>

            <span className="cursor-pointer hover:bg-[#64646473] duration-300 flex justify-center 
            items-center w-fit mr-2 p-1 rounded-md"
            onClick={(e) => {
                e.stopPropagation();
                onRemove(file.id);
            }}
            >
                <CloseIcon />
            </span>
            
        </div>
    );
}

export default OpenedFilesBarTab;