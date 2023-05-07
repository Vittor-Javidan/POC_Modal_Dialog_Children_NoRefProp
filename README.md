# Proof of Concept of dialog html tag for accessibilitie

The dialog tag is used for the purpose of handling the webpage focus when a modal is opened. This is usefull for keyboard users, who navigate through web by pressing the tab key.
This prove of concept show the most simplified whay that i found of using this tag without losing focus history.

## Where to read?

all files needed to understando are inside src > components folder

## features:
- Parent components don't need to know about the reference of the modal.
- When pressing Esc, the modal will trigger the onPressEsc callback, allowing the parent to specify a function to be call when the user cancel the modal visualization. Often this can be the same.function definition as the close button inside the modal.
- Modal lazy import example, so user loads the modal only when he needs.
- This modal will not lose history focus to the last button clicked to open it, not matter what.
- everything behind the modal will be unfocusable.