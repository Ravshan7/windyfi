import {
    Form,
    Input,
    Checkbox,
    Button,
    DatePicker, Typography
} from "antd"
import { useAppDispatch } from "../../store"
import { registrationApi } from "../../http/auth"
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};
const { Title } = Typography;



const Registration = () => {
    const [form] = Form.useForm();
    const dispatch = useAppDispatch()

    const onFinish = (values: any) => {
        dispatch(registrationApi({
            ...values,
            birth_date: values.birth_date.format('YYYY-MM-DD')
        }))
    };


    return (
        <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
                residence: ['zhejiang', 'hangzhou', 'xihu'],
                prefix: '86',
            }}
            scrollToFirstError
        >

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Title level={2} style={{marginBottom: "0px"}}>Register</Title>
            </Form.Item>

            <Form.Item
                name="first_name"
                label="Firstname"
                rules={[
                    {
                        required: true,
                        message: 'Please input your firstname!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="last_name"
                label="LastName"
                rules={[
                    {
                        required: true,
                        message: 'Please input your lastname!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="middle_name"
                label="Middlename"
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="password1"
                label="Password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="password2"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password1') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item name="birth_date" label="DatePicker"  rules={[{ type: 'object' as const, required: true, message: 'Please select time!' }]}>
                <DatePicker />
            </Form.Item>

            <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                    {
                        validator: (_, value) =>
                            value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                    },
                ]}
                {...tailFormItemLayout}
            >
                <Checkbox>
                    I have read the <a href="">agreement</a>
                </Checkbox>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    Register
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Registration