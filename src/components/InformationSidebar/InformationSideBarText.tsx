type InformationSidebarProps = {
    value: number | string | undefined
    title: string
}

const SideBarText = (props: InformationSidebarProps) => {
    const { value, title } = props
    return (
        <div className="text-left pl-5 mt-4">
            <h2 className=" font-rob text-sm">{title} </h2>
            <h1 className="font-rob font-bold text-m">{value}</h1>
        </div>
    )
}

export default SideBarText
