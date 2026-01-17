export interface Link {
  id: string;
  title: string;
  port: string;
  description?: string;
}

export interface Service {
  id: string;
  title: string;
  link: string;
  description: string;
}
