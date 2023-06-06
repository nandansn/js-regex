## sets and ranges []

**Sets**

- Sets
For instance, [eao] means any of the 3 characters: 'a', 'e', or 'o'.

That’s called a set. Sets can be used in a regexp along with regular characters:

```
// find [t or m], and then "op"
alert( "Mop top".match(/[tm]op/gi) ); 
```


**Ranges**

- Square brackets may also contain character ranges.

For instance, [a-z] is a character in range from a to z, and [0-5] is a digit from 0 to 5.

In the example below we’re searching for "x" followed by two digits or letters from A to F:


\d – is the same as [0-9],
\w – is the same as [a-zA-Z0-9_],
\s – is the same as [\t\n\v\f\r ], plus few other rare Unicode space characters.


**Excluding ranges**

- Besides normal ranges, there are “excluding” ranges that look like [^…].

They are denoted by a caret character ^ at the start and match any character except the given ones.

For instance:

[^aeyo] – any character except 'a', 'e', 'y' or 'o'.
[^0-9] – any character except a digit, the same as \D.
[^\s] – any non-space character, same as \S.


**Escaping in […]**
Usually when we want to find exactly a special character, we need to escape it like \.. And if we need a backslash, then we use \\, and so on.

In square brackets we can use the vast majority of special characters without escaping:

Symbols . + ( ) never need escaping.
A hyphen - is not escaped in the beginning or the end (where it does not define a range).
A caret ^ is only escaped in the beginning (where it means exclusion).
The closing square bracket ] is always escaped (if we need to look for that symbol).
In other words, all special characters are allowed without escaping, except when they mean something for square brackets.

A dot . inside square brackets means just a dot. The pattern [.,] would look for one of characters: either a dot or a comma.


[ref] (https://javascript.info/regexp-character-sets-and-ranges)