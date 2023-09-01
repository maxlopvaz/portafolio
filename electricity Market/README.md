# Understanding the Local Electricity Market

## Background
You work for an energy company in Australia that is planning to expand to Melbourne, Victoria. The company aims to estimate energy prices for the next 12-18 months to use as the basis for contract negotiations. Additionally, the company is considering investing in energy storage capacity using batteries to generate additional revenue.

## Data
You have access to over five years of energy price and demand data.

## Objectives
This project involves the following tasks:

1. Analyze how energy prices change throughout the year and identify patterns by season or month.
2. Build a forecast of daily energy prices for financial planning.
3. Estimate the potential annual revenue from an energy storage venture using retail prices and a 70MWh storage system.

## Code Overview

### Data Preparation
- Load the dataset and parse the 'date' column.
- Handle missing values in the 'solar_exposure' and 'rainfall' columns.

### Energy Price Analysis
- Analyze energy price changes throughout the year.
- Extract month and year from the 'date' column.
- Calculate the average price per month.
- Plot average prices by season and month.

### Price Forecasting
- Set the 'date' column as the index.
- Fit an ARIMA model to the historical price data.
- Forecast future energy prices for the next 12-18 months.
- Plot historical prices and forecasted prices.

### Energy Storage Revenue Estimation
- Calculate price differentials between positive and negative prices.
- Calculate energy stored and sold per day using price differentials.
- Calculate utilization rate of the storage system.
- Calculate revenue per day and annual revenue from the energy storage venture.

## Conclusion
This project provided insights into energy price patterns throughout the year, forecasted daily energy prices, and estimated the potential annual revenue from an energy storage venture. These analyses can guide the company's financial planning and strategic decisions for its expansion into the Melbourne energy market.

For more details and code snippets, refer to the Jupyter Notebook provided in this repository.
