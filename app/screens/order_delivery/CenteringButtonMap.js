import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from '../../components/icon';

const CenteringButtonMap = props => {
  const {onPress} = props;

  return (
    <TouchableOpacity onPress={() => onPress()} style={styles.centeringButton}>
      <Icon name="direction" style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 30,
    color: '#9aa7fb',
  },
  centeringButton: {
    paddingTop: 10,
    backgroundColor: '#fff',
    position: 'absolute',
    padding: 8,
    bottom: 8,
    right: 8,
    borderRadius: 5,
  },
});

export default CenteringButtonMap;
