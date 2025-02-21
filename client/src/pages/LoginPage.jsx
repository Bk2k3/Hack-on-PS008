import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

const LoginPage = () => {
  const handleGoogleLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/google`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Welcome to CodeQuest</CardTitle>
        </CardHeader>
        <CardContent>
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <img src="/assets/google-icon.svg" alt="Google" className="w-6 h-6" />
            Continue with Google
          </button>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
