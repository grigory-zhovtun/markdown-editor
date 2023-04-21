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

export const parserWords = (word: string) => {
    let resultCode = -1;
    const firstLastLetter = word[0] + word[-1]

    textFormats.forEach((text, ind) => {
        textFormats.forEach((text, ind) => {
            if (firstLastLetter[0].includes(text) && firstLastLetter[1].includes(text)) {
                resultCode = ind
            }
        })
    })
    
    return resultCode;
}