export const statsData = [
      { title: 'Total Users', value: '12,543', change: '+12.5%', icon: 'users' },
      { title: 'Total Videos', value: '45,210', change: '+8.2%', icon: 'video' },
      { title: 'Total Generations', value: '89,432', change: '+23.1%', icon: 'zap' },
      { title: 'Total Revenue', value: '$128,430', change: '+15.4%', icon: 'dollar-sign' },
];

export const chartData = [
      { name: 'Jan', revenue: 4000, generations: 2400 },
      { name: 'Feb', revenue: 3000, generations: 1398 },
      { name: 'Mar', revenue: 2000, generations: 9800 },
      { name: 'Apr', revenue: 2780, generations: 3908 },
      { name: 'May', revenue: 1890, generations: 4800 },
      { name: 'Jun', revenue: 2390, generations: 3800 },
      { name: 'Jul', revenue: 3490, generations: 4300 },
];

export const videosData = [
      { id: 1, thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=100&h=60&fit=crop', name: 'Product Intro', duration: '0:45', status: 'Completed', date: '2024-02-01' },
      { id: 2, thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=100&h=60&fit=crop', name: 'Promo Video', duration: '1:20', status: 'Processing', date: '2024-02-02' },
      { id: 3, thumbnail: 'https://images.unsplash.com/photo-1492691523567-6170f0275df1?w=100&h=60&fit=crop', name: 'Tutorial #1', duration: '5:30', status: 'Completed', date: '2024-02-03' },
      { id: 4, thumbnail: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=100&h=60&fit=crop', name: 'Event Recap', duration: '2:15', status: 'Failed', date: '2024-02-04' },
      { id: 5, thumbnail: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=100&h=60&fit=crop', name: 'New Feature', duration: '0:55', status: 'Completed', date: '2024-02-05' },
];

export const usersData = [
      { id: 1, email: 'john@example.com', status: 'Active', totalVideos: 45, joined: '2023-11-12' },
      { id: 2, email: 'sarah@design.co', status: 'Active', totalVideos: 12, joined: '2023-12-05' },
      { id: 3, email: 'mike@tech.io', status: 'Blocked', totalVideos: 89, joined: '2023-10-20' },
      { id: 4, email: 'emma@creative.net', status: 'Active', totalVideos: 23, joined: '2024-01-15' },
      { id: 5, email: 'david@studio.com', status: 'Active', totalVideos: 34, joined: '2024-01-22' },
];

export const paymentsData = [
      { id: 1, email: 'john@example.com', amount: '$49.00', date: '2024-02-05', status: 'Paid' },
      { id: 2, email: 'sarah@design.co', amount: '$29.00', date: '2024-02-04', status: 'Pending' },
      { id: 3, email: 'emma@creative.net', amount: '$99.00', date: '2024-02-03', status: 'Paid' },
      { id: 4, email: 'david@studio.com', amount: '$49.00', date: '2024-02-02', status: 'Failed' },
      { id: 5, email: 'mike@tech.io', amount: '$149.00', date: '2024-02-01', status: 'Paid' },
];

export const activityData = [
      { id: 1, user: 'john@example.com', action: 'User Login', date: '2024-02-06', time: '10:30 AM', status: 'Success' },
      { id: 2, user: 'admin@nexus.com', action: 'Video Created', date: '2024-02-06', time: '11:15 AM', status: 'Success' },
      { id: 3, user: 'sarah@design.co', action: 'Video Deleted', date: '2024-02-06', time: '01:45 PM', status: 'Success' },
      { id: 4, user: 'mike@tech.io', action: 'Payment Made', date: '2024-02-05', time: '09:00 AM', status: 'Success' },
      { id: 5, user: 'system', action: 'Error Happened', date: '2024-02-05', time: '04:20 PM', status: 'Error' },
];

export const notificationsData = [
      { id: 1, title: 'New User Registered', message: 'A new user emma@creative.net has signed up.', type: 'info', time: '2 hours ago' },
      { id: 2, title: 'Video Generation Failed', message: 'Video #TRX-1004 generation failed due to timeout.', type: 'error', time: '5 hours ago' },
      { id: 3, title: 'Payment Issue', message: 'User david@studio.com payment was declined.', type: 'warning', time: '1 day ago' },
];
