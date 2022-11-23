/* eslint-disable no-unused-vars */
export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      standing: undefined
      racing: undefined
      'profile-stack': undefined
      profile: undefined
      settings: undefined
      'forgot-password': undefined
      schedule: undefined
      'schedule-stack': {
        screen: 'schedule-details'
        params: {
          round: string
          title: string
          name: string
          firstDate: string
          lastDate: string
          country: string
          isSprint: boolean
        }
      }
      // 'standing-stack': {
      //   screen: 'driver-details'
      //   params: {
      //     name: string
      //   }
      // }
      'schedule-stack': {
        screen: 'schedule-laps'
      }
      // details: {
      //   id: string
      // }
    }
  }
}
