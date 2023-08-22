import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {colores} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';

interface Props {
  name: string;
  size: number;
  color?: string;
}

export const TouchableIcon = ({name, size, color = colores.primary}: Props) => {
  const {setFavIcon} = useContext(AuthContext);

  return (
    <TouchableOpacity onPress={() => setFavIcon(name)}>
      <Icon name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};
