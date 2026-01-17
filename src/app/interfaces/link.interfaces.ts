export interface Link {
  id: string;
  title: string;
  port: string;
  description?: string;
  https?: boolean;
}

export interface Service {
  id: string;
  title: string;
  link: string;
  description: string;
}
