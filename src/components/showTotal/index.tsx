import React from 'react';
import { Row, Col } from 'antd';
import { UlListStyle, LiListDetailStl, SummaryStl } from './style';
export default function ShowTotal() {
  return (
    <Row>
      <Col offset={4} span="12">
        <SummaryStl>
          <div>Số tiền bạn cược: 100 tèn</div>
          <div>Tổng số tiền các game thủ cược: 1000 tèn</div>
        </SummaryStl>
      </Col>
      <Col span="8">
        <Row>Chi tiết</Row>
        <Row>
          <Col span="8">
            <UlListStyle>
              {data.map((nb, index) => (
                <>
                  {index < 3 && (
                    <LiListDetailStl key={index}>
                      số {index + 1}: {nb.ten} tèn
                    </LiListDetailStl>
                  )}
                </>
              ))}
            </UlListStyle>
          </Col>
          <Col>
            <UlListStyle>
              {data.map((nb, index) => (
                <>
                  {index >= 3 && (
                    <LiListDetailStl key={index}>
                      số {index + 1}: {nb.ten} tèn
                    </LiListDetailStl>
                  )}
                </>
              ))}
            </UlListStyle>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
const data = [
  { ten: 100, name: 'cua' },
  { ten: 100, name: 'cua' },
  { ten: 100, name: 'cua' },
  { ten: 100, name: 'cua' },
  { ten: 100, name: 'cua' },
  { ten: 100, name: 'cua' },
];
