**WARNING: DATA LOSS RISK**

This script finds emails older than a certain number of days (which you set) and moves them straight to your **Bin**. Google normally keeps items in the Bin for about 30 days before **permanently deleting** them. You can also empty the Bin yourself anytime.
**Prerequisites**

* A Google Account (Gmail or Google Workspace).
* Access to Google Apps Script (script.google.com).

 **Copy the Code:**
    * Go to `script.google.com` and start a `New project`.
    * Delete any existing placeholder code in the editor.
    * Copy all the code from the `.gs` file in this repository (usually named `Code.gs` or similar).
    * Paste the code into the Apps Script editor.

2.  **Allow Gmail Access (Enable Service):**
    * In the editor, look for `Services` on the left sidebar. Click the `+` icon next to it.
    * Find `Gmail API` in the list and click `Add`.

3.  **Set Permissions (Manifest File - `appsscript.json`):**
    * We need to tell Google exactly what permissions the script needs.
    * Click the `Project Settings` icon (⚙️) on the left.
    * Tick the box that says "Show 'appsscript.json' manifest file in editor".
    * Click the `Editor` icon (</>) on the left to go back to your code files.
    * You'll see a new file named `appsscript.json`. Click on it.
    * Find the `"oauthScopes"` section. Make sure this line is included inside the square brackets `[...]`. If it's not there, add it. *Make sure commas are placed correctly if you add it to an existing list!*
        ```json
        "[https://www.googleapis.com/auth/gmail.modify](https://www.googleapis.com/auth/gmail.modify)"
        ```
    * You can check the `appsscript.json` file included in this repository to see how the whole section should look.
    * **Save** the `appsscript.json` file (Ctrl+S or the Save icon 💾).

4.  **Edit the Script Settings (Important!):**
    * Go back to your `.gs` script file (like `Code.gs`).
    * Near the top, find the line: `var mymail = "";`
        * Change `""` to `'me'` (with single quotes) if you want to clean your **own** Gmail inbox (the one you are logged in with). This is the most common use.
        * *(For Admins)* If you're a Workspace admin running this for another user, put their full email address in double quotes here (e.g., `"user@yourcompany.com"`). Note: This requires special admin permissions setup beyond this script.
    * Find the line: `d.setDate(d.getDate() - 40);`
        * Change the number `40` to how many days of email you want to **keep**. Emails *older* than this number will be moved to the Bin. For example, to keep roughly the last 3 months (90 days) and delete older ones, change `40` to `90`.

5.  **Save the Script:** Click the Save icon 💾 again.

6.  **Give Permission (Authorization - READ CAREFULLY):**
    * At the top of the editor, make sure the function `deleteMails` is selected in the dropdown menu.
    * Click the `Run` ▶️ button.
    * A popup asking for authorization will appear. Click `Review permissions`.
    * Choose the Google account you want the script to run on (usually the one set in `mymail`).
    * You will likely see a scary "Google hasn’t verified this app" screen. This is normal for scripts you write yourself. Click `Advanced`, then click "Go to [Your Script Name] (unsafe)".
    * Now, **read the permissions screen carefully.** It will ask for permission to "View and manage your mail" (or similar). This is because the script needs to find and move emails to the Bin.
    * **Only click 'Allow' if you are absolutely sure you've configured the script correctly (email address, number of days) and you understand it will move emails to the Bin.**

**How to Run the Script**

* **Run it Once (Manual):** After you've authorized it, just select `deleteMails` from the dropdown and click `Run` ▶️ again. The script will start working. You can check its progress in the `View > Logs` menu. It might take a while for large mailboxes.
* **Run Automatically (Scheduled - Optional, Use with Caution!):**
    * Click the `Triggers` icon (⏰) on the left sidebar.
    * Click `+ Add Trigger`.
    * Set it up like this:
        * Choose which function to run: `deleteMails`
        * Choose which deployment should run: `Head`
        * Select event source: `Time-driven`
        * Select type of time based trigger: `Weekly timer` or `Monthly timer` is usually safest.
        * Select the day and time you want it to run.
    * Click `Save`.
    * **Warning:** Setting a trigger means the script will run and move emails to the Bin automatically based on your settings without asking you again. **Be very sure your settings (especially the number of days) are correct before enabling a trigger.**
