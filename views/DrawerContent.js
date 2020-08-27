import React from 'react';
import {View, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
//React Native Paper
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DrawerContent = (props) => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <>
      <View style={{flex: 1}}>
        <DrawerContentScrollView {...props}>
          <View style={styles.drawerContent}>
            <View style={styles.userInfoSection}>
              <View style={{flexDirection: 'row', marginTop: 15}}>
                <Avatar.Image
                  source={{
                    uri: `https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/a/ab/Iron_Man_Mark_LXXXV.png/revision/latest/top-crop/width/360/height/450?cb=20190405192851&path-prefix=es`,
                  }}
                  size={50}
                />
                <View style={{marginLeft: 15, flexDirection: 'column'}}>
                  <Title style={styles.title}>Kevin Martínez</Title>
                  <Caption style={styles.caption}>@kevinmartinez7</Caption>
                </View>
              </View>

              <View style={styles.row}>
                <View style={styles.section}>
                  <Paragraph style={[styles.paragraph, styles.caption]}>
                    80
                  </Paragraph>
                  <Caption style={styles.caption}>Following</Caption>
                </View>
                <View style={styles.section}>
                  <Paragraph style={[styles.paragraph, styles.caption]}>
                    100
                  </Paragraph>
                  <Caption style={styles.caption}>Follower</Caption>
                </View>
              </View>
            </View>

            <Drawer.Section style={styles.drawerSection}>
              <DrawerItem
                icon={({color, size}) => (
                  <MaterialCommunityIcons
                    name="home-outline"
                    color={color}
                    size={size}
                  />
                )}
                label="Home"
                onPress={() => {}}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <MaterialCommunityIcons
                    name="account-outline"
                    color={color}
                    size={size}
                  />
                )}
                label="Profile"
                onPress={() => {}}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <MaterialCommunityIcons
                    name="bookmark-outline"
                    color={color}
                    size={size}
                  />
                )}
                label="Bookmars"
                onPress={() => {}}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <Ionicons
                    name="ios-settings-outline"
                    color={color}
                    size={size}
                  />
                )}
                label="Settings"
                onPress={() => {}}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <MaterialCommunityIcons
                    name="account-check-outline"
                    color={color}
                    size={size}
                  />
                )}
                label="Support"
                onPress={() => {}}
              />
            </Drawer.Section>

            <Drawer.Section title="Preferences">
              <TouchableRipple
                onPress={() => {
                  toggleTheme();
                }}>
                <View style={styles.preference}>
                  <Text>Dark Theme</Text>
                  <View pointerEvents="none">
                    <Switch color="#3D80E4" value={isDarkTheme} />
                  </View>
                </View>
              </TouchableRipple>
            </Drawer.Section>
          </View>
        </DrawerContentScrollView>
        <Drawer.Section style={styles.bottomDrawerSection}>
          <DrawerItem
            icon={({color, size}) => (
              <MaterialCommunityIcons
                name="exit-to-app"
                color={color}
                size={size}
              />
            )}
            label="Sign Out"
            onPress={() => {}}
          />
        </Drawer.Section>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default DrawerContent;
