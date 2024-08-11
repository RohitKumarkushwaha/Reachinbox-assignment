import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/AppBar';
import BottomBar from '../components/Footer';
import googleLogo from '../assets/google.svg';

const LoginScreen = () => {
  const navigateTo = useNavigate();
  const userToken = localStorage.getItem('token');

  useEffect(() => {
    if (userToken) {
      navigateTo('/');
    }
  }, [userToken, navigateTo]);

  const initiateGoogleLogin = () => {
    const redirectUrl = `${window.location.origin}`;
    window.location.href = `https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=${redirectUrl}`;
  };

  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center h-screen w-screen bg-black text-white">
        <div className="border rounded-2xl bg-[#111214] border-[#343A40] px-16 text-center space-y-10">
          <section>
            <h2 className="font-semibold text-xl mt-6">Create a New Account</h2>
            <button
              className="flex items-center justify-center px-20 py-2 mt-6 border border-white/40 text-[#CCCCCC] text-sm rounded-lg cursor-pointer"
              onClick={initiateGoogleLogin}
            >
              <img src={googleLogo} alt="Google" className="w-4 mr-3" />
              Sign Up with Google
            </button>
          </section>

          <section>
            <Link
              to="/login"
              className="bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] mt-5 mx-16 px-6 py-3 text-sm rounded-md cursor-pointer"
            >
              Create an Account
            </Link>
            <div className="text-[#909296] my-8 mb-10">
              Already have an account?{' '}
              <Link to="/signin" className="text-[#C1C2C5]">
                Sign In
              </Link>
            </div>
          </section>
        </div>
      </main>
      <BottomBar />
    </div>
  );
};

export default LoginScreen;
