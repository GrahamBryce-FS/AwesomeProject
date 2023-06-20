import { StyleSheet,Platform } from 'react-native';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  largeHeading: {
    fontSize: 30,
    fontStyle: 'bold'
  },
  listContainer: {
    flexGrow: 0,
    flexShrink:0
  },
  movieItem: {
    paddingVertical: 10,
  },
  movieTitle: {
    color: 'blue',
  },
  detailsButton: {
    backgroundColor: '#6c63ff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  detailsButtonText: {
    color: 'white',
  },
  deleteButton: {
    padding: 10,
    backgroundColor: '#ff0040',
    color: '#fff',
    border: 'none',
    borderRadius: 5,
    fontSize: '16px',
    cursor: 'pointer',
  },
  headingColor: {
    ...Platform.select({
      android: {
        color: 'yellow',
      },
      ios: {
        color: 'red',
      },
      default: {
        color: 'blue',
      }
    })
  }
});

export default styles;