/* class that outputs the table onto the webpage*/ 

for(c of terms){
    outputCartRow(c);
}

function outputCartRow(item){
    document.write("<tr>");
    document.write("<td>" + item.termName + "</td>");
    document.write("<td>" + item.definition + "</td>");
    document.write("<td>" + "<iframe width=" + "'420'" + "height=" + "'315'" +"src=" + item.video + "></iframe>")
    document.write("</tr>")
}