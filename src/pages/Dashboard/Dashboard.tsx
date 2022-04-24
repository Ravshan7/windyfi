import { Layout, Menu, Breadcrumb } from "antd"
import { Link, Navigate, Route, Routes } from "react-router-dom"
import MyCompany from "./MyCompany"
import Projects from "./Projects"
import WTGDatabase from "./WTGDatabase"
import BOPDatabase from "./BOPDatabase"
import ProjectTeam from "./ProjectTeam"
import { useAppDispatch } from "../../store"
import { isAuthAC } from "../../store/reducer/app"
import Landing from "../../views/Landing"
import {Portal} from "react-portal"

const { Header, Content, Sider } = Layout

const Dashboard = () => {
    const dispatch = useAppDispatch()

    return <Layout style={{ height: "100vh" }}>
        <Header className="header" style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
                <Menu.Item onClick={() => {
                    localStorage.removeItem("accessToken")
                    dispatch(isAuthAC(false))
                }} key="1">Выход</Menu.Item>
            </Menu>
        </Header>
        <Layout>
            <Sider width={200} className="site-layout-background">
                <Menu
                    mode="inline"
                    defaultSelectedKeys={["1"]}
                    defaultOpenKeys={["sub1"]}
                    style={{ height: "100%", borderRight: 0 }}
                >
                    <Menu.Item key="1"><Link to="/mycompany">My company</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/projects">Projects</Link></Menu.Item>
                    <Menu.Item key="3"><Link to="/wtgdatabase">WTG Database</Link></Menu.Item>
                    <Menu.Item key="4"><Link to="/dopdatabase">BOP Database</Link></Menu.Item>
                    <Menu.Item key="5"><Link to="/projectteam">Project Team</Link></Menu.Item>
                </Menu>
            </Sider>
            <Layout style={{ padding: "0 24px 24px" }}>
                <Breadcrumb style={{ margin: "16px 0" }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280
                    }}
                >
                    <Routes>
                        <Route path="/mycompany" element={<MyCompany />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/landing" element={
                            <Portal>
                                <div className="mapsBlock">
                                    <Landing />
                                </div>
                            </Portal>} />
                        <Route path="/wtgdatabase" element={<WTGDatabase />} />
                        <Route path="/dopdatabase" element={<BOPDatabase />} />
                        <Route path="/projectteam" element={<ProjectTeam />} />
                        <Route path="*" element={<Navigate to="/mycompany" replace />} />
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    </Layout>
}

export default Dashboard