import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const scaleWidth = screenWidth / 390;
const scaleHeight = screenHeight / 812;
const screenScale = Math.min(scaleWidth, scaleHeight);

export default () => {

    const normalize = (size) => {
        return Math.ceil(size * screenScale);
    }

    return { normalize }
}

