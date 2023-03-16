import { Form, Input, Button } from "antd";

import { LoginEmail } from "@entities";
import { authLoginEmailRequest, authRegisterRequest } from "@store/Auth";
import { useAppDispatch } from "@store/index";
import { FormType } from "@utils";

import { Props } from "./index.type";

import "antd/dist/antd.css";

const UIAuthForm = ({ loading, formType }: Props) => {
  const dispatch = useAppDispatch();
  const handlerEmail = (body: LoginEmail) => {
    switch (formType) {
      case FormType.LOGIN:
        return dispatch(authLoginEmailRequest(body));
      case FormType.REGISTER:
        return dispatch(authRegisterRequest(body));
    }
  };

  return (
    <Form
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      colon={false}
      onFinish={handlerEmail}
      id="authForm"
    >
      <Form.Item
        label="Username"
        name="username"
        // rules={[{ required: true, message: "Please enter email" }]}
        // ValidateStatus='success'
        // hasFeedback
      >
        <Input id="username" />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        // rules={[{ required: true, message: "Please enter password" }]}
        // ValidateStatus='error'
        // hasFeedback
      >
        <Input type="password" name="password" id="password" />
      </Form.Item>
      <Form.Item wrapperCol={{ span: 8 }}>
        <Button name="submit" htmlType="submit" key="submit">
          {formType.charAt(0).toUpperCase() + formType.slice(1)}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UIAuthForm;
