import React, { useState } from 'react';
import { Row, Col } from 'antd';
export default function ShowSucess() {
  const [isResult, setIsResult] = useState(true);
  const Result = () => (
    <Row>
      <Col span="24">
        <Row justify="space-around">ket qua 1</Row>
      </Col>
      <Col span="24" style={{ margin: '40px 0' }}>
        <Row justify="space-around">
          <Col>ket qua 2</Col>
          <Col>ket qua 3</Col>
        </Row>
      </Col>
    </Row>
  );
  if (isResult) return <Result />;
  return (
    <Row>
      <Col span="24" style={{ margin: '0 0 50px 0' }}>
        <img
          src="https://494555-1562431-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/05/X%C3%B3c-%C4%91%C4%A9a-2020-xd034-3.webp"
          height="340"
          width="330"
        />
      </Col>
    </Row>
  );
}
