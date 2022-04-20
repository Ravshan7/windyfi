export default function download_table_as_csv(table_id: string, separator = ";") {
    // Select rows from table_id
    var rows = document.querySelectorAll("table#" + table_id + " tr")
    // Construct csv
    var csv = []
    for (var i = 0; i < rows.length; i++) {
        var row = [],
            cols = rows[i].querySelectorAll("td, th")
        for (var j = 0; j < cols.length; j++) {
            // Clean innertext to remove multiple spaces and jumpline (break csv)
            var data = cols[j].textContent
            if (data != null) {
                if (data.includes("\u20AC")) {
                    data = data.replace(/\D/g, "")
                }
            }
            row.push('"' + data + '"')
        }
        csv.push(row.join(separator))
    }
    var csv_string = csv.join("\n")
    // Download it
    var filename = "export_" + table_id + "_" + new Date().toLocaleDateString() + ".csv"
    var link = document.createElement("a")
    link.style.display = "none"
    link.setAttribute("target", "_blank")
    link.setAttribute("href", "data:text/csv;charset=utf-8," + encodeURIComponent(csv_string))
    link.setAttribute("download", filename)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}
