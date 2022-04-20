import { ControlPanelButtonType, Structure } from "../../types"
import { useState } from "react"

import ModalWTG from "./ModalWTG"

type CreateObjectbuttonProps = {
    controlPanelButton: ControlPanelButtonType
    setObjectToAdd: (structureType: Structure) => void
    setMapEditorMode: (newMode: any) => void
}

export default function ControlPanelButton(props: CreateObjectbuttonProps) {
    const { controlPanelButton, setObjectToAdd, setMapEditorMode } = props

    const [showModal, setShowModal] = useState<boolean>(false)
    const handleClick = (structureType: string | Structure) => {
        if (typeof structureType != "string" && structureType.type == "wtg") {
            setShowModal(true)
        } else if (typeof structureType === "string" && structureType != "wtg") {
            controlPanelButton.title.model = structureType
            setObjectToAdd(controlPanelButton.title)

            setMapEditorMode(controlPanelButton.mode)
        } else {
            setObjectToAdd(controlPanelButton.title)
            setMapEditorMode(controlPanelButton.mode)
        }
    }

    return (
        <div>
            <div
                onClick={() => handleClick(controlPanelButton.title)}
                className="w-20 h-20 border-2 border-gray-100 rounded-md shadow-md cursor-pointer hover:shadow-2xl backdrop-filter backdrop-blur-sm bg-opacity-60"
            >
                <img className="w-full h-full" src={controlPanelButton.icon} />
            </div>
            {showModal ? <ModalWTG setShowModal={setShowModal} handleClick={handleClick} /> : null}
        </div>
    )
}
