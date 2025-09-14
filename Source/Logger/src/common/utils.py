import os
import csv
from datetime import datetime


def get_current_timestamp():
    return int(datetime.timestamp(datetime.now()) * 1000)


def get_log_file_path(domain: str):
    logs_path = os.environ.get("LOG_DIR_PATH")
    file_name = f"{domain}-{datetime.now().year}-{datetime.now().month:02}.csv"
    return os.path.join(logs_path, domain, file_name)


def setup_log_file(file_path: str, columns: list[str]):
    os.makedirs(os.path.dirname(file_path), exist_ok=True)
    if not os.path.exists(file_path):
        with open(file_path, mode="w", newline="") as file:
            writer = csv.writer(file)
            writer.writerow(columns)


def append_log_file(file_path: str, value: float):
    timestamp = get_current_timestamp()
    with open(file_path, mode="a", newline="") as file:
        writer = csv.writer(file)
        writer.writerow([timestamp, value])
