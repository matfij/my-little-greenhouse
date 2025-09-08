import os
from datetime import datetime
from common.config import LOG_DIR


def get_log_file_path(file_name: str):
    now = datetime.now()
    return os.path.join(
        "..", "..", LOG_DIR, file_name, f"{file_name}-{now.year}-{now.month}.csv")


def get_current_timestamp():
    return int(datetime.timestamp(datetime.now()) * 1000)
