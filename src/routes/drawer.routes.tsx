import { createDrawerNavigator } from '@react-navigation/drawer';

const {Screen, Navigator} = createDrawerNavigator();

import { ScreenA } from '../screens/ScreenA';
import { screenB } from '../screens/ScreenB';
import { ScreenC } from '../screens/ScreenC';

export function DrawerRoutes(){
    return(
        <Navigator>
            <Screen
                name='screenA'
                component={ScreenA}
                
            />
            <Screen
                name='screenB'
                component={screenB}
            />
             <Screen
                name='screenC'
                component={ScreenC}
            />
        </Navigator>
    )
}