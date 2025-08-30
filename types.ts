
export interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
  detailedDescription: string;
}

export interface RecentWorkItem {
  imageUrl: string;
  caption: string;
}

export interface Project {
  imageUrl: string;
  name: string;
  location: string;
  description: string;
  scope: string[];
}

export interface Partner {
  name: string;
}