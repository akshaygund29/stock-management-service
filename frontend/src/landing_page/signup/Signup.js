import React, { useState } from 'react';
// Removed: import { useNavigate } from 'react-router-dom';

function Signup() {
    // Removed: const navigate = useNavigate(); 

    const [mobileNumber, setMobileNumber] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        if (mobileNumber.length !== 10) {
            setError("Mobile number must be exactly 10 digits.");
            setIsLoading(false);
            return;
        }
        
        
        if (isNaN(mobileNumber)) {
            setError("Mobile number can only contain digits.");
            setIsLoading(false);
            return;
        }
        
        // --------------------------------------------------------

        console.log(`Valid number received. Simulating OTP send to: +91${mobileNumber}`);
        
        // Simulating API call time and success
        setTimeout(() => {
            console.log(`Simulated Signup Complete! Redirecting to external server.`);
            setIsLoading(false);
            
            // Redirect the entire browser session to the dashboard server
            window.location.href = 'https://stock-management-dashboard.onrender.com'; 
            
        }, 1500);
    };

    return (
        <div className="page-wrapper">
            
            {/* ... JSX structure remains the same and is correct ... */}

            <div className="signup-main-wrapper">
                
                <div className="hero-text-container">
                    <h1>Open a free demat and trading account online</h1>
                    <p>Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
                </div>
                
                <div className="signup-card">
                    
                    <div className="left-panel">
                        <img 
                            src="/media/images/account_open.svg" 
                            alt="Kite Dashboard" 
                            className="illustration" 
                        />
                    </div>
                    
                    <div className="right-panel">
                        <h1>Open a Demat Account</h1>
                        
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="mobile">Mobile Number</label>
                            <div className="input-group">
                                <span className="country-code">+91</span>
                                <input
                                    type="tel"
                                    id="mobile"
                                    name="mobile"
                                    placeholder="Enter your 10 digit mobile number"
                                    maxLength="10"
                                    value={mobileNumber}
                                    onChange={(e) => setMobileNumber(e.target.value)}
                                    required
                                    disabled={isLoading}
                                />
                            </div>

                            {error && <p style={{ color: 'red', marginBottom: '15px' }}>{error}</p>}
                            
                            <button 
                                type="submit" 
                                className="cta-button" 
                                disabled={isLoading || mobileNumber.length === 0}
                            >
                                {isLoading ? 'Confirming...' : 'Continue'}
                            </button>

                            <p className="login-link">
                                Already have an account? <a href="/login">Login here</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
