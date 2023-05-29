# js-regex

## online tool:

[ref] (https://regex101.com/)

## tutorial

[ref] (https://www.youtube.com/watch?v=DC-zzUrg0Ws&list=PL4cUxeGkcC9g6m_6Sld9Q4jzqdqHd2HiD&index=3&ab_channel=TheNetNinja)

### Patterns and flags

- Regular expressions are patterns that provide a powerful way to search and replace in text.

### Syntax

- long:

```

regexp = new RegExp("pattern", "flags");

```

- short:

```
    regexp = /pattern/; // no flags
    regexp = /pattern/gmi; // with flags g,m and i (to be covered soon)

```

- Slashes /.../ tell JavaScript that we are creating a regular expression. They play the same role as quotes for strings.

- In both cases regexp becomes an instance of the built-in RegExp class.

- The main difference between these two syntaxes is that pattern using slashes /.../ does not allow for expressions to be inserted (like string template literals with ${...}). They are fully static.

- Slashes are used when we know the regular expression at the code writing time – and that’s the most common situation. While new RegExp is more often used when we need to create a regexp “on the fly” from a dynamically generated string. For instance:

```
let tag = prompt("What tag do you want to find?", "h2");

let regexp = new RegExp(`<${tag}>`); // same as /<h2>/ if answered "h2" in the prompt above

```

### Flags

- g
- i
- m
- u
- y


### Methods used in JS for regexp expressions

*** regular expressions are integrated with string methods.***

- Searching: str.match
    - If the regular expression has flag g, it returns an array of all matches:

    ```
        let str = "We will, we will rock you";

        alert( str.match(/we/gi) ); // We,we (an array of 2 substrings that match)

    ```

    - If there’s no such flag it returns only the first match in the form of an array, with the full match at index 0 and some additional details in properties:

    ```
        let str = "We will, we will rock you";

        let result = str.match(/we/i); // without flag g

        alert( result[0] );     // We (1st match)
        alert( result.length ); // 1

        // Details:
        alert( result.index );  // 0 (position of the match)
        alert( result.input );  // We will, we will rock you (source string)

    ```

    - And, finally, if there are no matches, null is returned (doesn’t matter if there’s flag g or not).

      This a very important nuance. If there are no matches, we don’t receive an empty array, but instead receive null. Forgetting about that may lead to errors, e.g.:

- Replacing: str.replace

    - The method str.replace(regexp, replacement) replaces matches found using regexp in string str with replacement (all matches if there’s flag g, otherwise, only the first one).

    ```
        alert( "We will, we will".replace(/we/ig, "I") ); // I will, I will
    ```

- Testing: regexp.test

    - The method regexp.test(str) looks for at least one match, if found, returns true, otherwise false.

    ```
    let str = "I love JavaScript";
    let regexp = /LOVE/i;

    alert( regexp.test(str) ); // true

    ```