# ChronicKidneyDiseasePredictor
Chronic Kidney Disease Prediction Project Report

1. Problem Definition and Category
Title: Chronic Kidney Disease Prediction
Problem Statement: Chronic Kidney Disease (CKD) is a health concern caused by the gradual loss of kidney function which can lead to serious complications if not detected early. This project aims to develop a machine learning model that can accurately predict the presence of CKD in patients based on clinical data.
Category: Supervised Machine Learning - Classification
Objective: To build and deploy a predictive model that classifies whether a patient is at risk of chronic kidney disease (CKD) or not(NOTCKD).

2. Data Source and Preprocessing Steps
Data Source: The dataset used in this project is a kidney disease dataset from a research paper titled A Comparative Study of Machine Learning Approaches for Chronic Kidney Disease Prediction sited at Science Data Bank, published 2025-01-03. This paper can be viewed at (https://www.scidb.cn/en/detail?dataSetId=6abee37c04cb4688bcaedef27755f0b7#p1). 

The dataset includes both numerical and categorical attributes.
Features (24): Age, Blood pressure (bp), Specific gravity (sg) , Albumin (al) , Sugar (su) , Red blood cells (rbc) , Pus cell (pc), Pus cell clumps (pcc), Bacteria (ba), Blood glucose random (bgr), Blood urea (bu), Serum creatinine (sc), Sodium (sod), Potassium (pot), Hemoglobin (hemo), Packed cell volume (pcv), White blood cell count (wc), Red blood cell count (rc), Hypertension (htn), Diabetes mellitus (dm), Coronary artery disease (cad), Appetite (appet), Pedal edema (pe), Anemia (ane).

Target Variable: classification (ckd or notckd)
Preprocessing Steps: 
Removed irrelevant column (‘id’) 
Encoded categorical variables using LabelEncoder 
Handled missing values through imputation of mode and median or removal
Standardized numerical features using StandardScaler 
Split the dataset into training and testing sets using train_test_split


3. Model Description and Performance Metrics
Models Used: Logistic Regression and  XGBoost Classifier (final deployed model)
Training Process: 
Features and labels were extracted after preprocessing 
Both models were trained and evaluated using accuracy and other classification metrics

4. Performance Metrics: 
- XGBoost Classifier: Accuracy~98.75% Precision, Recall, F1 Score: High and balanced 
- Logistic Regression: Accuracy~98.75% Precision, Recall, F1 Score: High and balanced 


5. Reason for Choosing XGBoost:
Handles missing values internally
Strong performance on structured data
Better accuracy and generalization

6.Reflection: What Worked, What Didn’t, and Future Improvements
What Worked:
-Preprocessing pipeline cleaned and prepared the data efficiently
-XGBoost gave high accuracy and robustness
-Flask app successfully integrated with model for real-time predictions
-Robust missing-value handling - Numerical features were imputed using median and categorical features using mode, which preserved data integrity.
-Clear, reusable preprocessing pipelines - Used ColumnTransformer and Pipeline to handle encoding, scaling, and model training in one clean workflow.
-Dual modeling strategy - Logistic Regression provided interpretability; XGBoost delivered strong performance.
-Comprehensive evaluation - Included confusion matrices, percentage annotations, and ROC/AUC curves for a deeper understanding of model behavior.

What Didn’t Work Initially:
-Feature mismatch between training and deployed model caused prediction errors
-Model accuracy dropped when certain features were excluded
-HTML route rendering needed debugging
-Overwriting a single LabelEncoder - Initially used the same encoder for all categorical columns, losing individual mappings. Solved by saving each encoder in a dictionary.
-Unexpected NaNs in target - Typos or formatting issues in the classification column led to NaNs, causing errors in training.
-Loading wrong pickle files - Used models trained with 8 features on a 24-feature input during deployment.
-Manual deployment issues - Without serialized preprocessing steps, client-side had to replicate logic, leading to errors.

Future Improvements:
-Deploy model to cloud platform (Heroku, Render, Docker, PythonAnywhere etc.)
-Improve front-end interface for user friendliness
-Add authentication to the web app for security
-Collect more diverse data for better generalization
-Implement logging and monitoring for app usage
-Hyperparameter tuning and cross-validation - Use GridSearchCV or RandomizedSearchCV for optimizing parameters.
-Feature engineering and selection: Create interaction terms or use tree-based methods to rank and select features.
-Probability calibration: Apply techniques like Platt Scaling or Isotonic Regression to refine probability outputs.
-Production-ready API: Ensure input validation, error handling, and clean JSON responses in a RESTful API.
-Continuous monitoring and drift detection: Track data and model performance over time and retrain as needed.
-Documentation and containerization: Include mapping tables, API specs, and Dockerize the full pipeline for portable deployment.
