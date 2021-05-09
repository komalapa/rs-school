# Caesar cipher CLI tool

**Implement CLI tool that will encode and decode a text by [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher)**.

CLI tool should accept 4 options (short alias and full name):

1.  **-s, --shift**: a shift
2.  **-i, --input**: an input file
3.  **-o, --output**: an output file
4.  **-a, --action**: an action encode/decode

## Details:

**Basic Scope**

1. For command-line arguments could be used one of

- [https://www.npmjs.com/package/commander](https://www.npmjs.com/package/commander)
- [https://www.npmjs.com/package/minimist](https://www.npmjs.com/package/minimist)
  or any other module.

2. `Action` (**encode**/**decode**) and the `shift` are required, if one of them missed - an error should be shown, the process should exit with non-zero status code.
3. If the input file is missed - use `stdin` as an input source.
4. If the output file is missed - use `stdout` as an output destination.
5. If the input and/or output file is given but doesn't exist or you can't read it (e.g. because of permissions or it is a directory) - **human-friendly** error should be printed in `stderr`.
6. If passed params are fine the output (file or `stdout`) should contain encoded/decoded content of input (file or `stdin`).
7. For encoding/decoding **use only the English alphabet**, all other characters should be kept untouched.
8. Using `streams` for reading, writing and transformation of text **is mandatory**.
9. The tool must work correctly with an integer values of `shift (-s, --shift)` that are **greater than alphabet length**.

**Advanced Scope**

1. The tool must work correctly with an integer values of `shift (-s, --shift)` that are **lower than zero**.

**Hints:**
As suggested solution to make streams code more robust, and memory effective, consider to use [pipeline method](https://nodejs.org/api/stream.html#stream_stream_pipeline_streams_callback).
Structure can be the following:

```javascript
pipeline(
  input_stream, // input file stream or stdin stream
  transform_stream, // Transform stream
  output_stream // output file stream or stdout stream
)
.then(success and error callbacks)
```

**Usage example:**  
1. _-a (--action)_ is **encode**

```bash
$ node my_caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
```
> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

```bash
$ node my_caesar_cli --action encode --shift 7 --input plain.txt --output encoded.txt
```
> plain.txt
> `This is secret. Message about "_" symbol!`

> encoded.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

2. _-a (--action)_ is **decode**  
_Decoding encoded initial string with the same -s(--shift) number produces the initial string._

```bash
$ node my_caesar_cli --action decode --shift 7 --input encoded.txt --output plain.txt
```

> encoded.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

> plain.txt
> `This is secret. Message about "_" symbol!`

3. _(Optional) Negative shift handling_

```bash
$ node my_caesar_cli --action encode --shift -1 --input plain.txt --output encoded.txt
```

> plain.txt
> `This is secret. Message about "_" symbol!`

> encoded.txt
> `Sghr hr rdbqds. Ldrrzfd zants "_" rxlank!`


# Caesar cipher CLI tool

Каждый пункт **10 баллов**, частичная реализация пункта **5 баллов**.

**Базовая реализация**

1. В README.md должно быть описано, как можно запустить программу из командной строки, описаны аргументы, которые можно передать приложению.
2. Если переданы все аргументы, приложение читает из файла и записывает в файл зашифрованный/расшифрованный текст, при этом предыдущие записи не удаляются.
3. `action (-a, --action)` `encode` и `decode` работают в соответствии с описанными в задаче примерами.
4. Если не переданы обязательные аргументы, приложение передает соответствующее сообщение в `process.stderr` и прoцесс завершается с кодом, отличным от 0.
5. Если переданы аргументы с путями к файлам, но файлы отсутствуют (или к ним невозможен доступ), приложение передает соответствующее сообщение в `process.stderr` и прoцесс завершается с кодом, отличным от 0.
6. Если не передан аргумент с путем до файла на чтение, то чтение осуществляется из `process.stdin`.
7. Если не передан аргумент с путем до файла на запись, то вывод осуществляется в `process.stdout`.
8. Шифруются/дешифруются только латинские буквы, регистр сохраняется, остальные символы не изменяются.
9. Если текст вводится из консоли, то программа не должна завершаться после выполнения шифровки/дешифровки введенного текста, т.е. должна быть возможность ввести еще текст.
10. Кодовая база не находится в одном файле, а разделена на файлы в соответствии с выполняемыми задачами (например - функция, преобразующая строку, в отдельном файле, код, создающий transform стрим, в отдельном файле, функция для парсинга и валидации аргументов в отдельном файле и т.п.).
11. Поддерживаются значения `shift (-s, --shift)` большие, чем длина алфавита (в этом случае алфавит проходится циклически).

**Продвинутая реализация**
1. Поддерживаются отрицательные значения `shift (-s, --shift)` (в этом случае сдвиг должен осуществляться в обратную сторону).

Штрафы:
* Каждый коммит после дедлайна (за исключением коммитов, изменяющих исключительно README.md либо вспомогательные файлы (`.gitignore`, `.prettierrc.json` и т.д.) **минус 20 баллов**
* Запись, чтение, трансформация текста осуществляются без использования потоков (streams) **минус 20 баллов**
* При изменении порядка аргументов происходит ошибка либо изменяется результат выполнения кода **минус 10 баллов**

N.B. `console.error` пишет ошибку в `process.stderr`, большинство библиотек для парсинга параметров при ошибке также пишут в `process.stderr`. В VS Code, если запустить приложение в режиме [дебага](https://code.visualstudio.com/docs/editor/debugging), можно увидеть в панели output, что цвет сообщений, выводимых в `process.stdout` и `process.stderr` отличаются.