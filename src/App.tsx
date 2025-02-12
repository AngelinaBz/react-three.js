import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Form, Input } from 'antd';
import { OrbitControls } from '@react-three/drei';
import { Box } from './components/box/Box';
import './App.css';

const App: React.FC = () => {
  const [length, setLength] = useState<number>();
  const [width, setWidth] = useState<number>();
  const [height, setHeight] = useState<number>();
  const [vertices, setVertices] = useState<number[]>([]);
  const [indices, setIndices] = useState<number[]>([]);

  const handleSubmit = async (values: any) => {
    try {
      const response = await fetch('http://localhost:5001/api/box', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          length: values.length,
          width: values.width,
          height: values.height,
        }),
      });
      const data = await response.json();
      setVertices(data.vertices);
      setIndices(data.indices);
    } catch (error) {
      console.error('Error fetching box data:', error);
    }
  };

  return (
    <div>
      <Form onFinish={handleSubmit}>
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
      <Canvas>
        <OrbitControls></OrbitControls>
        <Box vertices={vertices} indices={indices}></Box>
      </Canvas>
    </div>
  );
};

export default App;
