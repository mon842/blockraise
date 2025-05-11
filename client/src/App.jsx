import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Sidebar, Navbar } from './components';
import { CampaignDetails, CreateCampaign, Home, Profile } from './pages';


const About = () => {
  return (
    <div className="flex  h-screen">
      <div>
        <h1 className="text-white text-4xl font-bold mb-4">About Us</h1>
        <p className={` text-white text-base font-normal leading-relaxed`}>
          BlockRaise is a blockchain-based crowdfunding platform that utilises smart contracts to enable automatic payment and collection of funds, without middlemen and only releasing funds when conditions are fulfilled. The platform has cryptocurrency payment capability, allowing global access through the elimination of traditional banking impediments.
          It also ensures safe data management which ensures that all transactions remain immutably on the blockchain for easy verification. Integration with wallets like MetaMask facilitates easy management of funds. In addition to all this, to further build trust, BlockRaise has a decentralized reputation system which is to execute a blockchain-reputation score for campaign creators based on previous project performance by giving trust scores to project creators and contributors depending on their transaction history and activity. In the future, the platform plans to grow with its enhancements in scalability, more use cases, and advanced analytics to further disrupt crowdfunding.
        </p>
      </div>

    </div>
  )
}

const App = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  )
}

export default App