import time
from common.config import LOG_VALUE_PRECISION
from common.utils import get_log_file_path,  setup_log_file, append_log_file
from senseors.mod_01588 import get_state

domain = "Moisture"
columns = ["timestamp", "moisture"]
max_tries = 10
retry_backoff_s = 2


def process_moisture_log():
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
            moisture = get_state()
            if moisture is not None:
                return round(moisture, LOG_VALUE_PRECISION)
        except:
            pass
        time.sleep(attempt * retry_backoff_s)
