"use client"

import React from 'react';
import { Form, Input, Button, InputNumber, DatePicker } from 'antd';

const AddCreditApplication = ({ companyId }: {companyId: any}) => {
  const [form] = Form.useForm();
  
  const onFinish = (values: any) => {
    // Przykładowa logika przesyłania formularza
    console.log('Received values:', values);
    // Tutaj wyślij dane do API
  };

  return (
    <div className="add-credit-application">
      <h1>Złóż Nowy Wniosek Kredytowy</h1>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item name="application_date" label="Data wniosku" rules={[{ required: true, message: 'Proszę podać datę wniosku' }]}>
          <DatePicker />
        </Form.Item>
        <Form.Item name="credit_amount" label="Kwota kredytu" rules={[{ required: true, message: 'Proszę podać kwotę kredytu' }]}>
          <InputNumber min={0} />
        </Form.Item>
        <Form.Item name="credit_term" label="Okres kredytu (miesiące)" rules={[{ required: true, message: 'Proszę podać okres kredytu' }]}>
          <InputNumber min={0} />
        </Form.Item>
        <Form.Item name="purpose" label="Cel kredytu" rules={[{ required: true, message: 'Proszę podać cel kredytu' }]}>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Złóż wniosek</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddCreditApplication;
