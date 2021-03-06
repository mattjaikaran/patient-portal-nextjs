import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { 
  useRecoilState, 
  useRecoilValue,
  selector
} from 'recoil'
import {
  Form,
  Input,
  Modal,
  Checkbox,
  Button,
} from 'antd'
import './style.scss'
import { userState } from '../../recoil/atom'

const apiURL = process.env.NEXT_PUBLIC_API_URL

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 24,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 24,
    },
  },
}

const RegistrationForm = () => {
  const [form] = Form.useForm()
  const router = useRouter()
  const [user, setUser] = useRecoilState(userState)
  console.log(user)

  const onFinish = async (values) => {
    console.log('Received values of form: ', values)
    try {
      const response = await axios.post(`${apiURL}/auth/register`, values)
      console.log(response)
      if (response.status === 200) {
        setUser(values)
        console.log(user)
        // router.push('/dashboard')
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  const [visible, setVisible] = useState(false)
  const showModal = (e) => {
    e.preventDefault()
    setVisible(true)
  }
  const handleOk = () => setVisible(false)
  const handleCancel = () => setVisible(false)

  return (
    <Form
      {...formItemLayout}
      form={form}
      className="register-form"
      name="register"
      onFinish={onFinish}
      scrollToFirstError>
      <Form.Item
        name="username"
        label="Username"
        className="label"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}>
        <Input />
      </Form.Item>
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
        ]}>
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
        hasFeedback>
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        className="label"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve()
              }

              return Promise.reject('The two passwords that you entered do not match!')
            },
          }),
        ]}>
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        className="checkbox-wrapper"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject('Should accept agreement'),
          },
        ]}>
        <Checkbox className="checkbox-content">
          I have read the <a href="" onClick={showModal}>agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
      <Modal
        title="Agreement"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}>
        <p className="disclaimer">
          By registering you are allowing us to do whatever with your information. And if you try to sue us we will sue the shit out of you.
        </p>
      </Modal>
    </Form>
  )
}

export default RegistrationForm