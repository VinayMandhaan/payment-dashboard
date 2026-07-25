
import { TableProps } from "../../../types/ui/tables";

function Tables<T>({columns, data}: TableProps<T>) {

    return (
        <table className="data-table">
            <thead>
                <tr>
                    {
                        columns.map((col) => (
                            <th key={col.header}>{col.header}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    data.map((row, index) => (
                        <tr key={index}>
                            {columns.map((col, index) => (
                                <td key={index}>{col.render(row)}</td>
                            ))}
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Tables