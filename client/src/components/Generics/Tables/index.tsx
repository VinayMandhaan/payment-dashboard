
import { TableProps } from "../../../types/ui/tables";

function Tables<T>({columns, data}: TableProps<T>) {

    return (
        <table>
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
                    data.map((row) => (
                        <tr>
                            {columns.map((col) => (
                                <td>{col.render(row)}</td>
                            ))}
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Tables