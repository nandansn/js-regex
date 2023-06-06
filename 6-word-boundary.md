## Word boundary: \b

- A word boundary \b is a test, just like ^ and $.

- When the regexp engine (program module that implements searching for regexps) comes across \b, it checks that the position in the     string is a word boundary.

- There are three different positions that qualify as word boundaries:

- At string start, if the first string character is a word character \w.
- Between two characters in the string, where one is a word character \w and the other is not.
- At string end, if the last string character is a word character \w.
- For instance, regexp \bJava\b will be found in Hello, Java!, where Java is a standalone word, but not in Hello, JavaScript!.