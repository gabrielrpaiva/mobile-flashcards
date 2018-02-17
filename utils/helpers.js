import {AsyncStorage} from 'react-native';
import {Notifications, Permissions} from 'expo';
import { NOTIFICATION_KEY } from './_cards' 

const buildNotification = {
    
        title: 'Mobile Flashcards',
        body: "Checkout the new questions today",
        ios: {
            sound: true
        },
        android: {
            sound: true
        },
     
}

export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then(data => {
        
            if (!data) {
                Permissions.askAsync(Permissions.NOTIFICATIONS).then(({status}) => {
                    
                    if (status === 'granted') {
                        Notifications.cancelAllScheduledNotificationsAsync().then(() => {
                            let today = new Date();
                            today.setDate(today.getDate());
                            today.setHours(23, 0, 0);

                            const notification = buildNotification();

                            Notifications.scheduleLocalNotificationAsync(notification, {
                                time: today,
                                repeat: 'day',
                            }).then(result => {

                            });
                        });

                        AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
                    }
                });
            }
        });
}