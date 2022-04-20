import { useEffect } from "react"
import { useAppDispatch } from "../../store"
import { getProjectsApi } from "../../http/projects"
import { useTypedSelector } from "../../hooks/useTypedSelector"

const Projects = () => {
    const dispatch = useAppDispatch()
    const { projectList } = useTypedSelector(state => state.projects)

    useEffect(() => {
        dispatch(getProjectsApi())
    }, [])

    return (
        <div>
            <h1>{JSON.stringify(projectList)}</h1>
        </div>
    )
}

export default Projects