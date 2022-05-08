export interface Roles { 
    student: boolean;
    profesor: boolean;
    secretariat: boolean;
 }

export interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  favoriteColor?: string;
  roles?: string[];
}
