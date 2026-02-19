export type cvDataType = {
  firstName: string;
  lastName: string;
  telPhone: string;
  email: string;
  github: string;
  bioSection: string;
  skills: SkillsType;
};

export type SkillsType = {
  languages: string[];
  frontendUI: string[];
  backendRealtime: string[];
  databasesOrm: string[];
  devOps: string[];
  mobileDev: string[];
  aiSpecialTools: string[];
};
