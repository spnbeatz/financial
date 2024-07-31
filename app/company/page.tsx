"use client"

import React from 'react';
import { Table, Input, Button } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import { data } from '@/data/companies';

const CompanyList = () => {
  const columns = [
    { title: 'Nazwa firmy', dataIndex: 'name', key: 'name' },
    { title: 'Branża', dataIndex: 'industry', key: 'industry' },
    { title: 'Miasto', dataIndex: 'city', key: 'city' },
    { title: 'Kraj', dataIndex: 'country', key: 'country' },
    { title: 'Akcje', key: 'actions', render: (text: any, record: any) => (
      <Button type="link" href={`/company/${record._id}`}>Szczegóły</Button>
    ) },
  ];

  return (
    <div className="company-list">
      <h1>Lista Firm</h1>
      <Input placeholder="Szukaj firmy" prefix={<SearchOutlined />} />
      <Button type="primary" icon={<PlusOutlined />} href="/company/new">Dodaj nową firmę</Button>
      <Table dataSource={data} columns={columns} />
    </div>
  );
};

export default CompanyList;
