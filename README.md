# One table to rule them all

## Features

Coming soon!

## How to use

Coming soon

## Options

```js
{
  striped: Boolean,
  dark: Boolean,
  bordered: Boolean,
  hover: Boolean,
  fixedHeight: Boolean,
  headers: Boolean,
  footers: Boolean,
  displayedEntries: Boolean,
  schema: Object,
  page: Integer,
  size: Integer,
  data: function () {
    return Object | Promise
  }
}
```

### `striped` (default: false)

A striped effect for alternate table rows.

### `dark` (default: false)

A dark theme for the table.

### `bordered` (default: false)

A border around the table and between columns and rows.

### `hover` (default: false)

A hover effect when the mouse moves over each row.

### `fixedHeight` (default: false)

Fixed table container with vertical scroll.

### `headers` (default: true)

Display a header showing column titles

### `footers` (default: false)

Display a footer showing column titles

### `displayedEntries` (default: false)

Ability to change the records per page between 10, 25 and 50. 
_To maintain the best possible table performance, the table has a hard display limit of 50._

### `schema` (required)

A JSON schema describing the table data. See [https://json-schema.org/](https://json-schema.org/)

### `page` (default: 1)

The initial page to display.

### `size` (default: 50)

The default page size. Choose from 10, 25 and 50.
_To maintain the best possible table performance, the table has a hard display limit of 50._

### `data` (required)

A function to return the data for the table. The function must either return an `Object` or `Promise` that resolves an `Object` with the following structure.

```json
{
  "total": "3",
  "rows": [
    { "id": 1 },
    { "id": 2 },
    { "id": 3 }
  ]
}
```

The rows of the object must be in the data format of the `schema`.

The data function can load data from remote sources (REST API/GraphQL endpoint/JSON file) or from variables.
