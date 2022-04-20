import { StructureObject } from "../../types"
import InputBox from "./InputBox"
import InfomrationSideBarText from "./InformationSideBarText"
import { XIcon } from "@heroicons/react/outline"
import DeleteTool from "../Buttons/DeleteButton"
import { capitalizeFirstLetter } from "../../helpers/capitalizeFirstLetter"
import { formatMoney } from "../../helpers/formatCurrency"

type InformationSidebarProps = {
    setShowInformationSidebar: (showInformationSidebar: boolean) => void
    activeMapObject: StructureObject | undefined
    deleteFeature: () => void
}

const InformationSidebar = (props: InformationSidebarProps) => {
    const { setShowInformationSidebar, activeMapObject, deleteFeature } = props

    const onButtonClick = () => {
        deleteFeature()
        setShowInformationSidebar(false)
    }

    return (
        <div className="absolute top-0 right-0 flex flex-col justify-between h-full overflow-y-auto bg-white w-52">
            <div>
                <div className="flex flex-row justify-between">
                    <h1 className="pt-3 pl-3 text-xl font-bold text-left font-rob">
                        {capitalizeFirstLetter(activeMapObject?.title)}
                    </h1>
                    <button
                        onClick={() => setShowInformationSidebar(false)}
                        className="flex content-center justify-center w-10 p-3 rounded hover:bg-secondary"
                    >
                        <XIcon />
                    </button>
                </div>
                <InputBox value={activeMapObject?.model} title={"Model:"} />

                {activeMapObject?.rotorDiameter ? (
                    <InfomrationSideBarText
                        value={activeMapObject?.rotorDiameter}
                        title={"Rotor diameter:"}
                    />
                ) : (
                    <div />
                )}

                {activeMapObject?.power ? (
                    <InfomrationSideBarText value={activeMapObject?.power} title={"Power (WM):"} />
                ) : (
                    <div />
                )}

                {activeMapObject?.price ? (
                    <InfomrationSideBarText
                        value={formatMoney(activeMapObject?.price)}
                        title={"Price:"}
                    />
                ) : (
                    <div />
                )}
            </div>
            <div className="flex justify-center m-6">
                <DeleteTool onButtonClick={onButtonClick} buttonText={"delete"} />
            </div>
        </div>
    )
}

export default InformationSidebar
