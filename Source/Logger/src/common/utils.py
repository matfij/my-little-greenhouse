import os
import csv
from pathlib import Path
from datetime import datetime
from common.config import LOG_DIR


def get_current_timestamp():
    return int(datetime.timestamp(datetime.now()) * 1000)


def find_repo_root():
    path = Path(__file__).resolve()
    for parent in path.parents:
        if (parent / ".root").exists():
            return parent


def get_log_file_path(file_name: str):
    repo_root = find_repo_root()
    base = (repo_root / LOG_DIR).resolve()
    now = datetime.now()
    file_dir = base / file_name
    file_dir.mkdir(parents=True, exist_ok=True)
    return str(file_dir / f"{file_name}-{now.year}-{now.month:02}.csv")


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
