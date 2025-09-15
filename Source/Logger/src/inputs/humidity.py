import random
import board
import adafruit_dht
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
    dht11 = adafruit_dht.DHT11(board.D4)
    temperature_c = dht11.temperature
    humidity = dht11.humidity
    print("temperature_c", temperature_c)
    print("humidity", humidity)
    return random.uniform(40, 70).__round__(2)
