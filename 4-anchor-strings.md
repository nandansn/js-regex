## Anchor strings : Anchors: string start ^ and end $

- The caret ^ and dollar $ characters have special meaning in a regexp. They are called “anchors”.

- The caret ^ matches at the beginning of the text, and the dollar $ – at the end.


- Anchors have “zero width”
- Anchors ^ and $ are tests. They have zero width.

- In other words, they do not match a character, but rather force the regexp engine to check the condition (text start/end).

