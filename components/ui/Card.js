import { StyleSheet, View, Dimensions } from 'react-native'

const Card = ({children}) => {
  return <View style={styles.card}>{children}</View>;
}

export default Card

const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: deviceWidth <= 360 ? 24 : 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#e3fae3',
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25
  },
});