import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    margin: 10,
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
  },
  heartIco: {
    height: 20,
    width: 20,
  },
  backIco: {
    height: 20,
    width: 20,
  },
  itemView: {
    shadowOpacity: 0.15,
    shadowRadius: 30,
    marginVertical: 5,
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
  backBtn: {
    position: 'absolute',
    left: 5,
    top: 5,
  },
  genreTxt: {
    fontWeight: '700',
    marginRight: 10,
  },
  genreView: {
    flexDirection: 'row',
  },
  longDescView: {
    marginTop: 20,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'gray',
  }
});

export default styles;