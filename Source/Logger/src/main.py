import os
import csv
from datetime import datetime


def init_log():
    now = datetime.now()
    file_path = os.path.join(
        "..", "..", "Logs", "Temperature", f"temperature-{now.year}-{now.month}.csv")
    os.makedirs(os.path.dirname(file_path), exist_ok=True)

    if not os.path.exists(file_path):
        with open(file_path, mode="w", newline="") as file:
            writer = csv.writer(file)
            writer.writerow(["timestamp", "temperature"])


init_log()
