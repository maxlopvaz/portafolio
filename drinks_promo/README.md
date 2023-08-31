# Russian Alcohol Consumption Analysis

## Project Overview

This project aims to identify patterns in historical alcohol consumption data for various regions in Russia and recommend top regions for a targeted marketing campaign. The focus is on regions similar to Saint Petersburg, and the goal is to optimize wine sales based on consumer preferences.

## Table of Contents

1. [Project Description](#project-description)
2. [Dataset](#dataset)
3. [Data Cleaning](#data-cleaning)
4. [Analysis Plan](#analysis-plan)
5. [Exploratory Data Analysis (EDA)](#exploratory-data-analysis)
6. [Feature Selection and Engineering](#feature-selection-and-engineering)
7. [Clustering Implementation](#clustering-implementation)
8. [Final Recommendation](#final-recommendation)
9. [Appendix](#appendix)

## Project Description

This project involves analyzing historical alcohol consumption data for different regions in Russia to identify clusters of regions with similar consumption patterns to Saint Petersburg. The goal is to recommend top regions for a targeted marketing campaign focused on increasing wine sales.

## Dataset

The dataset contains information on alcohol consumption per capita for various drink types in different Russian regions. The key variables include year, region, wine, beer, vodka, champagne, and brandy consumption. The data is sourced from 1998 to 2016.

## Data Cleaning

Missing values were identified and regions with substantial missing data were removed from the dataset. This ensures data quality and consistency for analysis.

## Analysis Plan

The analysis plan includes the following steps:

1. Exploratory Data Analysis (EDA) to visualize trends in alcohol consumption across regions and identify differences.
2. Selecting relevant clustering variables based on EDA findings.
3. Implementing hierarchical clustering to group regions similar to Saint Petersburg.
4. Exploring dimensionality reduction using Principal Component Analysis (PCA) to improve clustering.
5. Ranking regions from the same cluster as Saint Petersburg to recommend top regions for the marketing campaign.

## Exploratory Data Analysis (EDA)

EDA revealed several key insights:

- Overall alcohol consumption peaked in 2010 and then declined.
- Beer consumption share decreased significantly, while wine consumption share increased.
- Saint Petersburg showed significant trend differences compared to the national average, especially after 2010.

## Feature Selection and Engineering

Selected features for clustering include wine consumption, segment shares, and segment share growth trends. Exponential moving averages were calculated for wine consumption and segment shares, while share change dynamics were measured using share point change differences.

## Clustering Implementation

Hierarchical clustering was employed to group regions with similar alcohol consumption patterns. Clusters were visualized using dendrograms and t-SNE maps. Principal Component Analysis (PCA) was used to reduce dimensionality and refine clustering.

## Final Recommendation

The final recommendation involved ranking potential regions for the marketing campaign. A predicted wine consumption metric was created using wine consumption, share change, and segment shares. Regions were ranked based on this metric to suggest the top regions for the campaign.

## Appendix

A geo-spatial analysis was performed to validate the hypothesis that geographical proximity correlates with similar consumer preferences. This was visually represented on a map of Russia.

---

Please note that this README provides a summarized overview of the project. You can expand upon each section with more detailed explanations and code snippets as needed.