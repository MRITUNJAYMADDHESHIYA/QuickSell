const TaskSorting = (tickets, sortBy) => {
        return tickets.sort((a, b) => {
          if (sortBy === 'priority') {
            return b.priority - a.priority;
          }
          return a.title.localeCompare(b.title);
        });
      };

export default TaskSorting