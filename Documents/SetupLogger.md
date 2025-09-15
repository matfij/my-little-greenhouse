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

5. Start application

```sh
python src/main.py
```
