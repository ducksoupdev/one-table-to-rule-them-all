# Mosaic table component

Almost all apps require a performant and full-featured data table. 

https://advancedcsg.atlassian.net/wiki/spaces/UXCOP/pages/603128486/One+Table+to+Rule+Them+All

## Features

* Styling options: striped, dark, bordered and hover
* Fixed height
* Column headers
* Column footers
* Set `thead` class
* Set `tfoot` class
* Displayed entries dropdown for large data sets
* Use a JSON schema to describe the table data. See [https://json-schema.org/](https://json-schema.org/)
* Set the start page for large data sets
* Set the page size for large data sets
* Set the visible page count in the pagination
* Load table data sync or async by returning a `Promise` that resolves the data such as loading from remote data sources 

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
  headClassName: String,
  footClassName: String,
  displayedEntries: Boolean,
  schema: Object,
  page: Integer,
  size: Integer,
  visiblePageCount: Integer,
  data: function () {
    return Array | Promise<Array>
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

### `headClassName` (default: null)

Set a class to apply to the `thead`.

### `footClassName` (default: null)

Set a class to apply to the `tfoot`.

### `displayedEntries` (default: false)

Ability to change the records per page between 10, 25 and 50. 
_To maintain the best possible table performance, the table has a hard display limit of 50._

### `schema` (required)

A JSON schema describing the table data. See [https://json-schema.org/](https://json-schema.org/)

### `pageIndex` (default: 0)

The initial page index to display.

### `pageSize` (default: 50)

The default page size. Choose from 10, 25 and 50.
_To maintain the best possible table performance, the table has a hard display limit of 50._

### `visiblePageCount` (default: 4, minimum: 4)

The number of visual pages to display in the pagination. The range of pages will change with previous and next navigation.

### `data` (required)

A function to return the data for the table. The function must either return an `Array` or `Promise` that resolves an `Array`.

The rows of the `Array` must be an `Object` in the data format of the `schema`.

By returning a `Promise` that resolves to an `Array`, the data function can load data from remote sources (REST API/GraphQL endpoint/JSON file) asynchronously.
