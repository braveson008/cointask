import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Detailed from '../screens/Detailed/Detailed';
import Main from '../screens/Main/Main';

const Navigator = createStackNavigator(
  {
    Main,
    Detailed,
  },
  {headerMode: 'none'},
);

export default createAppContainer(Navigator);
