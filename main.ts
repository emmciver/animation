input.onButtonPressed(Button.A, function () {
    strip = neopixel.create(DigitalPin.P0, 64, NeoPixelMode.RGB)
    strip.setBrightness(175)
    strip.showRainbow(1, 360)
})
input.onGesture(Gesture.Shake, function () {
    strip.clear()
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 64, NeoPixelMode.RGB)
strip.setBrightness(100)
strip.showRainbow(1, 360)
basic.forever(function () {
    strip.rotate(1)
    strip.show()
})
