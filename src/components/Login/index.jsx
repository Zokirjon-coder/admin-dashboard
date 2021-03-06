import { useContext } from "react";
import { Form, Input, Button } from "antd";
import axios from "axios";
import "antd/dist/antd.js";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { AuthProviderAPI } from "../../context/Auth";

const Login = () => {
    const { setAuth, setToken } = useContext(AuthProviderAPI);
    const navigate = useNavigate();

    const onFinish = (values) => {
        const authUser = async (userInfo) => {
            const BaseUrl = "https://api.trailer-test.nightwell-logistics.com";
            await axios
                .post(`${BaseUrl}/api/auth/login`, { ...userInfo, "firebaseToken": "string" })
                .then((resp) => resp.data)
                .then((data) => {
                    if (data?.success) {
                        setAuth(true);
                        setToken(data?.meta?.token);
                        localStorage.setItem("auth", true);
                        localStorage.setItem("token", data?.meta?.token);
                        navigate("/dashboard");
                    }
                })
                .catch(() => alert('login yoki parol hato'));
        };
        authUser(values);
    };

    const onFinishFailed = (errorInfo) => {
        alert(errorInfo)
    };

    return (
        <div className="form-container">
            <div className="form">
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: "Please input your email!",
                            },
                        ]}
                    >
                        <Input autoFocus autoComplete="on" />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your password!",
                            },
                        ]}
                    >
                        <Input.Password autoComplete="true" />
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Login;
