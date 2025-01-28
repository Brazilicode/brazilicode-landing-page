export type DeveloperRole = 
  | "full stack" 
  | "front end" 
  | "back end" 
  | "mobile developer"
  | "data science" 
  | "devops" 
  | "qa tester" 
  | "other";

export type CompanyRole = 
  | "ceo" 
  | "cto" 
  | "coo" 
  | "cpo" 
  | "developer" 
  | "analyst" 
  | "other";

export type CompanyCategory = 
  | "fintech" 
  | "technology" 
  | "healthcare" 
  | "marketing" 
  | "e-commerce" 
  | "other";

export type CompanySize = 
  | "small (1-10 employees)"
  | "medium (11-50 employees)"
  | "large (50+ employees)";

export type SeniorityLevel = 
  | "junior (0-2 years)"
  | "mid-level (3-5 years)"
  | "senior (6+ years)";

export interface DeveloperWaitlist {
  full_name: string;
  email: string;
  birth_date: string;
  seniority: SeniorityLevel;
  role: DeveloperRole;
  tech_stack: string[];
}

export interface CompanyWaitlist {
  company_name: string;
  responsible_name: string;
  role: CompanyRole;
  company_size: CompanySize;
  corporate_email: string;
  category: CompanyCategory;
}