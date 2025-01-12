import React from 'react';

interface TeamMember {
  name: string;
  designation: string;
  image: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "John Smith",
    designation: "Designation here",
    image: "/lovable-uploads/4dff18b9-e970-4f90-a1bb-cb7ce1d62b6a.png",
    description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est lacus. Maecenas elit mi gravida praesent interdu"
  },
  {
    name: "John Smith",
    designation: "Designation here",
    image: "/lovable-uploads/fdfd4081-ee7b-40fb-9ca1-dc84b6578a33.png",
    description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est lacus. Maecenas elit mi gravida praesent interdu"
  },
  {
    name: "Elina Williams",
    designation: "Designation here",
    image: "/lovable-uploads/28c3cdab-3204-434d-ae8a-44d80457aae8.png",
    description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est lacus. Maecenas elit mi gravida praesent interdu"
  }
];

const TeamSection = () => {
  return (
    <div className="bg-white rounded-lg p-6 mb-8">
      <h3 className="text-2xl font-bold mb-6">Team</h3>
      <p className="text-gray-600 mb-8">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.
      </p>
      
      <div className="space-y-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-6 bg-[#E8F4FD] rounded-lg p-4">
            <div className="flex flex-col items-center md:w-48">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-24 h-24 rounded-lg object-cover mb-2"
              />
              <h4 className="font-semibold text-base">{member.name}</h4>
              <p className="text-sm text-gray-500">{member.designation}</p>
            </div>
            <p className="text-gray-600 leading-relaxed flex-1">
              {member.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;