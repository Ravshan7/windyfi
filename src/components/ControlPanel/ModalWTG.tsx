import { useEffect, useState } from "react"
import { StructureObject } from "../../types"
import { getObjectTypes } from "../../utils/getObjectTypes"

type ModalWTGProps = {
    setShowModal: (setShowModal: boolean) => void
    handleClick: (structureType: string) => void
}

export default function ModalWTG(props: ModalWTGProps) {
    const { setShowModal, handleClick } = props
    const [wtgs, setWtgs] = useState<StructureObject[]>([])

    const handleModalClick = (typeOfWTG: string) => {
        handleClick(typeOfWTG)
        setShowModal(false)
    }

    useEffect(() => {
        const temp_wtgs = getObjectTypes().filter(
            (object: StructureObject) => object.title === "wtg"
        )
        setWtgs(temp_wtgs)
    }, [])

    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                <div className="relative w-auto max-w-3xl mx-auto my-6">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-center justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                            <h3 className=" font-rob text-3xl font-semibold">Choose WTG</h3>
                        </div>

                        <div className="font-rob relative p-6 flex items-center justify-center">
                            {wtgs.map((wtg: StructureObject, index: number) => (
                                <p
                                    key={index}
                                    className="my-4 text-blueGray-500 text-lg leading-relaxed"
                                >
                                    <button
                                        className=" font-rob m-3 p-2 bg-primary text-white hover:bg-secondary rounded-lg "
                                        onClick={() => handleModalClick(wtg.model)}
                                    >
                                        {wtg.model}
                                    </button>
                                </p>
                            ))}
                        </div>

                        <div className="flex items-center justify-center p-6 border-t border-solid rounded-b border-blueGray-200">
                            <button
                                className="text-black border-2 font-rob  border-primary rounded-lg font-bold uppercase px-6 py-2 text-sm hover:bg-secondary mr-1 mb-1 ease-linear transition-all duration-150"
                                onClick={() => setShowModal(false)}
                            >
                                Close modal
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed inset-0 z-40 bg-black opacity-40" />
        </>
    )
}
