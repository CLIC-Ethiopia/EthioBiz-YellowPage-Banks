import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Bank, Business } from '../types';
import { fetchData } from '../services/api';
import { mockBanks, mockBusinesses } from '../data/mockData';

interface DataContextType {
  banks: Bank[];
  businesses: Business[];
  loading: boolean;
  error: string | null;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [banks, setBanks] = useState<Bank[]>(mockBanks);
  const [businesses, setBusinesses] = useState<Business[]>(mockBusinesses);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchData();
        // Only update if we got valid data
        if (data.banks.length > 0) setBanks(data.banks);
        if (data.businesses.length > 0) setBusinesses(data.businesses);
      } catch (err) {
        setError('Failed to load data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <DataContext.Provider value={{ banks, businesses, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
