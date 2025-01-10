export interface UserCreatedResponse {
    success: boolean;
    subscribed: boolean;
    token: string;
    user: {
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      role: string;
    };
  }