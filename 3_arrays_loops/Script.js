// JavaScript source code

var grades = "jim|25, sue|32, mary|34, ann|22, ted|28, frank|15, lisa|19, mike|30, ahn|26, vishaya|27";

function sortedReadable(grades) {

    // Variable......... Grade----remove spaces, array wo spaces, sorting alphabetically
    var sortReadable = grades.replace(/, /g, ",").split(",").sort();

    var sum = 0;
    var highScore = 0;
    var lowScore = 50;

    for (i = 0; i < sortReadable.length; i++) {
        // variable.. taking the | out ....... changing to string. replacing comma
        var person = sortReadable[i].split("|");
        var firstword = person[0].charAt(0).toUpperCase() + person[0].slice(1);
        document.write(firstword + " - " + person[1] + "<br>");
        
    } //end of for statement
    document.write("Total Number of students " + sortReadable.length + "<br>");
} // end of function sortedReadable
    


function theNumbers(grades) {
    var sortReadable = grades.replace(/, /g, ",").split(",").sort();

    var sum = 0;
    var highScore = 0;
    var lowScore = 50;

    for (var i = 0; i < sortReadable.length; i++) {
        var person = sortReadable[i].split("|");

        sum = sum + parseInt(person[1]);

        if (person[1] > highScore) {
            highScore = person[1]
        }

        if (person[1] < lowScore) {
            lowScore = person[1];
        }
    }
    document.write("The average score = " + sum / sortReadable.length + "<br>");
    document.write("The highest score = " + highScore + "<br>");
    document.write("The lowest score = " + lowScore + "<br>");


} // end of function



//displays that student data in a more readable format like so:
// Name1 - score1
// Name2 - score2
 
// display each student name and score in alphabetical order
// first letter of student name capitalized
// display total # of students,
// display the lowest, highest, and average scores

// You can use JavaScript's string split() method to get a list of students from the 'grades' string
// Class    imum, maximum, & average 