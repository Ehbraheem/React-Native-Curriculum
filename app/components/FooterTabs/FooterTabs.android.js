import React, { PropTypes } from 'react'
import { DrawerLayoutAndroid, Text, View } from 'react-native'
import { colors } from '~/styles'
import IoniconIcon from 'react-native-vector-icons/Ionicons'
import Drawer from './Drawer'

FooterTabs.propTypes = {
  activeFooterTab: PropTypes.string.isRequired,
  navigator: PropTypes.object.isRequired,
  onTabSelect: PropTypes.func.isRequired,
}

export default function FooterTabs ({activeFooterTab, onTabSelect, navigator}) {
  closeDrawer = () => this.drawer.closeDrawer()
  openDrawer = () => this.drawer.openDrawer()
  return (
    <DrawerLayoutAndroid
      ref={(drawer) => this.drawer = drawer}
      drawerWidth={290}
      renderNavigationView={() => (
        <Drawer
          activeFooterTab={activeFooterTab}
          close={closeDrawer}
          onTabSelect={onTabSelect} />
      )}>
        {activeFooterTab === 'home'
          ? <Text>Home</Text>
          : <Text>Your Polls</Text>}
    </DrawerLayoutAndroid>
  )
}