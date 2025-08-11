import { extentionsIconPaths } from "../constant";
import IconImage from "./IconImage";
import FileIcon from "./SVG/FileIcon";

interface Iprops {
    filename: string;
    isFolder?: boolean;
    isOpen?: boolean;
}



const RenderFileIcon = ({filename, isFolder, isOpen}: Iprops) => {
    const fileExtension = filename.split('.').pop()?.toLowerCase();


    if(fileExtension && Object.prototype.hasOwnProperty.call(extentionsIconPaths, fileExtension)) {
        const iconPath = isFolder ? isOpen ? `${extentionsIconPaths[fileExtension]}-open.svg` : `${extentionsIconPaths[fileExtension]}.svg` : `${extentionsIconPaths[fileExtension]}.svg`;
    
        return <IconImage src={iconPath} />
    }
    


        if(isFolder && isOpen) return <IconImage src="/icons/folder-default-open.svg" />;
        if(isFolder && !isOpen) return <IconImage src="/icons/folder-default.svg" />;
    return <FileIcon />
}

export default RenderFileIcon