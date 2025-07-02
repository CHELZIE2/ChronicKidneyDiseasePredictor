"""
Flask application for predicting chronic kidney disease risk
using a pre-trained XGBoost model.
"""

import os
import joblib
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import numpy as np


print(f"Templates directory: {os.path.join(os.getcwd(), 'templates')}")


app = Flask(__name__)
CORS(app)

# Load your trained XGBoost model
model = joblib.load("xgb_kidney_disease_model.pkl")  # Ensure the correct model file is used

@app.route('/')
def home():
    """
    Serve the home page.
    """
    return render_template("index.html")

@app.route('/predict', methods=['POST'])
def predict():
    """
    Handle prediction requests.
    """
    data = request.json
    features = data.get('features', None)

    print(f"Received features: {features}")

    # Check if features are provided and match the required length
    if features is None or len(features) != 24:
        print("Error: Incorrect number of features.")
        return jsonify({'error': 'Please provide 24 numeric features.'}), 400
    try:
        # Convert the features to a NumPy array
        features = np.array(features, dtype=float).reshape(1, -1)
        print(f"Features as numpy array: {features}")
        # Make predictions using the model
        prediction = model.predict(features)[0]
        proba = model.predict_proba(features)[0][1]
        print(f"Prediction: {prediction}, Probability: {proba}")    
    except ValueError as ve:
        print(f"ValueError during prediction: {ve}")
        return jsonify({'error': 'Invalid feature values.'}), 400
            
    except AttributeError as ae:
        print(f"AttributeError during prediction: {ae}")
        return jsonify({'error': 'Model is not properly loaded or missing methods.'}), 500


    # Format the result labels
    result = "CKD" if prediction == 1 else "NOTCKD"

    # Return the prediction and probability
    return jsonify({
        "prediction": result,
        "probability": round(float(proba), 4)
    })

if __name__ == '__main__':
    # Run the Flask app
    app.run(debug=True, port=3000)
