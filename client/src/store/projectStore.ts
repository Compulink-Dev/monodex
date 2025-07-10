import { create } from 'zustand';
import axios from 'axios';

interface Project {
  _id: string;
  title: string;
  description: string;
  technologies: string[];
  images: { url: string }[];
}

interface ProjectState {
  projects: Project[];
  loading: boolean;
  error: string | null;
  fetchProjects: () => Promise<void>;
}

export const useProjectStore = create<ProjectState>((set) => ({
  projects: [],
  loading: false,
  error: null,
  
  fetchProjects: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get<Project[]>('/api/projects');
      set({ projects: response.data, loading: false });
    } catch (err) {
      set({ 
        error: err instanceof Error ? err.message : 'Failed to fetch projects',
        loading: false 
      });
    }
  }
}));