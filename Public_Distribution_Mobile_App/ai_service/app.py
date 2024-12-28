from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/predict-replenishment', methods=['GET'])
def predict_replenishment():
    # Dummy data for prediction
    return jsonify({
        "center": "Center A",
        "item": "Wheat",
        "replenishment_date": "2024-01-05"
    })

if __name__ == "__main__":
    app.run(debug=True)
