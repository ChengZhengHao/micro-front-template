import React from 'react';
import './App.css';

function goto(title: string, href: string) {
  window.history.pushState({}, title, href);
}

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <aside>
        {/* 主应用渲染区，用于挂载主应用路由触发的组件 */}
        <ul>
        <li><span onClick={() => goto('home', '/react')}>home</span></li>
        <li><span onClick={() => goto('list', '/react/list')}>list</span></li>
        <li><span onClick={() => goto('static', '/static')}>static</span></li>
        </ul>
      </aside>
      <section>
        {/* 子应用渲染区，用于挂载子应用节点 */}
        <section id="frame"></section>
      </section>
    </div>
  );
}

export default App;
