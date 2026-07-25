import { FadeLoader } from "react-spinners"

interface LoaderProps {
    color?: string;
    loading?: boolean;
    size?: number;
}

const Loader = ({ color = "#000000", loading, size }: LoaderProps) => {
    return (
       <FadeLoader
        color={color}
        loading={loading}
        height={15}
        width={5}
        radius={2}
        margin={2}
        aria-label="Loading Spinner"
      />
    )
}

export default Loader