import React from 'react';
import { Table, Button } from 'antd';

const CreditEvaluations = ({ applicationId }: {applicationId: any}) => {
  const columns = [
    { title: 'Data oceny', dataIndex: 'evaluation_date', key: 'evaluation_date' },
    { title: 'Wynik', dataIndex: 'score', key: 'score' },
    { title: 'Ocena', dataIndex: 'remarks', key: 'remarks' },
    { title: 'Akcje', key: 'actions', render: (text: any, record: any) => (
      <Button type="link" href={`/credit-evaluations/${record._id}`}>Szczegóły</Button>
    ) },
  ];

  const data = [
    // Przykładowe dane
  ];

  return (
    <div className="credit-evaluations">
      <h1>Oceny Kredytowe</h1>
      <Button type="primary" href={`/credit-evaluations/new?applicationId=${applicationId}`}>Dodaj nową ocenę</Button>
{/*       <Table dataSource={data} columns={columns} /> */}
    </div>
  );
};

export default CreditEvaluations;
