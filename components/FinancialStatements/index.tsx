import React from 'react';
import { Table, Button } from 'antd';

const FinancialStatements = ({companyId}: {companyId: any}) => {
  const columns = [
    { title: 'Rok', dataIndex: 'year', key: 'year' },
    { title: 'Przychody', dataIndex: 'total_revenue', key: 'total_revenue' },
    { title: 'Dochód Netto', dataIndex: 'net_income', key: 'net_income' },
    { title: 'Aktywa', dataIndex: 'total_assets', key: 'total_assets' },
    { title: 'Zobowiązania', dataIndex: 'total_liabilities', key: 'total_liabilities' },
    { title: 'Kapitał Własny', dataIndex: 'equity', key: 'equity' },
    { title: 'Akcje', key: 'actions', render: (text: any, record: any) => (
      <Button type="link" href={`/financial-statements/${record._id}`}>Szczegóły</Button>
    ) },
  ];

/*   const data = [
    // Przykładowe dane
  ]; */

  return (
    <div className="financial-statements">
      <h1>Sprawozdania Finansowe</h1>
      <Button type="primary" href={`/financial-statements/new?companyId=${companyId}`}>Dodaj nowe sprawozdanie</Button>
{/*       <Table dataSource={data} columns={columns} /> */}
    </div>
  );
};

export default FinancialStatements;