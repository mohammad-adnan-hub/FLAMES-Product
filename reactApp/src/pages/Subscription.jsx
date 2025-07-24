import React, { useState } from 'react';
import '../css/subscription.css';

const Subscription = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleToggle = (planType) => {
    setIsMonthly(planType === 'monthly');
  };

  return (
    <div className="pricing-wrapper">
      <div className="toggle-container">
        <button
          className={`toggle-button ${isMonthly ? 'active' : ''}`}
          onClick={() => handleToggle('monthly')}
        >
          Monthly
        </button>
        <button
          className={`toggle-button ${!isMonthly ? 'active' : ''}`}
          onClick={() => handleToggle('yearly')}
        >
          Yearly
        </button>
      </div>

      <div className="pricing-container">
        <div className="card basic-card">
          <h3>Basic</h3>
          <p className="price">$0</p>
          <p className="subtext">Free forever</p>
          <ul>
            <li>✔️ Full course access</li>
            <li>✔️ 5 session per day</li>
            <li>✔️ Journeys</li>
          </ul>
        </div>

        <div className="card pro-card">
          <h3>Pro</h3>
          <p className="price">{isMonthly ? '$10.99' : '$99.99'}</p>
          <p className="subtext">
            {isMonthly ? 'Billed Monthly' : 'Billed Annually'}
          </p>
          <ul>
            <li>✔️ Everything in basic, plus</li>
            <li>✔️ Unlimited AI assistant</li>
            <li>✔️ Advanced AI model</li>
            <li>✔️ No Ads</li>
            <li>✔️ Priority Support</li>
          </ul>
          <button className="go-pro">Go Pro</button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;