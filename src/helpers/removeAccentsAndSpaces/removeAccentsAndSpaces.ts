export function removeAccentsAndSpaces(str: string) {
    const strWithouSpaces = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    const formattedStr = strWithouSpaces.replace(/\s|[-]/g, '_').toLowerCase()
    return formattedStr
}
