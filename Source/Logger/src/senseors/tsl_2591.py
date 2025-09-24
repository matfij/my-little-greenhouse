import board
import busio
import adafruit_tsl2591

i2c = busio.I2C(board.SCL, board.SDA)

tsl_2591 = adafruit_tsl2591.TSL2591(i2c)

tsl_2591.gain = adafruit_tsl2591.GAIN_MED
tsl_2591.integration_time = adafruit_tsl2591.INTEGRATIONTIME_300MS
