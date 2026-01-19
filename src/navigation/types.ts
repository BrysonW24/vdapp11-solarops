import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Main: NavigatorScreenParams<BottomTabParamList>;
  JobDetails: {
    id: string;
    name: string;
    phase: string;
    systemSize?: string;
    status?: string;
  };
  Notifications: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Jobs: undefined;
  Inventory: undefined;
  Map: undefined;
  Timeline: undefined;
  Settings: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
