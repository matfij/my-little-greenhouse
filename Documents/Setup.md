## Setup ASP.NET API

1. Install .Net

```sh
wget https://dot.net/v1/dotnet-install.sh -O dotnet-install.sh
chmod +x dotnet-install.sh
./dotnet-install.sh --channel 9.0
export PATH=$PATH:$HOME/.dotnet
```

2. Build project

```sh
cd /MyLittleGreenhouseServer/MyLittleGreenhouseServer
dotnet restore
dotnet publish -c Release -o ./publish
```

3. Setup Ngrok

```sh
sudo apt-get install snapd
sudo snap install ngrok
export PATH=$PATH:/snap/bin
ngrok config add-authtoken paste_secret_token
```

3. Start server

```sh
dotnet MyLittleGreenhouse.dll --urls "http://0.0.0.0:8080"
ngrok http 8080
```
