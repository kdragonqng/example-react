import React from 'react';
import './Login.scss';
import languageHook from '../../common/hooks/languageHook';
import LoginHook from './Login.hook';
import NotReady from '../../common/components/notReady/NotReady';
import logoGreen from '../../assets/image/logoGreen.png';
import { Mail, KeyRound } from 'lucide-react';

function Login(): React.JSX.Element {
    const language = languageHook();
    const elHook = LoginHook();

    if (elHook.componentState.isReady) {
        return (
            <div className="login-view mt-12 p-6">
                <div className='login-logo'>
                    <img src={logoGreen} alt="Logo" className="w-6 h-6" />
                    <label className="ml-2 text-xl font-bold">{'Shopper'}</label>
                </div>
                <div className='login-content my-8'>
                    <label className='font-bold text-2xl'>Sign In to Your Account</label>
                    <label className='text-gray-500'>Access your account to manage orders, save your favorites, and enjoy personalized.</label>
                </div>
                <div className='login-form mb-2'>
                    <label htmlFor="uname" className='text-gray-500 text-sm mb-2'>{language.auth.username}</label>
                    <div className="relative flex items-center rounded-lg border border-gray-300 px-3 py-2 bg-white">
                        <Mail className="w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Enter Email"
                            name="model.username"
                            required
                            className="pl-3 w-full outline-none text-sm text-gray-700 placeholder-gray-400"
                            value={elHook.componentState.model.username}
                            onChange={(e) => elHook.handleFormInputChanged(e.target)}
                        />
                    </div>
                </div>
                <div className='login-form'>
                    <label htmlFor="psw" className='text-gray-500 text-sm mb-2'>{language.auth.password}</label>
                    <div className="relative flex items-center rounded-lg border border-gray-300 px-3 py-2 bg-white">
                        <KeyRound className="w-5 h-5 text-gray-400" />
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="model.password"
                            required
                            className="pl-3 w-full outline-none text-sm text-gray-700 placeholder-gray-400"
                            value={elHook.componentState.model.password}
                            onChange={(e) => elHook.handleFormInputChanged(e.target)}
                        />
                    </div>
                </div>
                <button
                    onClick={() => elHook.login()}
                    className="w-full mt-8 bg-[#059669] text-white font-semibold py-3 rounded-xl"
                >
                    {language.auth.login}
                </button>
            </div>
        );
    }
    else {
        return (
            <NotReady></NotReady>
        );
    }
}

export default Login;
