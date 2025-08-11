import { useSelector } from "react-redux";
import FileSyntaxHighlighter from "./FileSyntaxHighlighter";
import OpenedFileBar from "./OpenedFileBar";
import type { RootState } from "../app/store";


const Preview = () => {
     const { clickedFile } = useSelector((state: RootState) => state.tree);
    return(
        <div>
            <OpenedFileBar />
            <FileSyntaxHighlighter content={clickedFile.fileContent} />
        </div>
    );
}

export default Preview