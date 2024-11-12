import React from 'react';
import PriorityIcon from '../PriorityIcon/PriorityIcon';
import todoIcon from '../SVG/To-do.svg';
import addIcon from '../SVG/add.svg';
import noPriorityIcon from '../SVG/No-priority.svg';
import './TaskPriority.css';
import sortTasks from '../Ordering/TaskSorting';

function TaskPriority({ taskList, sortBy }) {
  // Group tasks by priority level
  const tasksByPriority = {
    0: [], // No Priority
    4: [], // Urgent
    3: [], // High
    2: [], // Medium
    1: [], // Low
  };

  // Populate tasksByPriority
  taskList.forEach((task) => {
    tasksByPriority[task.priority]?.push(task);
  });

  // Function to get the priority label
  const getPriorityText = (priority) => {
    switch (Number(priority)) {
      case 4:
        return 'Urgent';
      case 3:
        return 'High';
      case 2:
        return 'Medium';
      case 1:
        return 'Low';
      case 0:
      default:
        return 'No Priority';
    }
  };

  return (
    <div className="task-priority-container">
      <div className="priority-grid">
        {[0, 4, 3, 2, 1].map((priority) => {
          const priorityText = getPriorityText(priority);

          return (
            <div key={priority} className="priority-section">
              <div className="header-container">
                <div className="header-details">
                  <PriorityIcon priority={priority} />
                  <div className="priority-text">{priorityText}</div>
                  <span className="task-count">{tasksByPriority[priority].length}</span>
                </div>
                <div className="header-actions">
                  <img src={addIcon} alt="Add" className="action-icon" />
                  <img src={noPriorityIcon} alt="No Priority" className="action-icon" />
                </div>
              </div>
              {sortTasks(tasksByPriority[priority], sortBy).map((task) => (
                <div key={task.id} className="task-card">
                  <div className="task-id">{task.id}</div>
                  <div className="task-title">{task.title}</div>
                  <div className="task-info">
                    <div className="tag-container">
                      <PriorityIcon priority={task.priority} />
                    </div>
                    <div className="label-container">
                      <img src={todoIcon} alt="To-Do" className="icon-small" />
                      <div className="label-text">{task.tag[0]}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TaskPriority;
