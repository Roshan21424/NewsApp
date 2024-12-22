import React from 'react';

const Workflow = () => {
  return (
    <section className="bg-[#0a0a0a] py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Step-by-Step Guide to Applying</h2>
        
        <ol className="list-none space-y-6 pl-6 text-white">
          <li className="text-xl ">
            <span className="font-bold text-[#f46db0]">Sign Up:</span> Create an account to access exclusive internship opportunities tailored for technology students. Simply enter your details and get started.
          </li>
          <li className="text-xl">
            <span className="font-bold text-[#f46db0]">Create Profile:</span> Complete your profile by adding your skills, interests, and academic background. This helps us match you with the best internship opportunities.
          </li>
          <li className="text-xl ">
            <span className="font-bold text-[#f46db0]">Browse Internships:</span> Explore a wide range of internships across various tech fields. Filter by your preferences like location, technology stack, and duration to find the right fit.
          </li>
          <li className="text-xl ">
            <span className="font-bold text-[#f46db0]">Apply for Internships:</span> Once you find an internship that interests you, apply with a single click. Upload your resume and cover letter directly through our platform.
          </li>
          <li className="text-xl ">
            <span className="font-bold text-[#f46db0]">Connect with Companies:</span> Our platform connects you with potential employers. You’ll receive notifications and updates about your application status, making it easy to stay on top of your applications.
          </li>
          <li className="text-xl ">
            <span className="font-bold text-[#f46db0]">Internship Acceptance & Onboarding:</span> If selected, you’ll receive an offer. Accept the internship, and we’ll guide you through the onboarding process to ensure you're prepared and ready to start your role.
          </li>
          <li className="text-xl ">
            <span className="font-bold text-[#f46db0]">Track Progress & Feedback:</span> Throughout your internship, you can track your progress, complete tasks, and receive feedback from mentors. This ensures you gain valuable experience and grow professionally.
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Workflow;
