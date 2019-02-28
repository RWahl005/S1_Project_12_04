"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 4

   Author: Ryan Wahl
   Date:   2.28.19
   
   Filename: vw_results.js
   
   Functions:
   
   The calcSum() function is a callback function used to
   calculte the total value from items within an array
   
   The calcPercent(value, sum) function calculates the percentage given
   a value and a sum
   
   The createBar(partyType, percent) function writes a different
   table data table based on the candidates party affilication.
   
      
*/

// Sets the variable reportHTML to h1 title.
var reportHTML = "<h1>" + raceTitle + "</h1>";

// Loops through all of the races (districts)
for (var i = 0; i < race.length; i++) {
    // Sets the total votes to zero.
    var totalVotes = 0;
    // For every vote it calculates the sum.
    votes[i].forEach(calcSum);
    // Added the district to the table;
    reportHTML += "<table> <caption>" + race[i] + "</caption> <tr><th>Candidate</th><th>Votes</th></tr>";
    // Adds the candidates to the HTML
    reportHTML += candidateRows(i, totalVotes);
    // Ends the table.
    reportHTML += "</table>";
}

//Sets the innerhtml of the section element to the html content in the reportHTML variable.
document.getElementsByTagName("section")[0].innerHTML = reportHTML;

/*
    =========
    Functions
    =========
*/

// Create the candidate Rows.
// Parameter raceNum is the race index number.
// The parameter totalVotes is the total votes.
function candidateRows(raceNum, totalVotes) {
    // local rowHTML variable that stores the html content.
    var rowHTML = "";
    // Loops through the candidates in each race.
    for (var j = 0; j <= 2; j++) {
        // Is set the the candidate name.
        var candidateName = candidate[raceNum][j];
        // Is set to the party letter.
        var candidateParty = party[raceNum][j];
        // candidateVotes is set to the candidates vote.
        var candidateVotes = votes[raceNum][j];
        // The percentage is set to the candidate percentages.
        var candidatePercent = calcPercent(candidateVotes, totalVotes);
        // Adds HTML code to the rowHTML variable. Variables are inserted into the string. Two are the variabes are formated to look nice.
        rowHTML += `<tr> <td>${candidateName} (${candidateParty})</td> <td>${candidateVotes.toLocaleString()} (${candidatePercent.toFixed(1)})</td>`;

        // Makes a graph based on the percent.
        // (The book was very unclear about what to do here. So I just assumed this is what it wanted. (It visually matches the book))
        for (var k = 0; k < candidatePercent; k++) {
            // Runs the createBar function and applies the result.
            rowHTML += createBar(candidateParty);
        }
        // Ends the table row at the very end.
        rowHTML += "</tr>"
    }
    // Returns the html code.
    return rowHTML;
}



/* Callback Function to calculate an array sum */
function calcSum(value) {
    totalVotes += value;
}

/* Function to calculate a percentage */
function calcPercent(value, sum) {
    return (100 * value / sum);
}

// Function to get the html code for a certain party.
// The instructions were not clear with this and the book never mentioned a second parameter.
// Codded it to look like the image in the book.
function createBar(partyType) {
    // An empty HTML variable.
    var barHTML = "";
    // Switches through the different options for the partyType variable.
    // Adds a table data with a class to the barHtml.
    switch (partyType) {
        case "D":
            barHTML += "<td class='dem'></td>";
            break;
        case "R":
            barHTML += "<td class='rep'></td>";
            break;
        case "I":
            barHTML += "<td class='ind'></td>";
            break;
    }
    // Returns the value of barHtml;
    return barHTML;
}