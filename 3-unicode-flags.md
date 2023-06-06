## Unicode Flags

- Flag u enables the support of Unicode in regular expressions.

- That means two things:

    Characters of 4 bytes are handled correctly: as a single character, not two 2-byte characters.
    Unicode properties can be used in the search: \p{…}.

```
    "nandaஜ".match(/\p{sc=Tamil}/gu)

```

### Currency

- Characters that denote a currency, such as $, €, ¥, have Unicode property \p{Currency_Symbol}, the short alias: \p{Sc}.

- Let’s use it to look for prices in the format “currency, followed by a digit”:

```
let regexp = /\p{Sc}\d/gu;

let str = `Prices: $2, €1, ¥9`;

alert( str.match(regexp) ); // $2,€1,¥9

```

[ref] (https://javascript.info/regexp-unicode)