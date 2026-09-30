from flask import Flask,jsonify
from flask_cors import CORS
import psutil
import pyusb

app = Flask(__name__)
CORS(app)


def get_removable_devices():
    devices = []

    for part in psutil.disk_partitions(all=False):
        if not part.mountpoint.startswith(("/media/","/run/media/","/mnt/")):
            continue

        try:
            usage = psutil.disk_usage(part.mountpoint)
        except (PermissionError,OSError):
            continue


        devices.append({
            "device":part.device,
            "mountpoint": part.mountpoint,
            "fstype":part.fstype,
            "total_storage": round(usage.total/1024**3),
            "used_storage": round(usage.used/1024**3),
            "free_storage": round(usage.free/1024**3),
        })

    if devices == []:
        print("no devices connected")

    return devices


@app.route("/api/devices")
def devices():
    return jsonify(get_removable_devices())


if __name__ == "__main__":
    app.run(host="127.0.0.1",port=5000,debug=True)