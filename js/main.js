const link = [
    {week: "2",
    label: "Looping a triangle",
    url: "week2/looping_a_triangle.html"},
    {week: "2",
    label: "Fizzbuzz",
    url: "week2/fizzbuzz.html"},    
    {week: "2",
    label: "Chessboard",
    url: "week2/chessboard.html"},    
    {week: "3",
    label: "Building a table",
    url: "week3/building_a_table.html"},    
    {week: "3",
    label: "Balloon",
    url: "week3/balloon.html"},
    {week: "4",
    label: "Vector",
    url: "week4/vector.html"},
    {week: "4",
    label: "Groups",
    url: "week4/groups.html"},
    {week: "4",
    label: "Tic Tac Toe",
    url: "week4/tictac.html"},
    {week: "5",
    label: "Events",
    url: "week5/events.html"},
    {week: "6",
    label: "To do list",
    url: "week6/todo.html"},
    {week: "7",
    label: "Facts",
    url: "week7/index.html"},
    {week: "7",
    label: "ToDo Example",
    url: "week7/todo_example.html"},
    {week: "8",
    label: "Canvas Example",
    url: "week8/canvas/index.html"},
    {week: "8",
    label: "Remote API",
    url: "week8/remoteAPI.html"},
    {week: "9",
    label: "Factors",
    url: "week9/factors.html"},
    {week: "12",
    label: "Calculator Project",
    url: "calculator/calculator.html"},
    {week: "13",
    label: "Clock Project",
    url: "clock/clock.html"}
            ]
const list = document.querySelector('#list');

link.forEach(element => {

    let assignment = document.createElement('li');
    let url = document.createElement('a');

    url.textContent = `Week ${element.week}, ${element.label} `;
    url.setAttribute('href', element.url);
  
    assignment.appendChild(url);

    list.appendChild(assignment);
});