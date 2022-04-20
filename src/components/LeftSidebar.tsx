import { Feature } from "@nebula.gl/edit-modes"
import { Link } from "react-router-dom"
import DeleteTool from "./Buttons/DeleteButton"

type SidebarProps = {
    setMapType: (mapType: string) => void
    setFeatures: (value: Feature[]) => void
    updateExport: (features: Feature[]) => void
}

const LeftSidebar = (props: SidebarProps) => {
    const { setMapType, setFeatures, updateExport } = props

    const deleteAllFeatures = () => {
        setFeatures([])
        updateExport([])
    }

    return (
        <div className="absolute top-0 left-0 flex flex-col justify-between h-full p-4 shadow-2xl bg-darkGray">
            <div className="flex flex-col space-y-8">
                <button
                    onClick={() =>
                        // setMapType("mapbox://styles/shamstjk/ckewobxzb0dez19pb18f03svv")

                        setMapType("mapbox://styles/spireconsulting/ckewobxzb0dez19pb18f03svv")
                    }
                    className="px-2 py-3 font-semibold text-white border rounded font-rob bg-border-grey hover:border-primary"
                >
                    Satelite map
                </button>
                <button
                    onClick={() =>
                        // setMapType("mapbox://styles/shamstjk/ckwuwic1f5jqa14mkn7mn3ewf")

                        setMapType("mapbox://styles/spireconsulting/ckwuwic1f5jqa14mkn7mn3ewf")
                    }
                    className="px-2 py-3 font-semibold text-white bg-transparent border rounded font-rob border-grey hover:border-primary"
                >
                    Terrain map
                </button>
                
                <button
                    onClick={() =>
                        // setMapType("mapbox://styles/shamstjk/ckwuwic1f5jqa14mkn7mn3ewf")
                        setMapType("mapbox://styles/mapbox/dark-v10")
                    }
                    className="px-2 py-3 font-semibold text-white bg-transparent border rounded font-rob border-grey hover:border-primary"
                >
                    Wind direction
                </button>


            </div>
            <div className="flex flex-col space-y-8">
                <button className="inline-flex items-center justify-center w-full p-2 font-bold text-gray-800 bg-gray-300 rounded hover:bg-gray-400">
                    <Link to="/export" className="inline-flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 pr-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path
                                fillRule="evenodd"
                                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Preview
                    </Link>
                </button>
                <DeleteTool onButtonClick={deleteAllFeatures} buttonText={"Delete all"} />
            </div>
        </div>
    )
}
export default LeftSidebar
