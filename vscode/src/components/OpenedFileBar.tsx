
import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import OpenedFilesBarTab from "./OpenedFilesBarTab";
import DropMenu from "./ui/DropMenu";
import { useState } from "react";



const OpenedFileBar = () => {

    const { openedFiles } = useSelector((state: RootState) => state.tree);
    const [showMenu, setShowMenu] = useState(false);
    const [MenuPosition ,setMenuPosition] = useState<{x: number; y: number}>({x: 0, y: 0});

    return(
        <div className="w-fit" onContextMenu={(e) => {
            e.preventDefault();
            setMenuPosition({x: e.clientX, y: e.clientY});
            setShowMenu(true);
        }}>
            <div className="flex items-center border-b-[1px] border-[#ffffff1f] p-2">
                {
                    openedFiles.map((file) => <OpenedFilesBarTab key={file.id} file={file}/>)
                }
            </div>
           {showMenu && <DropMenu position={MenuPosition} setShowMenu={setShowMenu}/>}
        </div>
    );
}

export default OpenedFileBar