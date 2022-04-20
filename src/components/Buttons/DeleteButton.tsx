import { TrashIcon } from "@heroicons/react/outline"

type DeleteToolProps = {
    onButtonClick: () => void
    buttonText: string
}

export default function DeleteTool(props: DeleteToolProps) {
    const { onButtonClick, buttonText } = props

    return (
        <button
            className="flex flex-row content-center justify-between px-4 py-2 rounded-lg cursor-pointer bg-red"
            onClick={() => onButtonClick()}
        >
            <TrashIcon width={24} height={24} color="white" className="pr-2 cursor-pointer" />
            <p className="text-white">{buttonText}</p>
        </button>
    )
}
