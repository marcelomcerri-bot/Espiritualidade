import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error loading ${key} from localStorage:`, error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error saving ${key} to localStorage:`, error);
    }
  };

  return [storedValue, setValue] as const;
}

export function useLocalDiary() {
  interface DiaryEntry {
    id: string;
    title: string;
    content: string;
    gratitude?: string;
    date: string;
  }

  const [entries, setEntries] = useLocalStorage<DiaryEntry[]>('bem-estar-diary', []);

  const addEntry = (entry: Omit<DiaryEntry, 'id' | 'date'>) => {
    const newEntry: DiaryEntry = {
      ...entry,
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
    };
    setEntries((prev) => [newEntry, ...prev]);
    return newEntry;
  };

  const deleteEntry = (id: string) => {
    setEntries((prev) => prev.filter((entry) => entry.id !== id));
  };

  const updateEntry = (id: string, updates: Partial<Omit<DiaryEntry, 'id' | 'date'>>) => {
    setEntries((prev) => prev.map((entry) => 
      entry.id === id ? { ...entry, ...updates } : entry
    ));
  };

  const clearAll = () => {
    setEntries([]);
  };

  return {
    entries,
    addEntry,
    deleteEntry,
    updateEntry,
    clearAll,
    isLoading: false,
  };
}

export function useLocalJourney() {
  interface JourneyAssessment {
    id: string;
    weekLabel: string;
    spiritual: number;
    emotional: number;
    mental: number;
    sentidoVida: number;
    esperanca: number;
    gratidao: number;
    pazInterior: number;
    conexao: number;
    proposito: number;
    createdAt: string;
  }

  const [assessments, setAssessments] = useLocalStorage<JourneyAssessment[]>('bem-estar-journey', []);

  const addAssessment = (assessment: Omit<JourneyAssessment, 'id' | 'createdAt' | 'weekLabel'>) => {
    const weekNumber = assessments.length + 1;
    const newAssessment: JourneyAssessment = {
      ...assessment,
      id: crypto.randomUUID(),
      weekLabel: `Sem ${weekNumber}`,
      createdAt: new Date().toISOString(),
    };
    setAssessments((prev) => [...prev, newAssessment]);
    return newAssessment;
  };

  const deleteAssessment = (id: string) => {
    setAssessments((prev) => prev.filter((assessment) => assessment.id !== id));
  };

  const updateAssessment = (id: string, updates: Partial<Omit<JourneyAssessment, 'id' | 'createdAt' | 'weekLabel'>>) => {
    setAssessments((prev) => prev.map((assessment) => 
      assessment.id === id ? { ...assessment, ...updates } : assessment
    ));
  };

  const clearAll = () => {
    setAssessments([]);
  };

  return {
    assessments,
    addAssessment,
    deleteAssessment,
    updateAssessment,
    clearAll,
    isLoading: false,
  };
}
