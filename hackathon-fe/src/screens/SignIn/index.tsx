import React, { useCallback, useEffect, useState } from "react";
import { Row, Col, Card, Button, Form, Input } from "antd";
import { Api } from "../../utils/Api";
import { setToken } from "../../utils/localstorage";
import { Screen } from "../../components/Screen";

function SignIn({ navigation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const _handleSubmit = useCallback(async () => {
    // callback
    console.log(email, password);

    if (email.length > 2 && password.length > 2) {
      setLoading(true);
      const { statusCode, data } = await Api.postRequest("/api/user/signin", {
        email,
        password,
      });
      setLoading(false);
      if (statusCode === 400 || statusCode === 500 || statusCode === 403) {
        setLoading(false);
        alert(data);
        return;
      }
      const { token } = JSON.parse(data);
      setToken(token);
      navigation.navigate("MainScreen");
    }
  }, [email, password]);

  return (
    <Screen>
      <Row justify="center" style={{ width: "100%" }}>
        <Col xl={6} lg={8} md={10} sm={12} xs={24}>
          <Card style={{ paddingTop: 45, height: "100%" }}>
            <Col span={24} className="typo-grey typo-center">
              <h2>Login Form</h2>
            </Col>
            <Form layout="vertical">
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Email is required" },
                  { type: "email", message: "Must be in email format" },
                ]}
                style={{ marginBottom: 15 }}
              >
                <Input
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: "Password is required" }]}
                style={{ marginBottom: 15 }}
              >
                <Input.Password
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Item>

              <Row gutter={[8, 8]} style={{ marginTop: 15 }} justify="end">
                <Col
                  xl={12}
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  className="typo-right"
                >
                  <Button
                    type="primary"
                    htmlType="submit"
                    onClick={_handleSubmit}
                  >
                    Log in
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    </Screen>
  );
}

export default SignIn;
