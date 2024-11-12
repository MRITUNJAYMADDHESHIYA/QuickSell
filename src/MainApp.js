import React, { useState } from 'react';
import './MainApp.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';

function MainApp() {
  const [groupBy, setGroupBy] = useState('status');
  const [sortBy, setSortBy] = useState('priority');

  return (
    <div className="main-app">
      <Header
        onGroupByChange={setGroupBy}
        onSortByChange={setSortBy}
        groupBy={groupBy} // Pass groupBy state
        sortBy={sortBy} // Pass sortBy state
      />
      <Content grouping={groupBy} ordering={sortBy} />
    </div>
  );
}

export default MainApp;
