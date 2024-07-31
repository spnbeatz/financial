import React from 'react';
import { Table, Button } from 'antd';

const CreditApplications = ({ companyId }: {companyId: any}) => {
  const columns = [
    { title: 'Data wniosku', dataIndex: 'application_date', key: 'application_date' },
    { title: 'Kwota kredytu', dataIndex: 'credit_amount', key: 'credit_amount' },
    { title: 'Okres kredytu (miesiące)', dataIndex: 'credit_term', key: 'credit_term' },
    { title: 'Status', dataIndex: 'status', key: 'status' },
    { title: 'Akcje', key: 'actions', render: (text: any, record: any) => (
      <Button type="link" href={`/credit-applications/${record._id}`}>Szczegóły</Button>
    ) },
  ];

/*   const data = [
    // Przykładowe dane
  ]; */

  return (
    <div className="credit-applications">
      <h1>Wnioski Kredytowe</h1>
      <Button type="primary" href={`/credit-applications/new?companyId=${companyId}`}>Złóż nowy wniosek</Button>
{/*       <Table dataSource={data} columns={columns} /> */}
    </div>
  );
};

export default CreditApplications;
