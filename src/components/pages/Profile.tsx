import React, { useState } from 'react';
import { styled } from 'styled-components';
import { Paper, Button, TextField, Avatar } from '@mui/material';
import { Edit, Save, CameraAlt } from '@mui/icons-material';
import { PROFILE_IMAGE, USER_INFO } from '../../config/constants';
import { motion } from 'framer-motion';

const ProfileCard = styled(Paper)<{ isDark: boolean }>`
  padding: 30px;
  border-radius: 15px;
  background: ${({ isDark }) => (isDark ? '#1E1E1E' : '#ffffff')};
  color: ${({ isDark }) => (isDark ? '#ffffff' : '#333333')};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
  position: relative;
`;

const LargeAvatar = styled(motion(Avatar))`
  width: 120px !important;
  height: 120px !important;
  cursor: pointer;
  
  &:hover .avatar-overlay {
    opacity: 1;
  }
`;

const AvatarOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 120px;
  height: 120px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s;
  cursor: pointer;
`;

const ProfileField = styled.div`
  margin-bottom: 20px;
`;

const StyledTextField = styled(TextField)<{ isDark: boolean }>`
  width: 100%;
  
  .MuiInputBase-input {
    color: ${({ isDark }) => (isDark ? '#ffffff' : '#333333')};
  }
  
  .MuiInputLabel-root {
    color: ${({ isDark }) => (isDark ? '#999999' : '#666666')};
  }
  
  .MuiOutlinedInput-root {
    fieldset {
      border-color: ${({ isDark }) => (isDark ? '#333333' : '#e0e0e0')};
    }
    
    &:hover fieldset {
      border-color: #7c4dff;
    }
  }
`;

interface ProfileProps {
  isDark: boolean;
}

const Profile: React.FC<ProfileProps> = ({ isDark }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: USER_INFO.name,
    role: USER_INFO.role,
    email: USER_INFO.email,
    location: USER_INFO.location,
    bio: 'Passionate UI/UX designer with 5+ years of experience in creating beautiful and functional interfaces.',
  });

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save the changes to a backend
  };

  const handleChange = (field: keyof typeof profileData) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setProfileData({
      ...profileData,
      [field]: event.target.value,
    });
  };

  return (
    <div>
      <h1 style={{ color: isDark ? '#ffffff' : '#333333', marginBottom: '30px' }}>Profile</h1>
      
      <ProfileCard isDark={isDark}>
        <ProfileHeader>
          <div style={{ position: 'relative' }}>
            <LargeAvatar 
              src={PROFILE_IMAGE} 
              alt={profileData.name}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
            <AvatarOverlay 
              className="avatar-overlay"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <CameraAlt style={{ color: '#ffffff' }} />
            </AvatarOverlay>
          </div>
          <div>
            <h2 style={{ margin: '0' }}>{profileData.name}</h2>
            <p style={{ color: '#7c4dff', margin: '5px 0' }}>{profileData.role}</p>
          </div>
          <Button
            variant="contained"
            style={{
              marginLeft: 'auto',
              backgroundColor: '#7c4dff',
            }}
            startIcon={isEditing ? <Save /> : <Edit />}
            onClick={isEditing ? handleSave : handleEdit}
          >
            {isEditing ? 'Save Changes' : 'Edit Profile'}
          </Button>
        </ProfileHeader>

        {Object.entries(profileData).map(([field, value]) => (
          <ProfileField key={field}>
            <StyledTextField
              label={field.charAt(0).toUpperCase() + field.slice(1)}
              value={value}
              onChange={handleChange(field as keyof typeof profileData)}
              disabled={!isEditing}
              multiline={field === 'bio'}
              rows={field === 'bio' ? 4 : 1}
              isDark={isDark}
            />
          </ProfileField>
        ))}
      </ProfileCard>
    </div>
  );
};

export default Profile;
