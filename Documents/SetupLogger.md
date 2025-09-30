## Setup

1. Install Python 3.X

```sh
sudo apt-get update
sudo apt-get install python3.12
```

2. Setup virtual environment

```sh
python -m venv .venv
```

3. Install dependencies

```sh
pip install -r requirements.txt
```

4. Setup .env file

```
LOG_DIR_PATH=/var/log/MyLittleGreenHouse/

```

5. Setup I2C interface

```sh
sudo raspi-config  # enable I2C interface
sudo apt-get install -y i2c-tools
i2cdetect -y 1  # ensure address 29 occupied
```

6. Start application

```sh
python src/main.py
```
