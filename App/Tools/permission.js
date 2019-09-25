import { Alert, Platform } from 'react-native';
import Permissions from 'react-native-permissions';

export const permissionType = {
  photo: 'photo',
  camera: 'camera'
};

const permissionInfo = {
  photo: {
    title: '給予 WeO 相簿權限',
    description: '使用 WeO 從相簿選擇照片'
  },
  camera: {
    title: '給予 WeO 相機權限',
    description: '使用 WeO 拍攝一張新的照片'
  }
};

export const checkAndRequestPermission = async (type) => {
  try {
    const permissionStatus = await Permissions.check(type);
    // 'authorized' / 'denied' / 'restricted' / 'undetermined'
    if (permissionStatus === 'authorized') {
      return true;
    }
    if (Platform.OS === 'ios' && permissionStatus === 'denied') {
      // iOS only have once chance to show the permission dialog
      // if user had denied permission, you can only request him setting manually enable from setting
      Alert.alert(
        permissionInfo[type].title,
        permissionInfo[type].description,
        [
          {
            text: '取消',
            onPress: () => {},
            style: 'cancel'
          },
          { text: '開啟設定', onPress: Permissions.openSettings }
        ]
      );
    } else {
      // if have no permission, request it
      const res = await Permissions.request(type);
      if (res === 'authorized') {
        return true;
      }
    }
    return false;
  } catch (error) {
    console.log('check and request permission error', error);
  }
};
