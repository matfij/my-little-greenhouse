import random
import Adafruit_DHT
from common.utils import get_log_file_path,  setup_log_file, append_log_file

domain = "Humidity"
columns = ["timestamp", "humidity"]


def process_humidity_log():
    try:
        file_path = get_log_file_path(domain)
        setup_log_file(file_path, columns)
        value = read_sensor_data()
        append_log_file(file_path, value)
    except Exception as e:
        print(f"Unable to process {domain} log: {e}")


def read_sensor_data():
    pin = 4
    sensor = Adafruit_DHT.DHT11
    humidity, temperature = Adafruit_DHT.read_retry(sensor, pin)
    print("humidity", humidity)
    print("temperature", temperature)
    return random.uniform(40, 70).__round__(2)
