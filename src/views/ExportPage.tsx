import { Link } from "react-router-dom"
import ExportButton from "../components/Buttons/ExportButton"
import ExportTable from "../components/ExportTable/ExportTable"
import download_table_as_csv from "../helpers/exportToCSV"

export default function ExportPage() {
    return (
        <div className="px-8 py-8">
            <div className="flex justify-between">
                <Link
                    to="/"
                    style={{ background: "grey" }}
                    className="inline-flex items-center px-2 py-2 font-semibold text-white bg-transparent border rounded font-rob border-grey hover:border-primary"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                    </svg>
                    Back
                </Link>
                <ExportButton
                    onClick={() => download_table_as_csv("Windify")}
                    variant="default"
                    size="sm"
                >
                    <svg
                        className="w-4 h-4 mr-2 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                    </svg>
                    Export to csv
                </ExportButton>
            </div>
            <ExportTable />
        </div>
    )
}
