let counter = 0
input.onPinPressed(TouchPin.P0, function () {
    counter += 1
    basic.showNumber(counter)
})
input.onButtonPressed(Button.A, function () {
    counter = 0
    basic.showNumber(counter)
})
basic.forever(function () {
	
})