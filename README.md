# Weekend Challenge 1

## Employee Data Record: Created By Jeffrey Miller
This application takes in 5 input fields - first name, last name, employee ID, job title,
and annual salary - and records them upon submission.  Further, the entries submitted
into the salary input are aggregated and divided by 12 to represent the labor costs per month.

### Bugs
- The aggregated salary figure is rounded to the nearest whole integer. I made various
attempts to correct this matter using methods such as parseFloat() and Math.round(value * 100/100) but I could not seem to get it working.
- I can't get the appended list items which contain the input data to not be underlined. They are
inheriting the styling from there parent <li> and even though I know this, I cannot get a grasp
for why I can't get rid of them. Even the all powerful !important will not make it a styled appropriately.
- The delete button isn't flexible in terms that it only deletes the last entry. It
needs to have more functionality so that the user can delete whichever entry they choose.

### To Do's:
- Fix bugs.
- Complete Pro Mode functionality that adjusts the monthly labor costs data upon the deletion of
an employees input data.
- Add re-focus functionality onto the "first name" input upon input(s) submission.
- Add styling so that the app doesn't look so... crappy.
