export interface Users {
    fullName: string; 
    email: string; 
    mobile: string[];
    address: {
        city: string; 
        postalCode: string; 
        street: string; 
    };
    password: string; 
    confirmPassword: string; 
}
