import { Form, Input, Button, Checkbox, Typography } from 'antd';
import { loginApi } from "../../http/auth"
import { useAppDispatch } from "../../store"
import { Link } from "react-router-dom"
const { Title } = Typography;


const Login = () => {
    const dispatch = useAppDispatch()
    const onFinish = (values: any) => {
        delete values.remember
        dispatch(loginApi(values))
    }

    return (
        <div>
            <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                <Title level={2} style={{marginBottom: "0px"}}>Login</Title>
            </Form.Item>

            <Form
                name="basic"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 6, span: 16 }}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                    Or <Link to="/registration">register now!</Link>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login