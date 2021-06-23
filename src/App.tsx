import AuthUser from 'components/auth';
import Beginer from 'components/beginer';
import ItemsTable from 'components/itemsTable';
import ShowSucess from 'components/showSuccess';
import ShowTotal from 'components/showTotal';
import React from 'react';
import { AppStyle, ShowTotalStl, SuccessBox, SuccessBoxSte, MainApp } from 'app.style';
import { Row, Col } from 'antd';
function App() {
  return (
    <AppStyle>
      <Row justify="end">
        <AuthUser />
      </Row>
      <MainApp>
        <h1>Bầu Cua</h1>
        <ShowTotalStl>
          <Col span="24">
            <ShowTotal />
          </Col>
        </ShowTotalStl>
        <Row>
          <Col offset="4" span="12">
            <ItemsTable />
          </Col>
          <SuccessBox>
            <SuccessBoxSte
              style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}
            >
              <ShowSucess />
            </SuccessBoxSte>
            <Col>
              <Beginer />
            </Col>
          </SuccessBox>
        </Row>
      </MainApp>
    </AppStyle>
  );
}

export default App;
