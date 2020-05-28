const webPush = require('web-push')

const vapidKeys = {
    publicKey: 'BH7CLufxTvpmkPiFUHx5Z880MgRruU2BBa1dwOsE55oonIw2sOnuWAGpo0eKW2rI7GqIpZysG6QOfLjQ3EoekHA',
    privateKey: '42JkJOt402eI8sLZxYKwxXemOUz2smOBs19SXO8TDHY',
}

webPush.setVapidDetails(
    'mailto:example@com.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey,
)

const pushSubscription = {
    endpoint: 'https://fcm.googleapis.com/fcm/send/caQ3_TLrBuM:APA91bE47T_zw-maKiZQ3ZEsCcl7ctGJtP6IsFzKxQMzOX1dwZHOc7WdZtGy-4E5kphfNlbjziXQLeUAH5GN8aq7eJ-Fvar6xBOG9JXQ29-ZglFImhk1sD0EfGmhmj2qRnv4lePNyk9F',
    keys: {
        p256dh: 'BFfotLR5olkXKrmtYDErDEvshNy3TlSSB9MkWiviIEO7mStvwIL6nB+2+Ap6HM7X2dwo23fAu8Fl3X2R/ORcLsA=',
        auth: 'FVPrmEBk7bGoxA0px/WkNg==',
    },
}

const payload = 'uyey berhasil'

const options = {
    gcmAPIKey: '658962116588',
    TTL: 60,
}

webPush.sendNotification(
    pushSubscription,
    payload,
    options,
).catch(e => {
    console.error(e)
})