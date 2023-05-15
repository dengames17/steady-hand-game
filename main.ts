let Touches = 3
basic.showNumber(Touches)
basic.forever(function () {
    if (Touches == 0) {
        basic.showString("GAME OVER!!")
    } else {
        basic.showIcon(IconNames.Yes)
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        basic.showIcon(IconNames.No)
        Touches += -1
        basic.showNumber(Touches)
    } else {
        basic.showIcon(IconNames.Yes)
    }
})
