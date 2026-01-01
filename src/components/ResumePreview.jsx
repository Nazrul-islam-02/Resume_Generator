import React from 'react';

const ResumePreview = ({data}) => {
    console.log(data);
    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      {/* Resume Container */}
      <div className="w-full max-w-5xl bg-white  shadow-lg rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-3">

         

        {/* LEFT COLUMN (1/3) */}
        <div className="md:col-span-1 relative bg-gray-900 print:bg-gray-900 text-white p-6">

          {/* Download button */}
       <div className='inline fixed top-1 right-6'>
            <button onClick={()=> window.print()} className='print:hidden p-2 bg-gray-500 text-black rounded-xl cursor-pointer hover:bg-gray-800 text-white'>Save PDF</button>
      </div>
         
          {/* Profile Picture */}
        { data.image && (
            <div className="flex justify-center mb-4">
            <img
                src={URL.createObjectURL(data.image)}
                // src={URL(data.image)}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white"
            />
          </div>
        )

        }

          {/* Name */}
          <h1 className="text-2xl font-bold text-center">{data.name}</h1>
          <p className="text-center text-sm text-gray-300 mb-6">
            Frontend Developer
          </p>

          {/* Address */}
          <div className="mb-5">
            <h2 className="text-lg font-semibold border-b border-gray-600 mb-2">
              Address
            </h2>
            <p className="text-sm">
              Dhaka, Bangladesh
            </p>
          </div>

          {/* Contact */}
          <div className="mb-5">
            <h2 className="text-lg font-semibold border-b border-gray-600 mb-2">
              Contact
            </h2>
            <p className="text-sm">📞 +8801XXXXXXXXX</p>
            <p className="text-sm"> 
                <a href={data.email}>{data.email}</a>
            </p>
            <p className="text-sm">
              🔗 <a href="#" className="text-blue-400">LinkedIn</a>
            </p>
            <p className="text-sm">
              💻 <a href="#" className="text-blue-400">GitHub</a>
            </p>
          </div>

          {/* Skills */}
          <div className="mb-5">
            <h2 className="text-lg font-semibold border-b border-gray-600 mb-2">
              Skills
            </h2>
            <ul className="text-sm list-disc list-inside space-y-1">
              <li>HTML, CSS, JavaScript</li>
              <li>React.js</li>
              <li>Tailwind CSS</li>
              <li>Node.js (Basic)</li>
            </ul>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-lg font-semibold border-b border-gray-600 mb-2">
              Education
            </h2>
            <p className="text-sm font-semibold">
              B.Sc in Computer Science
            </p>
            <p className="text-sm text-gray-300">
              XYZ University
            </p>
            <p className="text-sm text-gray-400">
              2021 – 2025
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN (2/3) */}
        <div className="md:col-span-2 p-8">

          {/* Objective */}
          <section className="mb-6">
            <h2 className="text-xl font-bold border-b-2 border-gray-300 mb-3">
              Objective
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Passionate Frontend Developer seeking to build modern, responsive,
              and user-friendly web applications using React and modern
              JavaScript technologies.
            </p>
          </section>

          {/* Work Experience */}
          <section className="mb-6">
            <h2 className="text-xl font-bold border-b-2 border-gray-300 mb-3">
              Work Experience
            </h2>

            <div className="mb-4">
              <h3 className="font-semibold">
                Frontend Developer – ABC Company
              </h3>
              <p className="text-sm text-gray-500">
                Jan 2024 – Present
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                <li>Developed responsive UI using React & Tailwind</li>
                <li>Integrated REST APIs</li>
                <li>Optimized performance and UX</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">
                Intern – Web Development
              </h3>
              <p className="text-sm text-gray-500">
                Jun 2023 – Dec 2023
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                <li>Built reusable components</li>
                <li>Worked with Git & GitHub</li>
              </ul>
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-xl font-bold border-b-2 border-gray-300 mb-3">
              Projects
            </h2>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>E-Commerce Website (React + MERN)</li>
              <li>Resume Generator App</li>
              <li>Islamic Habits Tracker</li>
            </ul>
          </section>
          
        </div>
        
        
      </div>
            
    </div>

    
        
    );
};

export default ResumePreview;