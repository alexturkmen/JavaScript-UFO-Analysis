// from data.js
var tableData = data;

// Select tbody to write the code in

var tbody = d3.select("tbody");

// Write a forEach loop to transfer the tableData into html file

tableData.forEach(
    (item) => {
        let row = tbody.append("tr");
        let datetime = row.append("td");
        let city = row.append("td");
        let state = row.append("td");
        let country = row.append("td");
        let shape = row.append("td");
        let durationMinutes = row.append("td");
        let comments = row.append("td");

        datetime.text(item.datetime);
        city.text(item.city);
        state.text(item.state);
        country.text(item.country);
        shape.text(item.shape);
        durationMinutes.text(item.durationMinutes);
        comments.text(item.comments);
    }
)


// Define the button
let button = d3.select("#filter-btn");

// Handle the click event
button.on('click', handleClick);

// Write a function for handling the click event
function handleClick() {
    let inputElement = d3.select("#datetime")

    let inputValue = inputElement.property("value")

    var dateFilter = tableData.filter(
        (item) =>{
        return item.datetime === inputValue;
        }
    )
    // console.log(dateFilter)

    // Making sure the website displays the filtered data if only input value and datetime value matches
        for (let index = 0; index < dateFilter.length; index ++) {
            if (inputValue === dateFilter[index]["datetime"]) {
                d3.selectAll("tbody>tr").remove()
                dateFilter.forEach(
                    (item) => {
                        let row = tbody.append("tr");
                        row.append("td").text(item.datetime)
                        row.append("td").text(item.city)
                        row.append("td").text(item.state)
                        row.append("td").text(item.country)
                        row.append("td").text(item.shape)
                        row.append("td").text(item.durationMinutes)
                        row.append("td").text(item.comments)
            }
                )
        }
        // Otherwise the function will not do anything
        else {
            continue;
        }
    }     

}


