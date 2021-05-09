 # Caesar cipher CLI tool
 
 Реализация консольной утилиты шифрования по алгоритму ["шифр Цезаря"](https://en.wikipedia.org/wiki/Caesar_cipher).

## Установка
* Скачать папку task1-caesar
* Перейти в эту папку
* Запустить npm install
* Для запуска нужно выполнить node caesar-CLI.js с желаемыми параметрами

## Параметры

Утилита принимает следующие параметры:

**-s, --shift**:  сдвиг (ключ шифра) - обязательный параметр

**-a, --action**: действиею Может принимать значения  encode/decode

**-i, --input**: путь к входному файлу

**-o, --output**: путьк файлу с результатом

Утилита будет работать с stdin и stdout при отсутствии опции input и output соответственно

## Примеры применения

1. _-a (--action)_  **encode** Кодируем текст
shift  >  0
```bash
$ node caesar-CLI.js -a encode -s 1 -i ./input.txt -o ./output.txt
```
> input.txt
> `The quick brown fox jumps over the lazy dog'

> output.txt
> `Sgd pthbj aqnvm enw itlor nudq sgd kzyx cnf'


shift < 0
```bash
$ node caesar-CLI.js --action encode --shift -1 --input ./input.txt --output ./output.txt
```
> input.txt
> `The quick brown fox jumps over the lazy dog'

> output.txt
> `Uif rvjdl cspxo gpy kvnqt pwfs uif mbaz eph'


2. _-a (--action)_ is **decode**  
Раскодирование текста по ключу (сдвигу)
shift > 0
```bash
$ node caesar-CLI.js -a decode -s 1 -i ./input.txt -o ./output.txt
```
> input.txt
> `Sgd pthbj aqnvm enw itlor nudq sgd kzyx cnf''

> output.txt
> `The quick brown fox jumps over the lazy dog'


shift < 0
```bash
$ node caesar-CLI.js --action decode --shift -1 --input ./input.txt --output ./output.txt
```

> input.txt
> `Uif rvjdl cspxo gpy kvnqt pwfs uif mbaz eph'

> output.txt
> 'The quick brown fox jumps over the lazy dog'

3. Кодирование затрагивает только буквы латинского алфавита:
````bash
$ node caesar-CLI.js --action encode --shift 30
warn: Input file is not defined. Stdin will be used
warn: Output file is not defined. Stdout will be used
Qwerty? No! 256:2 qwerty...
Msanpu? Jk! 256:2 msanpu...
````
````bash
node caesar-CLI.js --action decode --shift 30
warn: Input file is not defined. Stdin will be used
warn: Output file is not defined. Stdout will be used
Msanpu? Jk! 256:2 msanpu...
Qwerty? No! 256:2 qwerty...
````
