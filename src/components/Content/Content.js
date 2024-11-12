import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Content.css';
import TaskStatus from '../Grouping/TaskStatus';
import TaskPriority from '../Grouping/TaskPriority';
import UserTasks from '../Grouping/UserTasks';

const Content = ({ grouping, ordering }) => {
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
        setTasks(response.data.tickets);
        setUsers(response.data.users);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    fetchData();
  }, []);

  // Render the appropriate component based on the "grouping" prop
  const renderComponent = () => {
    switch (grouping) {
      case 'status':
        return <TaskStatus taskList={tasks} sortBy={ordering} />;
      case 'user':
        return <UserTasks taskList={tasks} users={users} sortBy={ordering} />;
      case 'priority':
        return <TaskPriority taskList={tasks} sortBy={ordering} />;
      default:
        return null;
    }
  };

  return <div class="main-container">{renderComponent()}</div>;
};

export default Content;
