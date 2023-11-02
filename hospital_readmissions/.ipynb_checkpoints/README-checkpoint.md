# Reducing Hospital Readmissions: Data Analysis and Predictive Modeling
## Table of Contents
- [Background](#background)
- [Data Cleaning and Preparation](#data-cleaning-and-preparation)
  - [Handling Null Values](#handling-null-values)
  - [Format and Classification](#format-and-classification)
- [Primary Diagnosis by Age Group](#primary-diagnosis-by-age-group)
  - [Diagnosis Distribution Among Age Groups](#diagnosis-distribution-among-age-groups)
- [Effect of Diabetes Diagnosis](#effect-of-diabetes-diagnosis)
  - [Percentage Breakdown of Readmissions by Diagnosis Type](#percentage-breakdown-of-readmissions-by-diagnosis-type)
- [Statistical Analysis](#statistical-analysis)
  - [Glucose Test and A1C Test](#glucose-test-and-a1c-test)
- [Predictive Modeling](#predictive-modeling)
  - [Model Performance](#model-performance)
  - [Feature Importance Analysis](#feature-importance-analysis)
- [Conclusion](#conclusion)

## Background
The objective of this project is to assist a hospital group in gaining a better understanding of patient readmissions. The hospital provided ten years of patient data, including information on readmissions, diagnoses, procedures, and other variables. The goal is to determine if initial diagnoses, the number of procedures, or other factors can help predict and understand the probability of readmission. This information will enable the hospital to focus on follow-up calls and attention for patients with a higher probability of readmission.

## Data Cleaning and Preparation
Before diving into analysis, data quality was assessed and cleaned to ensure reliable results.

### Handling Null Values
The dataset was checked for null values, and no missing data was found in any of the columns.

### Format and Classification
The data was in a consistent format, with categorical variables properly classified.

## Primary Diagnosis by Age Group
To understand the most common primary diagnosis by age group, a count plot was created. It was observed that "Circulatory" was the most common primary diagnosis across all age groups.

A cross-tabulation of age and diag_1 was generated to quantify the diagnosis distribution among age groups.

## Effect of Diabetes Diagnosis
The effect of a diabetes diagnosis on readmission rates was explored. It was found that patients diagnosed with diabetes had a higher probability of readmission compared to those with other primary diagnoses. A percentage breakdown of readmissions by diagnosis type was provided.

## Focus on High-Probability Readmission
It was determined that patients with diabetes had a higher readmission rate, with diabetes management being a potential factor. However, further analysis was needed to identify significant associations with readmissions.

## Statistical Analysis
### Glucose Test and A1C Test
The relationships between glucose test results, A1C test results, and readmissions were investigated. It was observed that there was no significant association between glucose levels and readmissions. However, a significant association was found between A1C levels and readmissions.

## Predictive Modeling
To predict the likelihood of readmission, a logistic regression model was created. Features included age, time_in_hospital, medical_specialty, diagnoses, glucose_test, A1Ctest, change, and diabetes_med.

The model achieved an accuracy of 61% on the test data. The classification report provided additional evaluation metrics, including precision, recall, and F1-score. While the model's performance indicates potential, further refinement and feature engineering may be necessary for improved accuracy.

Feature Importance Analysis
Feature importance analysis was conducted to understand the contribution of each feature to the model's predictions. The analysis revealed the importance of various features in predicting readmissions. Further exploration and feature selection may enhance model performance.

## Conclusion
This report provides insights into hospital readmissions, with a focus on diabetes patients. While diabetes diagnosis appears to be a factor in readmissions, other variables, such as A1C levels, also play a significant role. The logistic regression model offers a starting point for predicting readmissions, but additional refinement is required for practical implementation.

The hospital should consider the findings of this analysis to prioritize follow-up efforts on patients with a higher probability of readmission, especially those with diabetes and elevated A1C levels. Further data collection and model optimization can lead to more accurate predictions and better patient care strategies.

for more information about the procedures of these proyect check the jupyter notebook include in these repository.
