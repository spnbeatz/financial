"use client"

import React, { useState } from 'react';
import { Form, Input, Button, Select } from 'antd';

const { Option } = Select;

const AddCompany = () => {
  const [form] = Form.useForm();
  
  const onFinish = (values: any) => {
    // Przykładowa logika przesyłania formularza
    console.log('Received values:', values);
    // Tutaj wyślij dane do API
  };

  return (
    <div className="add-company">
      <h1>Dodaj Nową Firmę</h1>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item name="name" label="Nazwa firmy" rules={[{ required: true, message: 'Proszę podać nazwę firmy' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="industry" label="Branża" rules={[{ required: true, message: 'Proszę podać branżę' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="address" label="Adres" rules={[{ required: true, message: 'Proszę podać adres' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="city" label="Miasto" rules={[{ required: true, message: 'Proszę podać miasto' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="country" label="Kraj" rules={[{ required: true, message: 'Proszę podać kraj' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="contact_person" label="Osoba kontaktowa" rules={[{ required: true, message: 'Proszę podać osobę kontaktową' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="contact_email" label="Email" rules={[{ required: true, message: 'Proszę podać email', type: 'email' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="contact_phone" label="Telefon" rules={[{ required: true, message: 'Proszę podać numer telefonu' }]}>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Dodaj firmę</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddCompany;
