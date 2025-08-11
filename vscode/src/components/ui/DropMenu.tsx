import { useEffect, useRef } from "react";
import { setOpenedFiles } from "../../app/features/fileTreeSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../app/store";

interface Iprops {
    position: {x: number; y: number};
    setShowMenu: (val: boolean) => void;
}

const DropMenu = ({position, setShowMenu}: Iprops) => {
    const menuRer = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();

    const { openedFiles, tabIdRemove } = useSelector((state: RootState) => state.tree);
    //Handlers

    const onClose = () => {
         const filltered = openedFiles.filter(file => file.id !== tabIdRemove);
         dispatch(setOpenedFiles(filltered));
         setShowMenu(false);
    }

    const onCloseAll = () => {
        
        dispatch(setOpenedFiles([]));
        setShowMenu(false);
    }
    
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if(menuRer.current && !menuRer.current.contains(event.target as Node))
            setShowMenu(false);
        }
        window.addEventListener("click", handleClickOutside);

        return () => {
            window.removeEventListener("click", handleClickOutside);
        }
    }, [setShowMenu])

    return(
            <div ref={menuRer}>
                <ul className="bg-white text-black w-fit px-7 py-2 rounded-md"
                style={{
                    position: 'absolute',
                    top: `${position.y}px`,
                    left: `${position.x}px`,
                    zIndex: 1000,
                }}>
                    <li onClick={onClose}>Close</li>
                    <li onClick={onCloseAll}>Close All</li>
                </ul>
            </div>
    );
}

export default DropMenu