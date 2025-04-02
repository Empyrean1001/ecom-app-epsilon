import { getAnalytics } from '@react-native-firebase/analytics';
const analytics = getAnalytics();

export async function trackEvent(
  eventName: string,
  params: Record<string, any> = {}
): Promise<void> {
  try {
    await analytics.logEvent(eventName, params);
    console.log(`Event '${eventName}' sent to GA4 with params:`, params);
  } catch (error) {
    console.error('Error sending event to GA4', error);
  }
}

export async function trackAppInstanceId(): Promise<string | null> {

    try{
        const appInstanceId = await analytics.getAppInstanceId();
        console.log('App instance ID is: ', appInstanceId);
      } catch(error) {
        console.error('There was an error in fetching the app Instance ID', error);
      }

}

