import React, { Component } from 'react'
import { Card, Tab, Tabs } from '@blueprintjs/core'
import ActionsPanel from './panels/actionsPanel/ActionsPanel.js'
import DepositPanel from './panels/depositPanel/DepositPanel.js'

import styles from '../../layouts/WalletLayout.scss'

class WalletMenu extends Component {

  state = {
    tab: '1'
  }

  handleTabChange = (value) => {
    this.setState({ tab: value })
  }

  renderDepositTab = () => {
    return (
      <DepositPanel />
    )
  }

  renderActionsTab = () => {
    return (
      <ActionsPanel />
    )
  }

  renderWalletManagerTab = () => {
    return (
      <div>Wallet Manager Menu</div>
    )
  }

  render () {
    return (
     <div className={styles.walletMenu}>
      <Card className={styles.walletMenuCard}>
        <Tabs id='WalletMenu' onChange={this.handleTabChange} selectedTabId={this.state.tab}>
            <Tab id='1' title='Send and Receive' panel={this.renderActionsTab()} />
            <Tab id='2' title='Deposit' panel={this.renderDepositTab()} />
            <Tab id='3' title='Wallet Manager' panel={this.renderWalletManagerTab()} />
            <Tabs.Expander />
        </Tabs>
      </Card>
      </div>
    )
  }
}

export default WalletMenu
