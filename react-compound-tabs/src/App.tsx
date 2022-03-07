import { Tabs, Tab, TabPanel } from './components/tabs'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Tabs initialActiveTab='account'>
        <div style={{ display: 'flex' }}>
          <Tab id='account'>Account</Tab>
          <Tab id='settings'>Settings</Tab>
          <Tab id='privacy'>Privacy</Tab>
        </div>
        <div
          style={{
            display: 'flex',
            padding: '2rem',
            border: '1px solid gray;',
          }}
        >
          <TabPanel id='account'>Account Panel</TabPanel>
          <TabPanel id='settings'>Settings Panel</TabPanel>
          <TabPanel id='privacy'>Privacy Panel</TabPanel>
        </div>
      </Tabs>
    </div>
  )
}

export default App
