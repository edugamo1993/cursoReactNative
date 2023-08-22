import {StyleSheet} from 'react-native';

export const colores = {
  primary: '#5856D6',
};

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
  },
  botonGrande: {
    width: 100,
    height: 100,
    backgroundColor: '#5856D6',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  botonGrandeTexto: {
    color: 'white',
    fontSize: 20,
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
  avatarContainer: {
    alignItems: 'center',
  },
  menuContainer: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
  menuButton: {marginVertical: 10, flexDirection: 'row', alignItems: 'center'},
  menuButtonText: {
    fontSize: 20,
    marginLeft: 10,
  },
});
