# 🩺 Chronic Kidney Disease Predictor

Predicting chronic kidney disease (CKD) risk from clinical data using machine learning.

**🔗 Live Demo:** [ckd-predictor-xznp.onrender.com](https://ckd-predictor-xznp.onrender.com)



## 📌 Overview

| | |
|---|---|
| **Problem Type** | Supervised Machine Learning — Binary Classification |
| **Goal** | Classify patients as `CKD` or `NOTCKD` based on clinical attributes |



Chronic Kidney Disease is a progressive loss of kidney function that can lead to serious complications if not caught early. This project builds and deploys a model that predicts CKD risk from routine clinical measurements, aiming to support earlier detection.



## 📊 Dataset

- **Source:** [A Comparative Study of Machine Learning Approaches for Chronic Kidney Disease Prediction](https://www.scidb.cn/en/detail?dataSetId=6abee37c04cb4688bcaedef27755f0b7#p1) — Science Data Bank, published Jan 3, 2025
- **Size:** 24 features, mix of numerical and categorical
- **Target:** `classification` → `ckd` / `notckd`

<details>
<summary><strong>Full feature list</strong></summary>

| Feature | Description |
|---|---|
| age | Age |
| bp | Blood pressure |
| sg | Specific gravity |
| al | Albumin |
| su | Sugar |
| rbc | Red blood cells |
| pc | Pus cell |
| pcc | Pus cell clumps |
| ba | Bacteria |
| bgr | Blood glucose random |
| bu | Blood urea |
| sc | Serum creatinine |
| sod | Sodium |
| pot | Potassium |
| hemo | Hemoglobin |
| pcv | Packed cell volume |
| wc | White blood cell count |
| rc | Red blood cell count |
| htn | Hypertension |
| dm | Diabetes mellitus |
| cad | Coronary artery disease |
| appet | Appetite |
| pe | Pedal edema |
| ane | Anemia |

</details>

### Preprocessing Pipeline

1. Removed irrelevant `id` column
2. Encoded categorical variables with `LabelEncoder`
3. Imputed missing values (mode for categorical, median for numerical) or removed where appropriate
4. Standardized numerical features with `StandardScaler`
5. Split data into training and test sets via `train_test_split`



### Why XGBoost was chosen for deployment

- Handles missing values internally
- Strong performance on structured/tabular data
- Better generalization to unseen data



## 🚀 Try It Live

👉 [ckd-predictor-xznp.onrender.com](https://ckd-predictor-xznp.onrender.com)



## 🛠️ Tech Stack

- Python
- scikit-learn (Logistic Regression, preprocessing)
- XGBoost
- Deployed on Render



## ⚠️ Disclaimer

This tool is for educational/research purposes only and is **not** a substitute for professional medical diagnosis.
