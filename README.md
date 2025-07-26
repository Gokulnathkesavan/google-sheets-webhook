# Google Sheets Webhook API

![Google Sheets](https://img.shields.io/badge/Google%20Sheets-API%20Webhook-34a853) 
![Webhook](https://img.shields.io/badge/Webhook-Ready-important) 
![License](https://img.shields.io/badge/License-MIT-blue)

## Table of Contents
1. [Features](#-features)
2. [Setup Guide](#-setup-guide)
3. [API Documentation](#-api-documentation)
4. [Examples](#-examples)
5. [Troubleshooting](#-troubleshooting)
6. [Advanced](#-advanced-usage)

---

## ✨ Features
- **Auto-generated IDs** - Sequential serial numbers
- **Smart Timestamps** - Accurate arrival time logging
- **Data Validation** - Enforces required fields
- **Error Handling** - Detailed error responses
- **Audit Trail** - Complete request history

---

## 🛠 Setup Guide

### 1. Google Sheets Setup
1. Create new spreadsheet
2. Name first sheet: `DataLog` (exact match)
3. Set these headers in Row 1:

| Column | Description | Example |
|--------|-------------|---------|
| A | ID | 1001 |
| B | Parent Name | "John Doe" |
| ... | ... | ... |
| J | Timestamp | Auto-filled |

### 2. Script Deployment
```javascript
1. Extensions > Apps Script
2. Paste the webhook code
3. Click Deploy > New Deployment
4. Select:
   - Type: Web App
   - Execute as: Me
   - Who has access: Anyone
5. Copy the webhook URL
