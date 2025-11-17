from flask import Flask, jsonify, request
import random

app = Flask(__name__)

@app.route("/weather", methods=["GET"])
def get_weather():
    city = request.args.get("city", "Unknown")
    temperature = round(random.uniform(20, 40), 2)
    condition = random.choice(["Sunny", "Cloudy", "Rainy"])

    return jsonify({
        "city": city,
        "temperature": temperature,
        "condition": condition
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
