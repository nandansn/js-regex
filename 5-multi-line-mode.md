## Multiline mode of anchors ^ $, flag "m"

- The multiline mode is enabled by the flag m.

- It only affects the behavior of ^ and $.

- In the multiline mode they match not only at the beginning and the end of the string, but also at start/end of line.


**Searching at line start ^**

- The pattern /^\d/gm takes a digit from the beginning of each line:

```
let str = `1st place: Winnie
2nd place: Piglet
3rd place: Eeyore`;

console.log( str.match(/^\d/gm) ); // 1, 2, 3

```

- “Start of a line” formally means “immediately after a line break”: the test ^ in multiline mode matches at all positions preceded by a newline character \n.

And at the text start.

**Searching at line end $**

- The regular expression \d$ finds the last digit in every line


```
let str = `Winnie: 1
Piglet: 2
Eeyore: 3`;

console.log( str.match(/\d$/gm) ); // 1,2,3
```

- “End of a line” formally means “immediately before a line break”: the test $ in multiline mode matches at all positions succeeded by a newline character \n.

And at the text end.

**Searching for \n instead of ^ $**

- To find a newline, we can use not only anchors ^ and $, but also the newline character \n.

```
let str = `Winnie: 1
Piglet: 2
Eeyore: 3`;

console.log( str.match(/\d\n/g) ); // 1\n,2\n
```