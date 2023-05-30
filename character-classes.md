### Character classes

- A character class is a special notation that matches any symbol from a certain set.

- \d (“d” is from “digit”)
    A digit: a character from 0 to 9.

- \s (“s” is from “space”)
    A space symbol: includes spaces, tabs \t, newlines \n and few other rare characters, such as \v, \f and \r.

- \w (“w” is from “word”)
    A “wordly” character: either a letter of Latin alphabet or a digit or an underscore _. Non-Latin letters (like cyrillic or hindi) do not belong to \w.


### Inverse classes

For every character class there exists an “inverse class”, denoted with the same letter, but uppercased.

The “inverse” means that it matches all other characters, for instance:

- \D
    Non-digit: any character except \d, for instance a letter.
- \S
    Non-space: any character except \s, for instance a letter.
- \W
    Non-wordly character: anything but \w, e.g a non-latin letter or a space.

### A dot is “any character”
- A dot . is a special character class that matches “any character except a newline”.

### Dot as literally any character with “s” flag

- By default, a dot doesn’t match the newline character \n.

- For instance, the regexp A.B matches A, and then B with any character between them, except a newline \n

```
    alert( "A\nB".match(/A.B/) ); // null
```

```
    alert( "A\nB".match(/A.B/s) );
```