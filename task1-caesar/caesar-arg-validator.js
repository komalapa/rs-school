import { existsSync } from 'fs';


export function cliValidate(options){
    //console.log(options)
    if (options.action === undefined){
        console.error("required key action (-a, --action) is missed")
        return false
    }
    if (!(options.action == "encode" || options.action == "decode")){
        console.error("action can take a value 'encode' or 'decode'")
        return false
    }
    if (options.shift === undefined){
        console.error("required key shift (-s, --shift) is missed")
        return false
    }
    if (options.shift === true || isNaN( options.shift) || !Number.isInteger(+options.shift)){
        console.error("shift can only be integer")
        return false
    }
    if (options.input === undefined){
        console.warn("Input file is not defined. Stdin will be used")
    } else if (!existsSync(options.input)){
        console.error("Input file is not exist")
        return false
    }
    if (options.output === undefined){
        console.warn("Output file is not defined. Stdout will be used")
    } else if (!existsSync(options.output)){
        console.warn("Output file is not exist. It will be created")
    }
    return true
}