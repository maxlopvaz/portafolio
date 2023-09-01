# A/B Testing para Análisis de Impacto de Rediseño de Sitio Web

## Descripción del Proyecto

Este repositorio contiene el análisis de una prueba A/B realizada por una pequeña startup en el área metropolitana de la Ciudad de México. La startup ha emprendido un rediseño de su sitio web con el objetivo de mejorar potencialmente las tasas de clics y conversiones. Este proyecto se enfoca en evaluar el impacto del rediseño a través del análisis estadístico, determinar si las mejoras observadas son estadísticamente significativas y brindar recomendaciones basadas en los resultados.

## Objetivos Principales

Los objetivos principales de este proyecto son los siguientes:

1. Analizar las tasas de conversión para cuatro grupos: los diseños antiguos y nuevos del sitio web, junto con los conjuntos de imágenes antiguos y nuevos.
2. Determinar si los incrementos observados en las tasas de conversión pueden atribuirse al azar.
3. Proporcionar recomendaciones sobre qué versión del sitio web adoptar según el análisis.

## Datos

El conjunto de datos proporcionado por la startup incluye las siguientes variables:

- "tratamiento": Indica si el usuario vio la nueva versión del sitio web ("sí" o "no").
- "nuevas_imágenes": Indica si se utilizaron las nuevas imágenes ("sí" o "no").
- "convertido": Variable binaria (1 o 0) que indica si el usuario se unió al sitio.

El grupo de control consiste en usuarios con "no" en ambas columnas "tratamiento" y "nuevas_imágenes", lo que representa la versión antigua del sitio web con el conjunto antiguo de imágenes.

## Pasos del Análisis

El análisis se realizó utilizando Python y sus bibliotecas. Aquí tienes una descripción general de los pasos realizados:

1. **Preparación de Datos:** Se verificó la presencia de datos faltantes, se exploraron las características del conjunto de datos y se aseguró la integridad de los datos.

2. **Análisis Exploratorio:** Se agruparon los datos según el tratamiento y las nuevas imágenes, calculando la tasa de conversión promedio para cada grupo.

3. **Prueba de Hipótesis:** Se creó una tabla de contingencia para contar las combinaciones de variables y se realizó una prueba de chi-cuadrado para determinar si los incrementos observados en las tasas de conversión son estadísticamente significativos.

## Conclusión

Basado en los resultados de la prueba A/B y el análisis estadístico, se concluyó que los incrementos observados en las tasas de conversión no son estadísticamente significativos. Esto sugiere que los cambios realizados en el rediseño del sitio web no condujeron a una mejora significativa en las tasas de conversión. Por lo tanto, no se puede recomendar una combinación específica de manera definitiva. Sin embargo, vale la pena considerar la combinación que tuvo la tasa de conversión más alta: tratamiento = Sí y nuevas_imágenes = No.

Para un análisis detallado y la implementación del código, consulta el Cuaderno Jupyter en este repositorio.


---------------

# A/B Testing for Website Redesign Impact Analysis

## Project Overview

This repository contains the analysis of an A/B test conducted by a small startup in the Mexico City metropolitan area. The startup has undertaken a website redesign with the aim of potentially enhancing click-through and conversion rates. This project focuses on evaluating the impact of the redesign through statistical analysis, determining if the observed improvements are statistically significant, and making recommendations based on the results.

## Main Objectives

The primary objectives of this project are as follows:

1. Analyze conversion rates for four groups: the old and new website designs, along with the old and new sets of images.
2. Determine if the observed increases in conversion rates can be attributed to random chance.
3. Provide recommendations on which version of the website to adopt based on the analysis.

## Data

The dataset provided by the startup includes the following variables:

- "treatment": Indicates whether the user saw the new version of the website ("yes" or "no").
- "new_images": Indicates whether the new set of images was used ("yes" or "no").
- "converted": Binary variable (1 or 0) indicating if the user joined the site.

The control group consists of users with "no" in both the "treatment" and "new_images" columns, representing the old version of the website with the old set of images.

## Analysis Steps

The analysis was carried out using Python and its libraries. Here's an overview of the steps performed:

1. **Data Preparation:** Checked for missing data, explored the dataset's characteristics, and ensured data integrity.

2. **Exploratory Analysis:** Grouped the data by treatment and new_images, calculating the mean conversion rate for each group.

3. **Hypothesis Testing:** Created a contingency table to count combinations of variables and conducted a chi-squared test to determine if the observed increases in conversion rates are statistically significant.

## Conclusion

Based on the A/B test results and statistical analysis, it was concluded that the observed increases in conversion rates are not statistically significant. This suggests that the changes made in the website redesign did not lead to a significant improvement in conversion rates. Therefore, no specific combination can be definitively recommended. However, it's worth considering the combination that had the highest conversion rate: treatment = Yes and new_images = No.

For a detailed analysis and code implementation, refer to the Jupyter Notebook in this repository.
