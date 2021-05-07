//Функция сдвига для шифра. Если сдвиг положительный - вправо, отрицательный - влево
const alphabet =[
    'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 
    's', 't', 'u', 'v', 'w', 'x', 
    'y', 'z',];
const alphabetCapitals = [
    'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z'
  ]
function shiftStr(str, shift){
    shift = shift % 26
    if (shift == 0) return str;

    const shiftedAlphabet = [...alphabet.slice(shift, ), ...alphabet.slice(0, shift)];
    const shiftedAlphabetCapitals = [...alphabetCapitals.slice(shift, ), ...alphabetCapitals.slice(0, shift)];
    let shiftedStr = '';
    for (let i = 0; i < str.length; i++) {
        let index = alphabet.indexOf(str[i])
        if (index >= 0) {
            shiftedStr+=shiftedAlphabet[index]
        } else {
            let index = alphabetCapitals.indexOf(str[i])
            if (index >= 0) {
                shiftedStr+=shiftedAlphabetCapitals[index]
            } else {
                shiftedStr+=str[i]
            } 
        }
    }
    return shiftedStr
}

export function caesarCode(str, shift){
    return shiftStr (str, shift)
}

export function caesarDecode(str, shift){
    return shiftStr (str, -shift)
}

//console.log(caesarCode('This is secret. Message about "_" symbol!', -100))
//console.log(caesarDecode (caesarCode('This is secret. Message about "_" symbol!', -100), -100))