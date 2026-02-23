import { Bank, Business } from '../types';
import { mockBanks, mockBusinesses } from '../data/mockData';

const API_URL = import.meta.env.VITE_APPS_SCRIPT_URL;

interface ApiResponse {
  banks: Bank[];
  businesses: Business[];
}

export const fetchData = async (): Promise<{ banks: Bank[]; businesses: Business[] }> => {
  if (!API_URL) {
    console.warn('VITE_APPS_SCRIPT_URL is not set. Using mock data.');
    return { banks: mockBanks, businesses: mockBusinesses };
  }

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: ApiResponse = await response.json();
    
    // Basic validation to ensure we got arrays
    if (!Array.isArray(data.banks) || !Array.isArray(data.businesses)) {
        throw new Error('Invalid data format received from API');
    }

    return data;
  } catch (error) {
    console.error('Failed to fetch data from Google Apps Script:', error);
    console.log('Falling back to mock data.');
    return { banks: mockBanks, businesses: mockBusinesses };
  }
};
