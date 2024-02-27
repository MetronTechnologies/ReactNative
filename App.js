import StaticImages from "./fundamentals//StaticImages";
import RemoteImages from "./fundamentals/RemoteImages";
import ImgBackground from "./fundamentals/ImgBackground";
import TheScrollView from "./fundamentals/TheScrollView";
import Buttons from "./fundamentals/Buttons";
import Pressables from "./fundamentals/Pressables";
import Modals from "./fundamentals/Modals";
import TheStatusBar from "./fundamentals/TheStatusBar";
import TheActivityIndicator from "./fundamentals/TheActivityIndicator";
import TheAlert from "./fundamentals/TheAlert";
import CustomComponent from "./fundamentals/CustomComponent";
import TheStyleSheet from "./fundamentals/TheStyleSheet";
import FlexBoxLayout from "./fundamentals/FlexboxLayout";
import LayoutRelativeAbsolute from "./fundamentals/Layout(Relative & Absolute)";
import DynamicUI from "./fundamentals/DynamicUI";
import DynamicUI2 from "./fundamentals/DynamicUI2";
import TheSafeAreaView from "./fundamentals/TheSafeAreaView";
import ThePlatformSpecificCode from "./fundamentals/ThePlatformSpecificCode";
import CustomButton from "./fundamentals/CustomButton";
import Pokemon from "./fundamentals/PokemonCards/Pokemon";
import {TheList} from "./fundamentals/TheList";
import TheFlatList from "./fundamentals/TheFlatList";
import TheSectionList from "./fundamentals/TheSectionList";
import TheTextInput from "./fundamentals/Forms/TheTextInput";
import TheLoginForm from "./fundamentals/Forms/TheLoginForm";
import TheSwitch from "./fundamentals/Forms/TheSwitch";
import TheNetworking from "./fundamentals/TheNetworking";
import TheNativeStackNavigation from "./fundamentals/Navigations/TheNativeStackNavigation";
import TheDrawerNavigation from "./fundamentals/Navigations/TheDrawerNavigation";
import {AppRegistry} from "react-native";
import TheTabNavigation from "./fundamentals/Navigations/TheTabNavigation";



const App = () => {
  return(
    // <StaticImages/>
    // <RemoteImages/>
    // <ImgBackground/>
    // <TheScrollView/>
    // <Buttons/>
    // <Pressables/>
    // <Modals/>
    // <TheStatusBar/>
    // <TheActivityIndicator />
    // <TheAlert />
    // <CustomComponent name='Bruce Wayne'/>
    // <TheStyleSheet />
    // <FlexBoxLayout />
    // <LayoutRelativeAbsolute/>
    //   <DynamicUI/>
    //   <DynamicUI2/>
    //   <TheSafeAreaView/>
    //   <ThePlatformSpecificCode/>
    //   <CustomButton title="Click this" onPress={() => alert("Pressed")}/>
    //   <Pokemon/>
    //   <TheList/>
    //   <TheFlatList/>
    //   <TheSectionList/>
    //   <TheTextInput/>
    //   <TheSwitch/>
    //   <TheLoginForm/>
    //   <TheNetworking/>
    //   <TheNativeStackNavigation/>
    //   <TheDrawerNavigation/>
      <TheTabNavigation/>
  );
   
}


// AppRegistry.registerComponent(appName.toLowerCase(), () => App);
export default App;