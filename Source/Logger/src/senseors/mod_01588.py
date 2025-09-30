import RPi.GPIO as GPIO

DIGITAL_PIN = 26

GPIO.setmode(GPIO.BCM)
GPIO.setup(DIGITAL_PIN, GPIO.IN)


def get_state():
    state = GPIO.input(DIGITAL_PIN)
    if state == GPIO.HIGH:
        return 1
    else:
        return 0
