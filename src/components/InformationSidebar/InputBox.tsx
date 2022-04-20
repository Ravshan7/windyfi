type InputBoxProps = {
    value: number | string | undefined
    title: string
}

const InputBox = (props: InputBoxProps) => {
    const { value, title } = props
    return (
        <div>
            <div className="m-4">
                <h2 className=" font-rob text-left text-sm"> {title} </h2>
                <select className="font-rob text-sm block appearance-none w-44 bg-white border border-primary text-m  px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    <option className="font-rob">{value}</option>
                </select>
            </div>
        </div>
    )
}

export default InputBox
