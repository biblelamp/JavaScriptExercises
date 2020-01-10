input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Surprised)
    basic.pause(1000)
    basic.showIcon(IconNames.Asleep)
})