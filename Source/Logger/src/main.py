import time
from common.config import LOG_INTERVAL_S
from inputs.temperature import process_temperature_log


def main():
    print("\nLogger started")
    try:
        while True:
            time.sleep(LOG_INTERVAL_S)
            process_temperature_log()
    except KeyboardInterrupt:
        print("\nLogger stopped")


if __name__ == "__main__":
    main()
