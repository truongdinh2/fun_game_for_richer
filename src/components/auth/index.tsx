import React from 'react';
import Signout from './signout';
import { Row } from 'antd';
export default function AuthUser() {
  return (
    <Row justify="end">
      <Signout />
    </Row>
  );
}
