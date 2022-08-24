input.onPinPressed(TouchPin.P0, function () {
    Count += 1
    basic.showNumber(Count)
})
let Count = 0
pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
Count = 0
basic.showNumber(Count)
