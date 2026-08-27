import { create } from "zustand";

interface SceneState {
  progress: number;
  activeSection: string;
  setProgress: (progress: number) => void;
  setActiveSection: (section: string) => void;
}

export const useSceneState = create<SceneState>((set) => ({
  progress: 0,
  activeSection: "hero",
  setProgress: (progress) => set({ progress }),
  setActiveSection: (activeSection) => set({ activeSection }),
}));
