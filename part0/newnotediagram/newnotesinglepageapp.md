```mermaid
    sequenceDiagram
    participant browser
    participant server

    Note right of browser: User submits the form, JavaScript prevents the default behavior

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: 201 Created
    deactivate server

    Note right of browser: The browser adds the new note to the list and re-renders the notes
    browser->>browser: re-render
```