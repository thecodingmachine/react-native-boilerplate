import Reactotron, {
  type ReactotronReactNative,
} from 'reactotron-react-native';
import mmkvPlugin from 'reactotron-react-native-mmkv';

import config from '../app.json';
import { storage } from './services/storage';

Reactotron.configure({
  name: config.name,
})
  .useReactNative()
  .use(mmkvPlugin<ReactotronReactNative>({ storage }))
  .connect();
