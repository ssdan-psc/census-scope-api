<?php
function get_cols($topic, $chart, $conn) {
    $query = "SELECT col, label FROM col_map WHERE topic=" . "'" . $topic . "' AND " . $chart . "=1";
    $cols = array();    // cols = [[col0, label0], [col1, label1], ... , [coln, labeln]]
    foreach ($conn->query($query) as $row) {
    	array_push($cols, ['col' => $row['col'], 'label' => $row['label']]);
    }

    return $cols;
}
?>