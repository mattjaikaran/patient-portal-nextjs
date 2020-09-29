import { Form, Input, Button, Checkbox } from 'antd'
import { useRouter } from 'next/router'
import axios from 'axios'
import './style.scss'

const LoginForm = () => {
  const apiURL = process.env.NEXT_PUBLIC_API_URL
  
  const router = useRouter()
  const onFinish = async (values) => {
    console.log('Received values of form: ', values)
    try {
      const response = await axios.post(`${apiURL}/auth/login`, values)
      console.log(response)
      if (response.status === 200) {
        // set global state user
        console.log('sup')
        // then redirect to dashboard page
        // router.push('/dashboard')
      }
    } catch (error) {
      console.log(error.message)
    }
  }
  const onFailed = ({values, errorFields}) => {
    console.log('values', values)
    console.log('errorFields', errorFields)
  }

  return (
    <Form
      name="normal_login"
      className="login-form"
      onFinish={onFinish}
      onFinishFailed={onFailed}
      initialValues={{ remember: true }}>
      <Form.Item
        name="email"
        label="E-mail"
        className="label"
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
        hasFeedback
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        className="label"
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
      <Form.Item>
        <Form.Item 
          name="remember" 
          valuePropName="checked"
          noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button 
          type="primary" 
          htmlType="submit" 
          className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm