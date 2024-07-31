import React from 'react';
import { LineChart, PieChart, BarChart } from 'recharts'; // Przykladowe wykresy
import { Card, Table, Button } from 'antd'; // Komponenty UI

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="summary-cards">
        <Card title="Łączna liczba firm" bordered={false}>150</Card>
        <Card title="Łączna kwota wniosków kredytowych" bordered={false}>1,500,000 PLN</Card>
        <Card title="Średni wynik oceny kredytowej" bordered={false}>725</Card>
        <Card title="Liczba wniosków kredytowych" bordered={false}>200</Card>
      </div>

{/*       <div className="charts">
        <LineChart data={data} />
        <PieChart data={data} />
        <BarChart data={data} />
      </div> */}

{/*       <div className="recent-activities">
        <h2>Ostatnie aktywności</h2>
        <Table dataSource={recentActivities} columns={columns} />
      </div> */}

      <div className="quick-access">
        <Button type="primary">Dodaj nową firmę</Button>
        <Button type="primary">Dodaj nowe sprawozdanie finansowe</Button>
        <Button type="primary">Złóż nowy wniosek kredytowy</Button>
        <Button type="primary">Dodaj nową ocenę kredytową</Button>
      </div>

{/*       <div className="lists">
        <div className="companies-list">
          <h2>Lista firm</h2>
          <Table dataSource={companies} columns={companyColumns} />
        </div>
        <div className="credit-applications-list">
          <h2>Lista wniosków kredytowych</h2>
          <Table dataSource={creditApplications} columns={applicationColumns} />
        </div>
      </div> */}

      <div className="notifications">
        <h2>Powiadomienia</h2>
        {/* Komponent powiadomień */}
      </div>
    </div>
  );
};

export default Dashboard;
