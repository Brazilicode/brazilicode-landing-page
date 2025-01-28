export type WaitlistUser = {
  id: string;
  full_name: string;
  email: string;
  role: 'developer' | 'company';
  created_at: string;
};

export type Developer = {
  id: string;
  seniority: string;
  stack: string[];
  birthdate: string;
  developer_role: string;
};

export type Company = {
  id: string;
  company_name: string;
  responsible_name: string;
  company_role: string;
  company_size: string;
  category: string;
  corporate_email: string;
};