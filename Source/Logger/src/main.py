import time
from dotenv import load_dotenv
from common.config import LOG_INTERVAL_S
from inputs.temperature import process_temperature_log
from inputs.humidity import process_humidity_log
from Source.Logger.src.inputs.illuminance import process_illuminance_log


def main():
    print("\nLogger started")
    try:
        while True:
            time.sleep(LOG_INTERVAL_S)
            process_temperature_log()
            process_humidity_log()
            process_illuminance_log()
    except KeyboardInterrupt:
        print("\nLogger stopped")


if __name__ == "__main__":
    load_dotenv()
    main()
