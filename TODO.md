# TODO

See https://advancedcsg.atlassian.net/wiki/spaces/UXCOP/pages/603128486/One+Table+to+Rule+Them+All for full list.

General

- [ ] JSON schema for row data (ajv for validation)
- [ ] Specify column headers in initialisation
- [ ] Column header truncate if text too long
- [ ] Optional column footer
- [ ] Load any sized data
- [ ] Display max of 50 rows
- [ ] Create DOM nodes for each row
- [ ] Re-use existing nodes for calculations
- [ ] Create all nodes after loading data
- [ ] Bind DOM nodes for each set of rows
- [ ] Allow pagination sizes - 10, 20, 50, 100

Performance

- [ ] Must seamlessly cope with massive data sets (thousands of cells) without noticeable slow-down

Layouts

- [ ] Fixed height - arbitrary number of rows decided on - 20
- [ ] Scrollable vertically
- [ ] Fixed width
- [ ] Scrollable horizontally
- [ ] Primary column on the left

Sorting

- [ ] Alphanumeric
- [ ] Dates

Displayed Entries

- [ ] 10/20/50 only

Expandable rows

- [ ] Each row can be expanded to show additional related information - click on the first cell of data

Cell Search

- [ ] Table wide fast client side searching - case insensitive

In Cell Edit

- [ ] Click on a cell to change its value. Saved on exit or Return

Selectable Rows

- [ ] Multi-select checkbox ticked, multiple rows can be selected for submission, editing or deleting

Row editing

- [ ] Row data displayed in a modal for updates
- [ ] Modal layout as form

Multi-line Editing

- [ ] Multiple rows displayed in a modal so cells across many rows can be edited
- [ ] Editable cells displayed in rows/columns for editing

Top and Bottom Headers/Footers

- [ ] Able to display a footer to show column titles again or totals of numeric values

Pagination

- [ ] A paging system displayed bottom right to allow users to easily move backwards and forwards between the pages of data

Display current entries

- [ ] A line of text stating the number of rows currently being displayed and the total number of rows. E.g. "Showing entries 1-25 of 500"

Filtering - Full text search

- [ ] A single input that searches across all data and returns all occurrences

Filtering - Column search

- [ ] Individual inputs above each column that search that column only

Filtering - Column filters

- [ ] A filter icon that enables a list-box (like Excel) which allows users to pick from the list of values in that column

Filtering - Between dates

- [ ] Two date inputs that allow users to filter the data between dates. It should also be possible to quickly see today's data by clicking the Today button

Column Chooser and Mover

- [ ] Right-click on the table header to see the context menu
- [ ] Options are available to toggle suggested columns, auto-fit all columns, reset the table, and open an modal to add columns from the full list available. The order of columns can also be specified here.
- [ ] Move columns left and right
- [ ] Saved settings per user using cookies

Reset Table to Default view

- [ ] Clears any custom table settings made by moving or adding columns

Import and Export CSV

- [ ] Buttons to allow external data to be imported into the table and the table's data to be exported to CSV

Print

- [ ] A button to print out a hard copy of the table's data

Back to Top Link

- [ ] A button to return users to the top of the page

Colour Coding/Status Symbol for rows

- [ ] Colour-coded bars down the left-hand side to show the status

Row highlighting

- [ ] Move the mouse over each row to see the highlight
