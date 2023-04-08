<div class="table-container" id="$table_id">
    <table>
        <tr>
            <td class="table-name">$table_name</td>
        </tr>
        <tr>
            <td>$table_desc</td>
        </tr>
        <tr>
            <td>$table_enum</td>
        </tr>
        <tr>
            <td>count : $table_count</td>
        </tr>
        <tr>
            <td>SELECT * FROM $collection.$table_name</td>
        </tr>
        <tr>
            <td><textarea class="model-textarea">$model</textarea></td>
        </tr>

    </table>
    <table>
        <tr>
            <th>Is Key</th>
            <th>Colonne</th>
            <th>Type</th>
            <th>Null</th>
            <th class="length">Ln</th>
            <th class="default">Default</th>
            <th class="count">Count</th>
            <th class="desc">Description</th>
            <th class="link">Links</th>
            <th class="model">Model</th>
            <th class="comm">Comments</th>
            <th class="mapped">Mapped</th>
            <th>V</th>
            $rows
        </tr>
    </table>
</div>