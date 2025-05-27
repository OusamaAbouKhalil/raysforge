export interface NavItem {
  title: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Step {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'marketing' | 'design' | 'content' | 'digital';
  image: string;
  client?: string;
  year?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  funFact?: string;
}