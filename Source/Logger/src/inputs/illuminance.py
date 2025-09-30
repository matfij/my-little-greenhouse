import time
from common.config import LOG_VALUE_PRECISION
from common.utils import get_log_file_path,  setup_log_file, append_log_file
from senseors.tsl_2591 import tsl_2591

domain = "Illuminance"
columns = ["timestamp", "illuminance"]
max_tries = 3
retry_backoff_s = 1


def process_illuminance_log():
    try:
        file_path = get_log_file_path(domain)
        setup_log_file(file_path, columns)
        value = read_sensor_data()
        if value is not None:
            append_log_file(file_path, value)
        else:
            print(f"{domain} sensor not responding")
    except Exception as e:
        print(f"Unable to process {domain} log: {e}")


def read_sensor_data():
    for attempt in range(max_tries):
        try:
            lux = tsl_2591.lux
            if lux is not None:
                return round(lux, LOG_VALUE_PRECISION)
        except:
            pass
        time.sleep(attempt * retry_backoff_s)
