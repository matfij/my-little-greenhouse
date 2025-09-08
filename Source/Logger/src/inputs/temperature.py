import os
import csv
import random
from datetime import datetime
from common.utils import get_log_file_path, get_current_timestamp


def process_temperature_log():
    try:
        file_path = get_log_file_path("Temperature")
        setup_temperature_logs(file_path)
        value = read_sensor_data()
        write_temperature_log(file_path, value)
    except Exception as e:
        print(F"Unable to process temperature log: {e}")


def setup_temperature_logs(file_path: str):
    os.makedirs(os.path.dirname(file_path), exist_ok=True)
    if not os.path.exists(file_path):
        with open(file_path, mode="w", newline="") as file:
            writer = csv.writer(file)
            writer.writerow(["timestamp", "temperature"])


def read_sensor_data():
    return random.uniform(15, 30).__round__(2)


def write_temperature_log(file_path: str, value: float):
    timestamp = get_current_timestamp()
    with open(file_path, mode="a", newline="") as file:
        writer = csv.writer(file)
        writer.writerow([timestamp, value])
