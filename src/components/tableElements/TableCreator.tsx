import React from "react";
import {TableBodyRead} from "./TableBodyRead";
import {TableHeaderRoad} from "./TableHeaderRoad";


export const Table = () => {
    return <>
        <div>Table</div>
        <div>
            <TableHeaderRoad/>
            <TableBodyRead/>
            <TableBodyRead/>
            <TableBodyRead/>
        </div>

    </>
}


