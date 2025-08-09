// User and authentication types for the ecommerce application

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'customer' | 'admin';
  createdAt: Date;
  updatedAt: Date;
  // Address information
  addresses: Address[];
  defaultAddressId?: string;
  // Preferences
  preferences: {
    newsletter: boolean;
    notifications: boolean;
    theme: 'light' | 'dark' | 'system';
  };
}

export interface Address {
  id: string;
  type: 'shipping' | 'billing';
  firstName: string;
  lastName: string;
  company?: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone?: string;
  isDefault: boolean;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  error: string | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  name: string;
  confirmPassword: string;
}

export interface AuthResponse {
  user: User;
  token: string;
  refreshToken: string;
}

export interface UserProfile {
  name: string;
  email: string;
  avatar?: string;
  preferences: User['preferences'];
}

export interface PasswordChangeData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface PasswordResetData {
  email: string;
}

export interface PasswordResetConfirmData {
  token: string;
  password: string;
  confirmPassword: string;
}

// Auth context types
export interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  error: string | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => Promise<void>;
  updateProfile: (profile: Partial<UserProfile>) => Promise<void>;
  changePassword: (data: PasswordChangeData) => Promise<void>;
  resetPassword: (data: PasswordResetData) => Promise<void>;
  confirmPasswordReset: (data: PasswordResetConfirmData) => Promise<void>;
  clearError: () => void;
}

// Session types
export interface Session {
  user: User;
  token: string;
  expiresAt: Date;
}

export interface SessionStorage {
  getSession: () => Session | null;
  setSession: (session: Session) => void;
  clearSession: () => void;
  isSessionValid: () => boolean;
}