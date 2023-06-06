## Quantifiers +, *, ? and {n}

### Quantity {n}
- The simplest quantifier is a number in curly braces: {n}.

- A quantifier is appended to a character (or a character class, or a [...] set etc) and specifies how many we need.

- It has a few advanced forms, let’s see examples:

- The exact count: {5}
- \d{5} denotes exactly 5 digits, the same as \d\d\d\d\d.

- We can add \b to exclude longer numbers: \b\d{5}\b.

- The range: {3,5}, match 3-5 times

- To find numbers from 3 to 5 digits we can put the limits into curly braces: \d{3,5}

- We can omit the upper limit.

- Then a regexp \d{3,} looks for sequences of digits of length 3 or more

### Shorthands

+, ?, *

- There are shorthands for most used quantifiers:
    +
 - Means “one or more”, the same as {1,}.

- For instance, \d+ looks for numbers:

- ?
- Means “zero or one”, the same as {0,1}. In other words, it makes the symbol optional.

- For instance, the pattern ou?r looks for o followed by zero or one u, and then r.

- So, colou?r finds both color and colour:

- "*" 

- Means “zero or one”, the same as {0,1}. In other words, it makes the symbol optional.

- For instance, the pattern ou?r looks for o followed by zero or one u, and then r.

- So, colou?r finds both color and colour: