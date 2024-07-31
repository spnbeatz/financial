"use client"

import React, { useEffect, useState } from 'react';
import { Card, Descriptions, Tabs } from 'antd';
import { data } from '@/data/companies';
import FinancialStatements from '@/components/FinancialStatements';
import CreditApplications from '@/components/CreditApplications';
import CreditEvaluations from '@/components/CreditEvaluations';

const { TabPane } = Tabs;

const CompanyDetails = ({params}: {params: any}) => {

  const { id } = params;

  const [ company, setCompany ] = useState<typeof data[0] | undefined>();

  useEffect(()=>{
    if(id){
        const comp = data.find((value) => value._id == id);
        setCompany(comp);
    }

    console.log(id, company);
  },[id]);

  return (
    <div className="company-details">
      <Card title="Szczegóły Firmy">
        <Descriptions bordered>
          <Descriptions.Item label="Nazwa">{company?.name}</Descriptions.Item>
          <Descriptions.Item label="Branża">{company?.industry}</Descriptions.Item>
          <Descriptions.Item label="Adres">{company?.address}</Descriptions.Item>
          <Descriptions.Item label="Miasto">{company?.city}</Descriptions.Item>
          <Descriptions.Item label="Kraj">{company?.country}</Descriptions.Item>
          <Descriptions.Item label="Kontakt">{company?.contact_person}</Descriptions.Item>
          <Descriptions.Item label="Email">{company?.contact_email}</Descriptions.Item>
          <Descriptions.Item label="Telefon">{company?.contact_phone}</Descriptions.Item>
        </Descriptions>
      </Card>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Sprawozdania Finansowe" key="1">
          <FinancialStatements companyId={id}/>
        </TabPane>
        <TabPane tab="Wnioski Kredytowe" key="2">
          <CreditApplications companyId={id}/>
        </TabPane>
        <TabPane tab="Oceny Kredytowe" key="3">
          <CreditEvaluations applicationId={id}/>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default CompanyDetails;
