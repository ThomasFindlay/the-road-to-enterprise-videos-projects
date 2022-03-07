import React, { useState } from 'react'
import { contextFactory } from '../../context/helpers/contextFactory'

export type ActiveTab = string
export type SetActiveTab = React.Dispatch<React.SetStateAction<ActiveTab>>

const [useTabsContext, TabsContext] = contextFactory<ActiveTab>()
const [useTabsActionsContext, TabsActionsContext] =
  contextFactory<SetActiveTab>()

export { useTabsContext, useTabsActionsContext }

type TabsProps = {
  children: React.ReactNode
  initialActiveTab: string
}

const Tabs = (props: TabsProps) => {
  const { children, initialActiveTab } = props
  const [activeTab, setActiveTab] = useState(initialActiveTab)

  return (
    <TabsContext.Provider value={activeTab}>
      <TabsActionsContext.Provider value={setActiveTab}>
        {children}
      </TabsActionsContext.Provider>
    </TabsContext.Provider>
  )
}

export default Tabs
