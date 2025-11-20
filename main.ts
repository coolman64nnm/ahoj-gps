serial.redirect(SerialPin.P14, SerialPin.P12, BaudRate.BaudRate115200)
basic.forever(function on_forever() {
    basic.showNumber(27)
    
})
