import { stdin, stdout } from "node:process"
import {Transform} from 'stream'
import {createReadStream, createWriteStream} from 'fs'
import {caesarCode} from './caesar.js'

console.log(stdin)
export function getInput (inputFile){
    if (!inputFile) {
        let stream = stdin;
        console.log("stdin")
        return stream
    } 
    let stream = createReadStream(inputFile)
    console.log('file')
    return stream
}

export function writeOutput (outputFile){
    if (!outputFile) {
        let stream = stdout;
        console.log("stdin")
        return stream
    } 
    let stream = createWriteStream(outputFile)
    console.log('file')
    return stream
}


export class CipherTransform extends Transform
{
    constructor( transformCallback, stringEncoding='utf8' )
    {
        if ( typeof transformCallback != 'function' )
        {    // throw type error
            throw new TypeError( "Callback must be a function." )
        }
        super()
        this.transformCallback = transformCallback

        this.stringEncoding = stringEncoding
        this.lineBuffer = ''
    }

    // implement transform method (input encoding is ignored)
    _transform( data, encoding, callback )
    {
        data = data.toString( this.stringEncoding )
        let output = this.transformCallback(data)
        callback( null, output )
    }
}

const cipher = new CipherTransform( ( data ) =>
{
    // replace every whitespace by an underscore
    return caesarCode(data, 1)
})



getInput('./input.txt').pipe(cipher).pipe(writeOutput('./output'))

