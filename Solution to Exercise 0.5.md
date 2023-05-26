```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server : GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser : HTML Document
    deactivate server

    browser->>server : GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser : CSS File
    deactivate server

    browser->>server : GET https://https.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser : Javascript File
    deactivate server

    browser->>server : GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser : [{"content":"testing testing","date":"2023-05-26T15:07:16.824Z"},...]
 ```
    
