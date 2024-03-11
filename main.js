function convertToCRLF(input) {
    return input.replace(/\n/g, '\r\n');
    }
    
    const textLF = "Пример текста\nс использованием LF";
    const textCRLF = convertToCRLF(textLF);
    console.log(textCRLF);
    
    
    