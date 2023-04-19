const titles = ["# ", "## ", "### ", "#### ", "##### ", "###### "]
const textFormats = ["*", "-", "**", "__", "***", "___", "--"]


export const parserTitles = (line: string) => {
    let resultCode = -1;

    titles.forEach((title, ind) => {
        if(line.includes(title)) {
            resultCode = ind
        }    
    })
    
    return resultCode;
}