import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Row, Col, Collapse } from 'antd';
import LeftContent from './components/Container';

const { Panel } = Collapse;

export default function Index() {
  return (
    <Row>
      <Col span={6}>
        <Collapse>
          <Panel header="通用1" key="general">
            <DndProvider backend={HTML5Backend}>
              <LeftContent />
            </DndProvider>
          </Panel>
        </Collapse>
      </Col>
      <Col span={12}>{/* <Main /> */}</Col>
      <Col span={6}>12 </Col>
    </Row>
  );
}
