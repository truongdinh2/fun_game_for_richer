import { Button, Col, Form, Input, Row, Spin, Typography } from 'antd';
import React, { useMemo, useState } from 'react';
import { ContentContainer, FormContent, FormLayout, FormSider } from './style';

const { Title, Paragraph } = Typography;

const Signin = () => {
  const [loading, setLoading] = useState(false);

  const [form] = Form.useForm();

  const onFinish = async (values: unknown) => {
    setLoading(true);

    // const res = await fetchAPI({
    //   url: LOGIN_API,
    //   method: 'POST',
    //   payload: values,
    // });

    // const results: RESP = await res.json();

    // if (!res.ok) {
    //   setLoading(false);
    //   return notification.error({
    //     message: results.message,
    //   });
    // }

    // notification.success({
    //   message: results.message,
    // });

    // setLoading(false);
  };

  const formItemLayout = useMemo(
    () => ({
      labelCol: { span: 24 },
      wrapperCol: { span: 24 },
    }),
    []
  );

  return (
    <FormLayout>
      <FormContent>
        <ContentContainer>
          <Spin spinning={loading}>
            <Row justify="center">
              <Col span={24}>
                <Row justify="center">
                  <Title>Đăng nhập</Title>
                </Row>
              </Col>
            </Row>
            <Form
              {...formItemLayout}
              layout="vertical"
              form={form}
              name="register"
              onFinish={onFinish}
              scrollToFirstError
            >
              <Form.Item
                name="username"
                label="Tên người dùng"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập tên người dùng!',
                  },
                  {
                    pattern: /^[a-zA-Z0-9_]+$/,
                    message: 'Không nhập kí tự đặc biệt',
                  },
                  {
                    validator(_, value) {
                      if (!value.match(new RegExp('[A-Z]'))) {
                        return Promise.resolve('HI');
                      }
                      return Promise.reject(new Error('Không nhập chữ viết hoa'));
                    },
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="password"
                label="Mật khẩu"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập mật khẩu!',
                  },
                ]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>

              <Form.Item>
                <Button type="primary" block htmlType="submit" loading={loading}>
                  Đăng nhập
                </Button>
              </Form.Item>
              <Row justify="space-between">
                <Col>
                  <Paragraph>
                    Chưa có tài khoản?
                    {/* <Link href="/signup"> */}
                    <a> Đăng ký ngay</a>
                    {/* </Link> */}
                  </Paragraph>
                </Col>
                <Col>{/* <Link href="#">Quên mật khẩu?</Link> */}</Col>
              </Row>
            </Form>
          </Spin>
        </ContentContainer>
      </FormContent>
      <FormSider>{/* <CarouselSelect /> */}</FormSider>
    </FormLayout>
  );
};
export default Signin;
