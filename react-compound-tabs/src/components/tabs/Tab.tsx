import { useTabsActionsContext, useTabsContext } from './Tabs'

type TabProps = {
  children: React.ReactNode
  id: string
}

const Tab = (props: TabProps) => {
  const { children, id } = props
  const activeTab = useTabsContext()
  const setActiveTab = useTabsActionsContext()
  const isActive = id === activeTab
  return (
    <button
      style={{
        padding: '1rem 2rem',
        border: 'none',
        background: 'transparent',
        borderBottom: isActive ? '2px solid blue' : '2px solid transparent',
      }}
      id={`tab-${id}`}
      role='tab'
      aria-selected={isActive}
      aria-controls={`tab-panel-${id}`}
      onClick={() => setActiveTab(id)}
    >
      {children}
    </button>
  )
}

export default Tab
