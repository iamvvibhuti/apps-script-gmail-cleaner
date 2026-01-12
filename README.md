# Gmail Mail Cleanup Script

Automate the cleanup of old Gmail emails with this **Google Apps Script**.  
This script scans your Gmail account and deletes threads older than a specified number of days.

---

## Features

- Delete emails older than a configurable number of days.
- Logs deleted emails for tracking.
- Supports pagination to handle large mailboxes.
- Fully customizable: account, retention period, and dry-run mode.

---

## Configuration

Edit the top of the script (`deleteMails.gs`) to configure:

```javascript
const EMAIL_ACCOUNT = "your-email@domain.com"; // Gmail account to clean
const DAYS_OLD = 40;                            // Delete emails older than this number of days
const DRY_RUN = true;                           // true = log only, false = actually delete
