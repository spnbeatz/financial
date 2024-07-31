"use client"

import React from 'react';
import { Form, Input, Button, InputNumber } from 'antd';

const AddFinancialStatement = ({ companyId }: {companyId: any}) => {
  const [form] = Form.useForm();
  
  const onFinish = (values: any) => {
    // Przykładowa logika przesyłania formularza
    console.log('Received values:', values);
    // Tutaj wyślij dane do API
  };

  return (
    <div className="add-financial-statement">
      <h1>Dodaj Nowe Sprawozdanie Finansowe</h1>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item name="year" label="Rok" rules={[{ required: true, message: 'Proszę podać rok' }]}>
          <InputNumber min={2000} max={new Date().getFullYear()} />
        </Form.Item>
        <Form.Item name="total_revenue" label="Przychody" rules={[{ required: true, message: 'Proszę podać przychody' }]}>
          <InputNumber min={0} />
        </Form.Item>
        <Form.Item name="net_income" label="Dochód Netto" rules={[{ required: true, message: 'Proszę podać dochód netto' }]}>
          <InputNumber min={0} />
        </Form.Item>
        <Form.Item name="total_assets" label="Aktywa" rules={[{ required: true, message: 'Proszę podać aktywa' }]}>
          <InputNumber min={0} />
        </Form.Item>
        <Form.Item name="total_liabilities" label="Zobowiązania" rules={[{ required: true, message: 'Proszę podać zobowiązania' }]}>
          <InputNumber min={0} />
        </Form.Item>
        <Form.Item name="equity" label="Kapitał Własny" rules={[{ required: true, message: 'Proszę podać kapitał własny' }]}>
          <InputNumber min={0} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Dodaj sprawozdanie</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddFinancialStatement;
