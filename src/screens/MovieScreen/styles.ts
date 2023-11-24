import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  contentView:{

  },
  mainContainer: {
    margin: 10,
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  heartIco: {
    height: 20,
    width: 20,
  },
  itemView: {
    shadowOpacity: 0.15,
    shadowRadius: 30,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    padding: 10,
  },
  imgBanner: {
    height: 100,
    width: 70,
    alignSelf: 'center',
  },
  itemName: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '600',
  },
  favoriteButton: {
    position: 'absolute',
    right: 5,
    top: 5,
  },
  tabHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  activeTab: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  notActiveTab: {

  },
  mainHeader: {
    marginBottom: 10,
  },
  tabText: {
    fontSize: 18,
    fontWeight: '700',
  },
  txtInputStl: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 5,
  }
});

export default styles;