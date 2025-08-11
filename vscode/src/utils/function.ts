import type { IFile } from "../interfaces";

export const doseFileObjectExist = (arr: IFile[], id:string) => {
    return arr.some((file) => file.id === id);
}