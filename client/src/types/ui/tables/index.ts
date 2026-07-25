import React from "react";

export interface Column<T> {
    header: string;
    render: (row: T) => React.ReactNode
}

export interface TableProps <T> {
    columns: Column<T>[];
    data: T[];
}