import React from 'react';
import urgent from '../SVG/SVG - Urgent Priority colour.svg';
import highpriority from '../SVG/Img - High Priority.svg';
import midpriority from '../SVG/Img - Medium Priority.svg';
import lowpriority from '../SVG/Img - Low Priority.svg';
import nopriority from '../SVG/3 dot menu.svg';
import './PriorityIcon.css';

function PriorityIcon({ priority }) {
  let Icon;

  switch (priority) {
    case 0:
      Icon = <img src={nopriority} alt="No Priority" class="icon" />;
      break;
    case 1:
      Icon = <img src={lowpriority} alt="Low Priority" class="icon" />;
      break;
    case 2:
      Icon = <img src={midpriority} alt="Medium Priority" class="icon" />;
      break;
    case 3:
      Icon = <img src={highpriority} alt="High Priority" class="icon" />;
      break;
    case 4:
      Icon = <img src={urgent} alt="Urgent Priority" class="icon" />;
      break;
    default:
      Icon = null;
  }

  return <>{Icon}</>;
}

export default PriorityIcon;
