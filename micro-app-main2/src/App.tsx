import React from 'react';
import './App.css';

function App() {
  return (
    <section id="cns-main-app">
      <section className="cns-menu-wrapper">
        <div>main-menu</div>
      </section>
      <section className="cns-frame-wrapper">
        {/* 主应用渲染区，用于挂载主应用路由触发的组件 */}
        <div>sub-menu</div>

        {/* 子应用渲染区，用于挂载子应用节点 */}
        <section id="frame"></section>
      </section>
    </section>
  );
}

export default App;
