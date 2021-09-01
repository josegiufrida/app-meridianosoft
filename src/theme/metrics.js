import { Dimensions } from "react-native";

const {width, heigth} = Dimensions.get('window');

const metrics = {
    screenWidth: width < heigth ? width : heigth,
    screenHeight: width < heigth ? heigth : width,
}

export default metrics;


/**
 * This will hold your device dimensions so you can export and use them for responsive layouts. 
 * It will manage all the fonts, margins, and images according to device size.
 */ 