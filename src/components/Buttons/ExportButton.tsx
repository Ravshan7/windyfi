import React from "react"

// interface to declare all our prop types
interface Props {
    children: React.ReactNode
    onClick: () => void
    variant?: string // default, primary, info, success, warning, danger, dark
    size?: string // sm, md, lg
    disabled?: boolean
}

// button component, consuming props
const ExportButton: React.FC<Props> = ({ children, onClick, disabled, ...rest }) => {
    return (
        <button
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 inline-flex items-center"
            onClick={onClick}
            disabled={disabled}
            {...rest}
        >
            {children}
        </button>
    )
}

export default ExportButton
