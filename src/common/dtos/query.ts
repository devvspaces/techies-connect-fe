export enum EmploymentStatus {
  FULL_TIME = "FULL_TIME",
  PART_TIME = "PART_TIME",
  CONTRACT = "CONTRACT",
  INTERN = "INTERN",
  FREELANCE = "FREELANCE",
  UNEMPLOYED = "UNEMPLOYED",
}

export interface QueryTechiesDto {
  search?: string;
  skills?: string[];
  location?: string;
  roles?: string[];
  employmentStatus?: EmploymentStatus;
  availability?: string;
  minExperience?: number;
  maxExperience?: number;
  school?: string;
}
