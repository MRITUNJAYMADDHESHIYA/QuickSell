import React from 'react';
import PriorityIcon from '../PriorityIcon/PriorityIcon';
import todoIcon from '../SVG/To-do.svg';
import todoIconSmall from '../SVG/todo.svg';
import inProgressIcon from '../SVG/in-progress.svg';
import doneIcon from '../SVG/Done.svg';
import canceledIcon from '../SVG/Cancelled.svg';
import backlogIcon from '../SVG/Backlog.svg';
import addIcon from '../SVG/add.svg';
import noPriorityIcon from '../SVG/No-priority.svg';
import './TaskStatus.css';
import sortTasks from '../Ordering/TaskSorting';

function TaskStatus({ taskList, sortBy }) {
  // Group tasks by their status
  const tasksByStatus = {
    Backlog: [],
    Todo: [],
    "In progress": [],
    Done: [],
    Canceled: [],
  };

  // Fill tasksByStatus with corresponding tasks
  taskList.forEach((task) => {
    tasksByStatus[task.status]?.push(task);
  });

  return (
    <div className="task-container">
      <div className="task-grid">
        {Object.keys(tasksByStatus).map((status) => {
          // Assign icons based on status
          let StatusIcon;
          switch (status) {
            case "Todo":
              StatusIcon = <img src={todoIconSmall} alt="Todo" className="icon" />;
              break;
            case "In progress":
              StatusIcon = <img src={inProgressIcon} alt="In Progress" className="icon" />;
              break;
            case "Canceled":
              StatusIcon = <img src={canceledIcon} alt="Canceled" className="icon" />;
              break;
            case "Done":
              StatusIcon = <img src={doneIcon} alt="Done" className="icon" />;
              break;
            case "Backlog":
              StatusIcon = <img src={backlogIcon} alt="Backlog" className="icon" />;
              break;
            default:
              StatusIcon = null;
          }

          return (
            <div key={status} className="task-section">
              <div className="task-header">
                <div className="header-content">
                  {StatusIcon}
                  <div className="status-text">{status}</div>
                  <span className="count-text">{tasksByStatus[status].length}</span>
                </div>
                <div className="header-options">
                  <img src={addIcon} alt="Add" className="option-icon" />
                  <img src={noPriorityIcon} alt="No Priority" className="option-icon" />
                </div>
              </div>
              {sortTasks(tasksByStatus[status], sortBy).map((task) => (
                <div key={task.id} className="task-card">
                  <div className="task-id">{task.id}</div>
                  <div className="task-title">{task.title}</div>
                  <div className="task-details">
                    <div className="priority-tag">
                      <PriorityIcon priority={task.priority} />
                    </div>
                    <div className="task-label">
                      <img src={todoIcon} alt="To-Do" className="icon" />
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

export default TaskStatus;
