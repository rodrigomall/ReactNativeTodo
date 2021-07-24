import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  container: {
    flex:1,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  containerCenter: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  navBar: {
    marginTop: 20,
    height: 36,
    flexDirection: 'row',
    alignItems: 'center'
  },
  bgWhite: {
    backgroundColor: '#fff'
  },
  ViewDropDown: {
    backgroundColor: '#f0f0f2',
    borderWidth: 1,
    borderColor: 'gray',
    height: 58,
    marginTop: 6,
    paddingHorizontal: 14,
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  textSize16: {
    fontSize: 16
  },
  textSize18: {
    fontSize: 18
  },
  textSize20: {
    fontSize: 20
  },
  textSize22: {
    fontSize: 22
  },
  textSize24: {
    fontSize: 24
  },
  textSize26: {
    fontSize: 26
  },
  textSize28: {
    fontSize: 28
  },
  textSize30: {
    fontSize: 30
  },
  p5: {
    padding: 5
  },
  pt5: {
    paddingTop: 5
  },
  m5: {
    margin: 5
  },
  mb3: {
    marginBottom: 3
  },
  pv4: {
    paddingVertical: 8
  },
  borderPrimary: {
    borderColor: 'gray',
    borderWidth: 1,
    height: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: 16,
    lineHeight: 20,
    color: '#7f8083'
  },
  roundButton: {
    width: 410,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#46c97d',
  },
  textButton: {
    color: 'white',
    fontSize: 22,
  },
  horizontalSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  verticalSpace: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
});

export default styles;