from common.utils import get_log_file_path,  setup_log_file, append_log_file
from senseors.dht_11 import dht_11

domain = "Temperature"
columns = ["timestamp", "temperature"]


def process_temperature_log():
    try:
        file_path = get_log_file_path(domain)
        setup_log_file(file_path, columns)
        value = read_sensor_data()
        append_log_file(file_path, value)
    except Exception as e:
        print(f"Unable to process {domain} log: {e}")


def read_sensor_data():
    return dht_11.humidity.__round__(2)
