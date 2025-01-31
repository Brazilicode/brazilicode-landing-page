
export type DeveloperRole = 
  | "full stack" 
  | "front end" 
  | "back end" 
  | "mobile developer"
  | "data science" 
  | "devops" 
  | "qa tester" 
  | "other";

export type SeniorityLevel = 
  | "junior (0-2 years)"
  | "mid-level (3-5 years)"
  | "senior (6+ years)";

export interface DeveloperWaitlist {
  full_name: string;
  email: string;
  birth_date: string;
  tech_stack: string[];
  phone?: string;
  english_level?: string;
  commission_feedback?: string;
  role?: DeveloperRole;
  custom_tech_stack?: string;
}
