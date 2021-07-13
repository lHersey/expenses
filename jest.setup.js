/* eslint-disable @typescript-eslint/no-unsafe-return */
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

//Mock the persist functionality
jest.mock('redux-persist', () => ({ persistReducer: jest.fn((_, reducer) => reducer), persistStore: jest.fn() }));

//Pass the children directly on the Provider PersistGate
jest.mock('redux-persist/integration/react', () => ({ PersistGate: jest.fn(p => p.children) }));
