## Escaping, special characters

- As we’ve seen, a backslash \ is used to denote character classes, e.g. \d. So it’s a special character in regexps (just like in regular strings).

- There are other special characters as well, that have special meaning in a regexp, such as [ ] { } ( ) \ ^ $ . | ? * +. They are used to do more powerful searches.

### Escaping

Let’s say we want to find literally a dot. Not “any character”, but just a dot.

To use a special character as a regular one, prepend it with a backslash: \..

That’s also called “escaping a character”.

```
"Chapter 5.1".match(/\d\.\d/)
```


**A slash**

- A slash symbol '/' is not a special character, but in JavaScript it is used to open and close the regexp: /...pattern.../, so we should escape it too.

Here’s what a search for a slash '/' looks like:

```
"/".match(/\//) 
```

**new RegExp**

- If we are creating a regular expression with new RegExp, then we don’t have to escape /, but need to do some other escaping.

- The similar search in one of previous examples worked with /\d\.\d/, but new RegExp("\d\.\d") doesn’t work, why?

The reason is that backslashes are “consumed” by a string. As we may recall, regular strings have their own special characters, such as \n, and a backslash is used for escaping.

- So new RegExp gets a string without backslashes. That’s why the search doesn’t work!

To fix it, we need to double backslashes, because string quotes turn \\ into \:


```
let regStr = "\\d\\.\\d";
alert(regStr); // \d\.\d (correct now)

let regexp = new RegExp(regStr);

alert( "Chapter 5.1".match(regexp) ); // 5.1
```


- To search for special characters [ \ ^ $ . | ? * + ( ) literally, we need to prepend them with a backslash \ (“escape them”).
- We also need to escape / if we’re inside /.../ (but not inside new RegExp).
- When passing a string to new RegExp, we need to double backslashes \\, cause string quotes consume one of them.