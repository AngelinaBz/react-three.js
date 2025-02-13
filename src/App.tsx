import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Form, Input, Switch } from 'antd';
import { OrbitControls } from '@react-three/drei';
import { Box } from './components/box/Box';
import './App.css';

interface BoxFormValues {
  length: number;
  width: number;
  height: number;
}

const App: React.FC = () => {
  const [vertices, setVertices] = useState<number[]>([]);
  const [indices, setIndices] = useState<number[]>([]);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleSubmit = async (values: BoxFormValues) => {
    try {
      const response = await fetch('http://localhost:3000/api/box', {
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
    <div className={`three-container ${darkMode ? 'dark' : 'light'}`}>
      <Form onFinish={handleSubmit} className="form">
        <Form.Item label="Length" name="length">
          <Input type="number" />
        </Form.Item>
        <Form.Item label="Width" name="width">
          <Input type="number" />
        </Form.Item>
        <Form.Item label="Height" name="height">
          <Input type="number" />
        </Form.Item>
        <Form.Item>
          <button type="submit">Calculate</button>
        </Form.Item>
        <Form.Item>
          <Switch checked={darkMode} onChange={setDarkMode} />
        </Form.Item>
      </Form>
      <div className="box">
        <Canvas className="three-d">
          <OrbitControls></OrbitControls>
          <Box vertices={vertices} indices={indices}></Box>
        </Canvas>
      </div>
    </div>
  );
};

export default App;
