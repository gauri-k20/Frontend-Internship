// ProfileList.js
import React, { useState } from 'react';
import '../css/ProfileList.css'; // Import CSS file
import ProfileCard from './ProfileCard';

function ProfileList() {
  // Dummy profile data
  const profiles = [
    { 
      id: 1, 
      name: 'Namrah Kashyap', 
      jobTitle: 'Machine Learning Engineer', 
      domain: 'Machine Learning and Data Science', 
      contactNumber: '+91 1234567890',
      photo: 'https://as1.ftcdn.net/v2/jpg/05/44/05/68/1000_F_544056854_nEMhWcVpycc2UkWHT28FwsFYZszoEkeW.jpg',
      address: 'ABC', 
      lat: 18.68, 
      lng: 73.9 ,
      mapUrl: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.59584173817!2d73.81484847417136!3d18.592251066982826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b96a05316811%3A0x46a3d7a74817c047!2sDinosaur%20Garden!5e0!3m2!1sen!2sin!4v1713460574962!5m2!1sen!2sin`
    },
    { 
      id: 2, 
      name: 'Akira Malik', 
      jobTitle: 'Ethical Hacker', 
      domain: 'Cybersecurity', 
      contactNumber: '+91 9876543210',
      photo: 'https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=',
      address: 'XYZ', 
      lat: 18.669, 
      lng: 73.8866,
      mapUrl: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.746024171035!2d73.8866!3d18.669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7e1fa821229fb25e!2sMIT%20ACADEMY%20OF%20ENGINEERING%2C%20Kate%20Patil%20Nagar%2C%20Alandi%2C%20Maharashtra%20412105!5e0!3m2!1sen!2sin!4v1713351012397!5m2!1sen!2sin`
    },
    { 
      id: 3, 
      name: 'Rosy Williams', 
      jobTitle: 'Animator', 
      domain: 'Art and Design', 
      contactNumber: '+91 9999999999',
      photo: 'https://fowmedia.com/wp-content/uploads/2014/06/happy-employee-1024.jpg',
      address: 'PQR', 
      lat: 18.675, 
      lng: 73.893,
      mapUrl:`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120726.21974648884!2d73.03195423178616!3d18.989100648307417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e83e1f23f23d%3A0xe3a106c431e3fd0a!2sPanvel%2C%20Navi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1713460655607!5m2!1sen!2sin`
    },
    { 
      id: 4, 
      name: 'Dev Dixit', 
      jobTitle: 'Human Relation Manager', 
      domain: 'HR', 
      contactNumber: '+91 8888888888',
      photo: 'https://media.istockphoto.com/id/1418192950/photo/pensive-skilled-middle-aged-businessman-working-on-computer.jpg?s=612x612&w=0&k=20&c=P3iQ5lFOkW8FNGTPRcnHJ_4mkXFCK8KStA0m5CBHXdw=',
      address: 'LMN', 
      lat: 18.671, 
      lng: 73.895,
      mapUrl: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15138.523000666943!2d73.80743928879944!3d18.455067162314446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc295391e142047%3A0x47aac4f332b912bc!2sSiddhivinayak%20Society%2C%20Manaji%20Nagar%2C%20Narhe%2C%20Pune%2C%20Maharashtra%20411041!5e0!3m2!1sen!2sin!4v1713376901507!5m2!1sen!2sin`
    }
  ];

  // State to track the background color of the profile cards
  const [cardColor, setCardColor] = useState('lightpink');

  // Function to toggle background color
  const toggleColor = () => {
    setCardColor(cardColor === 'lightpink' ? 'lightblue' : 'lightpink');
  };

  return (
    <div className="profile-list">
      {profiles.map(profile => (
        <ProfileCard
          key={profile.id}
          profile={profile}
          cardColor={cardColor}
          toggleColor={toggleColor}
        />
      ))}
    </div>
  );
}

export default ProfileList;