import React from 'react';
import PriorityIcon from '../PriorityIcon/PriorityIcon';
import todoIcon from '../SVG/To-do.svg';
import todoSmallIcon from '../SVG/todo.svg';
import inProgressIcon from '../SVG/in-progress.svg';
import doneIcon from '../SVG/Done.svg';
import canceledIcon from '../SVG/Cancelled.svg';
import backlogIcon from '../SVG/Backlog.svg';
import addIcon from '../SVG/add.svg';
import noPriorityIcon from '../SVG/No-priority.svg';
import './UserTasks.css';
import sortTasks from '../Ordering/TaskSorting';

function UserTasks({ taskList, users, sortBy }) {
  // Map users by their ID for easy lookup
  const userMap = users.reduce((map, user) => {
    map[user.id] = user;
    return map;
  }, {});

  // Organize tasks by user ID
  const tasksByUser = {};
  taskList.forEach((task) => {
    if (!tasksByUser[task.userId]) {
      tasksByUser[task.userId] = [];
    }
    tasksByUser[task.userId].push(task);
  });

  return (
    <div className="user-tasks-container">
      <div className="user-tasks-grid">
        {Object.keys(tasksByUser).map((userId) => {
          const user = userMap[userId];
          const userTasks = tasksByUser[userId];

          return (
            <div key={userId} className="user-section">
              <div className="user-header">
                <div className="user-info">
                  <div className="user-name">{user.name}</div>
                  <span className="task-count">{userTasks.length}</span>
                </div>
                <div className="user-actions">
                  <img src={addIcon} alt="Add" className="action-icon" />
                  <img src={noPriorityIcon} alt="No Priority" className="action-icon" />
                </div>
              </div>
              {sortTasks(userTasks, sortBy).map((task) => {
                let statusIcon;
                switch (task.status) {
                  case "Todo":
                    statusIcon = <img src={todoSmallIcon} alt="Todo" className="status-icon" />;
                    break;
                  case "In progress":
                    statusIcon = <img src={inProgressIcon} alt="In Progress" className="status-icon" />;
                    break;
                  case "Canceled":
                    statusIcon = <img src={canceledIcon} alt="Canceled" className="status-icon" />;
                    break;
                  case "Done":
                    statusIcon = <img src={doneIcon} alt="Done" className="status-icon" />;
                    break;
                  case "Backlog":
                    statusIcon = <img src={backlogIcon} alt="Backlog" className="status-icon" />;
                    break;
                  default:
                    statusIcon = null;
                }

                return (
                  <div key={task.id} className="task-card">
                    <div className="task-id">{task.id}</div>
                    <div className="task-content">
                      <div className="task-icon">{statusIcon}</div>
                      <div className="task-title">{task.title}</div>
                    </div>
                    <div className="task-details">
                      <div className="priority-tag">
                        <PriorityIcon priority={task.priority} />
                      </div>
                      <div className="task-label">
                        <img src={todoIcon} alt="To-Do" className="small-icon" />
                        <div className="label-text">{task.tag[0]}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserTasks;
