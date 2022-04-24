import { useEffect } from "react"
import { useAppDispatch } from "../../store"
import { getProjectsApi } from "../../http/projects"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { Link } from "react-router-dom"

const Projects = () => {
    const dispatch = useAppDispatch()
    const { projectList } = useTypedSelector(state => state.projects)

    useEffect(() => {
        dispatch(getProjectsApi())
    }, [])

    return (
        <div>
            <Link to="/landing">{JSON.stringify(projectList)}</Link>
        </div>
    )
}

export default Projects