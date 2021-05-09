import { existsSync, access, constants } from 'fs';


export function cliValidate(options){
    //console.log(options)
    if (options.action === undefined){
        console.error("error: required key action (-a, --action) is missed")
        return false
    }
    if (!(options.action == "encode" || options.action == "decode")){
        console.error("error: action can take a value 'encode' or 'decode'")
        return false
    }
    if (options.shift === undefined){
        console.error("error: required key shift (-s, --shift) is missed")
        return false
    }
    if (options.shift === true || isNaN( options.shift) || !Number.isInteger(+options.shift)){
        console.error("error: shift can only be integer")
        return false
    }
    if (options.input === undefined){
        console.warn("warn: Input file is not defined. Stdin will be used")
    } else if (!existsSync(options.input)){
        access(options.input, constants.R_OK, (err) => {
            if (err) {
                console.error(`error: Intput file is not readable`);
                return false
            }
        });
        console.error("error: Input file is not exist")
        return false
    }
    if (options.output === undefined){
        
        console.warn("warn: Output file is not defined. Stdout will be used")
    } else if (!existsSync(options.output)) {
        //console.warn("warn: Output file is not exist. It will be created")
        console.warn("error: Output file is not exist.")
        return false
    } else {
        console.log(options.output)
        access(options.output, constants.W_OK, (err) => {
            console.log(err)
            if (err) {
                console.error(`error: Output file is not writable`);
                return false
            }
        });
    }
        
        
        
    
    return true
}