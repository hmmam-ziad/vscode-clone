import {createSlice, type PayloadAction} from '@reduxjs/toolkit';
import type { IFile } from '../../interfaces';

interface IClickedFile {
    activeTabId: string | null;
    filename: string;
    fileContent: string | undefined;
}

interface IInitialState {
    openedFiles: IFile[];
    clickedFile: IClickedFile;
    tabIdRemove: string | null;
    
 }
const initialState : IInitialState = {
    
    openedFiles: [],
    clickedFile: {
        activeTabId: null,
        filename: "",
        fileContent: "",
    },
    tabIdRemove: null
};


export const fileTreeSlice = createSlice({
  name: 'fileTree',
    initialState,
    reducers: {
        setOpenedFiles: (state, action: PayloadAction<IFile[]>) => {
            state.openedFiles = action.payload;
        },
        setClickedFile: (state, action: PayloadAction<IClickedFile>) => {
            state.clickedFile = action.payload;
        },
        setTabIdToRemoveFile: (state, action: PayloadAction<string | null>) => {
            state.tabIdRemove = action.payload;
        }
    },
}); 

export const { setOpenedFiles, setClickedFile, setTabIdToRemoveFile} = fileTreeSlice.actions;
 
export default fileTreeSlice.reducer;