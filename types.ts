
export type Page = 'dashboard' | 'projects' | 'tasks' | 'team' | 'settings';

export interface ProjectProgressData {
  name: string;
  پیشرفت: number;
  وظایف: number;
}
