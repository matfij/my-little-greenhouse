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


dht11 = adafruit_dht.DHT11(board.D4)


def read_sensor_data():
    return dht11.humidity.__round__(2)
