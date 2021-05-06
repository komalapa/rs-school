import { Command } from 'commander/esm.mjs';
import { caesarCode, caesarDecode } from './caesar.js'
import { cliValidate } from './caesar-arg-validator.js'
const program = new Command();

export default program
  .option('-s, --shift [shift]', 'integer shift (key of caesar cipher)')
  .option('-i, --input [inputFile]', 'input file, if not defined will used stdin')
  .option('-o, --output [outputFile]', 'output file, if not defined will used stdout')
  .option('-a, --action [type]', 'can be code or decode.');


program.parse(process.argv);

const options = program.opts();
console.log(cliValidate(options))
// if (cliValidate(options)){
//   if (options.action === "decode") console.log(caesarDecode(options.input, options.shift))
//   if (options.action === "code") console.log(caesarCode(options.input, options.shift))
// }


