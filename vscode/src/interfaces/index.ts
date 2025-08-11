export interface IFile {
    id: string; // Unique identifier for each file or folder
    name: string;
    isFolder: boolean;
    children?: IFile[];
    content?: string; // Optional content for files
}