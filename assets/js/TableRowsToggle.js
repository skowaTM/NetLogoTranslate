
function RowsToggle(table_id) {
    var table = document.getElementById(table_id);
    var tbody = table.getElementsByTagName("tbody")[0];
    var rows = tbody.getElementsByTagName("tr");
    
    for (var i = 1; i < rows.length; i++) {
        rows[i].style.display = (rows[i].style.display === "none") ? "table-row" : "none";
    }
}


RowsToggle('turtlegroup-table');
RowsToggle('patchgroup-table');
RowsToggle('linksgroup-table');
RowsToggle('agentsetgroup-table');
RowsToggle('colorgroup-table');
RowsToggle('controllogicgroup-table')
RowsToggle('anonymousproceduresgroup-table')
RowsToggle('worldgroup-table')
RowsToggle('perspectivegroup-table')
RowsToggle('inputoutputgroup-table')
RowsToggle('filegroup-table')
RowsToggle('listgroup-table')
RowsToggle('stringgroup-table')
RowsToggle('mathsgroup-table')
RowsToggle('plottinggroup-table')
RowsToggle('systemgroup-table')
RowsToggle('behaviorspacegroup-table')
RowsToggle('hubnetgroup-table')

RowsToggle('variablesgroup-trutle-table')
RowsToggle('variablesgroup-patch-table')
RowsToggle('variablesgroup-links-table')

RowsToggle('keywordsgroup-table')
