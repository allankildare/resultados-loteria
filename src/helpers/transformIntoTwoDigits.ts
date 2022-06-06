export function transformIntoTwoDigits(number: number) {
    if(number < 10 && number > -1) return `0${number}`
    return number.toString()
}
