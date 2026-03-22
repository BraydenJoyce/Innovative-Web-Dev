const singers = [{
        name: "Freddie Mercury",
        dob: "9/5/1946",
        bestSongs: "We are the Champions, Bohemian Rhapsody"
    },
    {
        name: "Prince",
        dob: "6/7/1958",
        bestSongs: "Purple Rain, When Doves Cry"
    },
    {
        name: "Frank Sinatra",
        dob: "12/12/1915",
        bestSongs: "My Way, Tha's Life"
    },
    {
        name: "Eddie Vedder",
        dob: "23/12/1964",
        bestSongs: "Black, Jeremy"
    }
];

window.onload = function() {
    const tableBody = document.getElementById("singer-table-body");

    for (let i = 0; i < singers.length; i++) {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = singers[i].name;

        const dobCell = document.createElement("td");
        dobCell.textContent = singers[i].dob;

        const songsCell = document.createElement("td");
        songsCell.textContent = singers[i].bestSongs;

        row.appendChild(nameCell);
        row.appendChild(dobCell);
        row.appendChild(songsCell);

        tableBody.appendChild(row);
    }
};