import React from 'react';
import hod from "../assets/hod.jpg";
import f1 from "../assets/f1.jpg";
import f3 from "../assets/f3.jpg";

const DepartmentFacultyProfile = () => {
  const facultyMembers = [
    {
      name: 'Dr. Sagar Yeruva',
      position: 'Head of Department',
      department: 'Computer Science- AIML & IoT',
      photo: hod,
      color: 'text-blue-600'
    },
    {
      name: 'Dr. Kousar Nikhath',
      position: 'Faculty Coordinator',
      department: 'Computer Science- AIML & IoT',
      photo: f1,
      color: 'text-green-600'
    },
    {
      name: 'Dr. Sarah Kumar',
      position: 'Faculty Coordinator', 
      department: 'Computer Science- AIML & IoT',
      photo: f3,
      color: 'text-green-600'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-3 gap-8">
        {facultyMembers.map((member, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center transform transition-all duration-300 hover:scale-105"
          >
            <div className="w-64 h-64 rounded-full mb-6 overflow-hidden border-4 border-opacity-50 shadow-lg" style={{
              borderColor: member.color
            }}>
              <img 
                src={member.photo} 
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-white">{member.name}</h2>
              <p className={`text-xl font-semibold ${member.color}`}>
                {member.position}
              </p>
              <p className="text-white text-sm">{member.department}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentFacultyProfile;