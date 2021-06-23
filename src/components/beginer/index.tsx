import React from 'react';
import { Row, Col, Button } from 'antd';
import { BeginerStl, PositionStyle } from './style';

export default function Beginer() {
  return (
    <BeginerStl>
      <PositionStyle span="24">
        <Button>Beginer</Button>
      </PositionStyle>
    </BeginerStl>
  );
}
