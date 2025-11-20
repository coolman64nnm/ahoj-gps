serial.redirect(SerialPin.P14, SerialPin.P12, BaudRate.BAUD_RATE115200)

def on_forever():
    pass
basic.forever(on_forever)
