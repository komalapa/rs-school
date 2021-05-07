import { Command } from 'commander/esm.mjs';
import { caesarCode, caesarDecode } from './caesar.js'
import { cliValidate } from './caesar-arg-validator.js'
import { getInput, writeOutput, CipherTransform} from './caesar-io.js'
const program = new Command();

export default program
  .option('-s, --shift <shift>', 'integer shift (key of caesar cipher)')
  .option('-i, --input [inputFile]', 'input file, if not defined will used stdin')
  .option('-o, --output [outputFile]', 'output file, if not defined will used stdout')
  .option('-a, --action <type>', 'can be code or decode.');


program.parse(process.argv);

const options = program.opts();

if (cliValidate(options)){
  const cipher = new CipherTransform( ( data ) =>
  {
    if (options.action === "encode"){
      return caesarCode(data, options.shift)
    }
    if (options.action === "decode"){
      return caesarDecode(data, options.shift)
    } 
  })
  getInput(options.input).pipe(cipher).pipe(writeOutput(options.output))
} else {
  console.log (process.stgerr)
  process.exit(64)
}