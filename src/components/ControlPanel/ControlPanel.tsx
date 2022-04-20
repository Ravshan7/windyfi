import { ControlPanelButtonType, Structure } from "../../types"
import CreateObjectButton from "./ControlPanelButton"
import cableIcon from "../../assets/images/cables.png"
import wtg from "../../assets/images/wtg.png"
import hardstandIcon from "../../assets/images/hardstand.png"
import roadIcon from "../../assets/images/roads.png"
import { DrawLineStringMode, DrawRectangleMode, DrawCircleByDiameterMode } from "react-map-gl-draw"

const objectButtons: ControlPanelButtonType[] = [
    { title: { type: "wtg" }, icon: wtg, mode: new DrawCircleByDiameterMode() },
    { title: { type: "hardstand" }, icon: hardstandIcon, mode: new DrawRectangleMode() },
    { title: { type: "road" }, icon: roadIcon, mode: new DrawLineStringMode() },
    { title: { type: "cable" }, icon: cableIcon, mode: new DrawLineStringMode() }
]

type ControlPanelTypeProps = {
    setObjectToAdd: (objectToAdd: Structure) => void
    setMapEditorMode: (newMode: any) => void
}

export default function ControlPanel(props: ControlPanelTypeProps) {
    const { setObjectToAdd, setMapEditorMode } = props

    return (
        <div className="absolute bottom-0 flex w-full h-32 p-4 justify-evenly">
            {objectButtons.map((objectButton: ControlPanelButtonType, index: number) => (
                <CreateObjectButton
                    key={index}
                    controlPanelButton={objectButton}
                    setObjectToAdd={setObjectToAdd}
                    setMapEditorMode={setMapEditorMode}
                />
            ))}
        </div>
    )
}
