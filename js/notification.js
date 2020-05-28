class NotificationManager {
    static async init() {
        if ('Notification' in window) {
            const result = await NotificationManager.reqPermission()

            if (result === 'granted') {
                const registration  = await navigator.serviceWorker.getRegistration()
                registration.showNotification('Permission Granted!')
            }
        } else {
            console.error('Browser kamu ga support notification dong, jadul amat')
        }
    }

    static async reqPermission() {
        try {
            return Notification.requestPermission()
        } catch (e) {
            console.error(`Gagal request permission: ${e}`)
        }
    }

    static async subscribe() {
        try {
            if ('PushManager' in window) {

            }
        } catch (e) {
            console.error(`Hmmm error ya pas subscribe: ${e}`)
        }
    }
}

export {NotificationManager}