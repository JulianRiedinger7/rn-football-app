import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import AuthNavigator from "./auth";
import TabNavigator from "./tabs";

const AppNavigator = () => {
  const user = useSelector((state) => state.user.data);

  /* later change user ? to user?.photoURL ? */
  return (
    <NavigationContainer>
      {user?.photoURL ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
