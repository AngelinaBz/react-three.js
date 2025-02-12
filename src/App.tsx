import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Form, Input } from 'antd';
import { Box } from './components/box/Box';
import './App.css';

const App: React.FC = () => {
  const [length, setLength] = useState<number>(1);
  const [width, setWidth] = useState<number>(1);
  const [height, setHeight] = useState<number>(1);

  return (
    <div>
      <Form>
        <Form.Item label="Length" name="length">
          <Input
            type="number"
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </Form.Item>
        <Form.Item label="Width" name="width">
          <Input
            type="number"
            onChange={(e) => setWidth(Number(e.target.value))}
          />
        </Form.Item>
        <Form.Item label="Height" name="height">
          <Input
            type="number"
            onChange={(e) => setHeight(Number(e.target.value))}
          />
        </Form.Item>
        <Form.Item>
          <button type="submit">Calculate</button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default App;
