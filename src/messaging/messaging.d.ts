export declare function init(arg: any): void;
export declare function addOnMessageReceivedCallback(callback: Function): Promise<{}>;
export declare function getCurrentPushToken(): Promise<{}>;
export declare function unregisterForPushNotifications(): Promise<{}>;
export declare function handleRemoteNotification(app: any, userInfo: any): void;
export declare function addOnPushTokenReceivedCallback(callback: any): Promise<{}>;
export declare function addBackgroundRemoteNotificationHandler(appDelegate: any): void;
export declare function registerForInteractivePush(model?: any): void;
export declare function prepAppDelegate(): void;
export declare function subscribeToTopic(topicName: any): Promise<{}>;
export declare function unsubscribeFromTopic(topicName: any): Promise<{}>;
export declare function areNotificationsEnabled(): boolean;
export declare const onTokenRefreshNotification: (token: any) => void;

// android. ... 
export declare function onAppModuleLaunchEvent(intent: any): void;

export declare class IosInteractivePushSettings {
    actions: Array<IosInteractiveNotificationAction>;
    categories: Array<IosInteractiveNotificationCategory>;
  
    constructor() {
  
    }
  }
  
  export declare enum IosInteractiveNotificationActionOptions {
    authenticationRequired = 1,
    destructive = 2,
    foreground = 4,
  }
  
  export declare interface IosInteractiveNotificationAction {
    identifier: string;
    title: string;
    // activationMode?: string;
    // destructive?: boolean;
    // authenticationRequired?: boolean;
    options?: IosInteractiveNotificationActionOptions;
    behavior?: string;
  }
  
  export declare interface IosInteractiveNotificationCategory {
    identifier: string;
    actionsForDefaultContext?: string[];
    actionsForMinimalContext?: string[];
  }
  
  export declare class IosPushSettings {
    badge: boolean;
    sound: boolean;
    alert: boolean;
    notificationCallback: Function;
    interactiveSettings: IosInteractivePushSettings;
  
    constructor() {
  
    }
  }
  
  export declare class PushNotificationModel {
    androidSettings: any;
    iosSettings: IosPushSettings;
    onNotificationActionTakenCallback: Function;
  }