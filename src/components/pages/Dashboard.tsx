import React from 'react';
import { styled } from 'styled-components';
import { Box, Grid as MuiGrid, Paper } from '@mui/material';
import { Timeline, TimelineItem, TimelineContent, TimelineSeparator, TimelineDot } from '@mui/lab';
import { TrendingUp, People, ShoppingCart, AttachMoney } from '@mui/icons-material';

const StatsCard = styled(Paper)<{ isDark: boolean }>`
  padding: 20px;
  border-radius: 10px;
  background: ${({ isDark }) => (isDark ? '#1E1E1E' : '#ffffff')};
  color: ${({ isDark }) => (isDark ? '#ffffff' : '#333333')};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const StatValue = styled.h2`
  margin: 10px 0;
  color: #7c4dff;
`;

const ActivityTimeline = styled(Timeline)`
  .MuiTimelineItem-root:before {
    flex: 0;
    padding: 0;
  }
`;

const StatsGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
`;

interface DashboardProps {
  isDark: boolean;
}

const Dashboard: React.FC<DashboardProps> = ({ isDark }) => {
  const stats = [
    { icon: <TrendingUp />, title: 'Total Sales', value: '$24,780', change: '+12%' },
    { icon: <People />, title: 'New Customers', value: '321', change: '+8%' },
    { icon: <ShoppingCart />, title: 'Orders', value: '176', change: '+15%' },
    { icon: <AttachMoney />, title: 'Revenue', value: '$8,234', change: '+10%' },
  ];

  const activities = [
    { title: 'New order received', time: '2 minutes ago', color: '#7c4dff' },
    { title: 'Customer feedback', time: '15 minutes ago', color: '#00c853' },
    { title: 'Product stock update', time: '1 hour ago', color: '#ff9100' },
    { title: 'New customer registered', time: '2 hours ago', color: '#2196f3' },
  ];

  return (
    <div>
      <h1 style={{ color: isDark ? '#ffffff' : '#333333', marginBottom: '30px' }}>Dashboard</h1>
      
      <StatsGrid>
        {stats.map((stat, index) => (
          <StatsCard key={index} isDark={isDark}>
            {stat.icon}
            <h4>{stat.title}</h4>
            <StatValue>{stat.value}</StatValue>
            <span style={{ color: '#00c853' }}>{stat.change}</span>
          </StatsCard>
        ))}
      </StatsGrid>

      <StatsCard isDark={isDark}>
        <h3 style={{ marginBottom: '20px' }}>Recent Activity</h3>
        <ActivityTimeline>
          {activities.map((activity, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot style={{ backgroundColor: activity.color }} />
              </TimelineSeparator>
              <TimelineContent>
                <h4 style={{ margin: '0' }}>{activity.title}</h4>
                <small style={{ color: isDark ? '#999' : '#666' }}>{activity.time}</small>
              </TimelineContent>
            </TimelineItem>
          ))}
        </ActivityTimeline>
      </StatsCard>
    </div>
  );
};

export default Dashboard;
