export default class User {
    constructor (name, mobile, otp=22222) {
        this.name = name
        this.mobile = String(mobile)
        this.otp = otp
    }

    signedOutUrl () {
        return 'https://tv.independa.com/launch?device_id=699C1B79-582E-408A-B738-87A73D5FA176&device=desktop#block'
    }

    signedInUrl () {
        let url = ''
        switch (this.mobile) {
            case '1222222222':
                url = 'https://tv.independa.com/home?device_id=ANDREW_RIVERAS_SCREEN&device=desktop'
                break
            case '1211111111':
                url = ''
                break
            case '1211111111':
                url = ''
                break
            case '7146844495':
                url = ''
                break
            default:
                url = ''
        }
        return url
    }
}