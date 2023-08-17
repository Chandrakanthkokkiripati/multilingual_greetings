import './index.css'

const TabItem = props => {
  const {activeTab, isActive, changeIdState} = props
  const {id} = activeTab
  const classEle = isActive ? 'is-active' : 'not-active'

  const onClickTab = () => {
    changeIdState(id)
  }

  return (
    <li>
      <button onClick={onClickTab} className={classEle} type="button">
        {activeTab.buttonText}
      </button>
    </li>
  )
}

export default TabItem
