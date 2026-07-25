interface FilterChipsProps {
    options: string[];
    value: string;
    onChange: (value: string) => void;
}


const FilterChips = ({options, value, onChange}:FilterChipsProps) => {
    return (
        <div className="filters">
            {
                options.map((option) => (
                    <button key={option} className={`filter-chip ${value == option ? 'active' : ''}`} onClick={() => onChange(option)}>
                        {option.toUpperCase()}
                    </button>
                ))
            }
        </div>
    )
}

export default FilterChips