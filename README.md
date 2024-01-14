<div align="center">
    <img src="https://raw.githubusercontent.com/nobari/chrome-extension-ts-starter/master/logo/logo-128.png"/>
    <h1>Chrome Extension TypeScript Starter</h1>
    <h3>A starter template of a Chrome extension version 3 with TypeScript</h3>
</div>

This repository offers a TypeScript based Chrome/Chromium extension template employing the updated manifest version (v3). You can use this template as a starting point to create your own extension. The repository includes an operational and installable v3 extension example to facilitate immediate development.

## Installing the Extension

Follow these steps to install the extension on your machine:

### 1. Obtain the Repository

**If you are a GitHub user:**
- Create a **fork** of the repository.
- **Clone your forked repository** to your local machine using your preferred Git client or the command line.

**If you are not a GitHub user:**
- Visit the repository page on GitHub.
- Look for the **"Code"** button, then select **"Download ZIP"** from the dropdown menu.
- After the download, **extract the ZIP file** on your computer.

### 2. Prepare the Source Code

Before installing the extension, you'll need to compile the source code:

- Open your command line interface (CLI) and navigate to the root directory of the repository.
- Install the required dependencies by running:

    ```bash
    yarn install
    ```

- Once no errors are reported, proceed to build the source code with:

    ```bash
    yarn build
    ```

- Upon successful completion, the `unpacked` extension directory will be available inside the `extension` folder.

### 3. Load the Extension into Your Browser

To install the extension into a Chromium-based browser, such as Google Chrome, follow these instructions:

- Enter `chrome://extensions` into your browser's address bar to access the extensions management page.
- Enable **"Developer mode"** by toggling the switch located in the top-right corner of the page.
- Click on **"Load unpacked"** to prompt a file selection dialog window.
- Browse to and select the `extension` directory that was created during the build process.
- Once selected, the _TS Extension_ will appear in your list of installed extensions and be ready for use.

## Notes

### reload and hot reload

To make use of the hot reload feature for your project, you can start the development server by entering the command:

```bash
yarn dev
```

This should enable hot reloading, which automatically updates your application with most changes you make to the code without the need for a manual refresh.

If you've made updates to a browser extension but they aren't appearing, you'll need to manually reload the extension to see the changes. Perform the following steps:

1. Navigate to `chrome://extensions/` in your Chrome browser.
2. Locate the card representing your extension.
3. Click on the circular arrow icon (↻), which represents the reload action, on that card.

It’s important to note that if you are making changes to the settings page or popup UI of the extension, a full reload is often not required to see the updates. However, for other types of changes, particularly those that affect background scripts or manifest file updates, you'll need to perform the manual reload process as described above to see the changes take effect.

### compatiblity

Presently, it's functional on all up-to-date Chromium-based browsers that support v3 extensions, including:

- Open-source variants:
  - Chromium
  - Brave
- Proprietary options:
  - Chrome
  - Edge
  - Vivaldi
  - Opera

> What about **Firefox** or **Safari** compatibility?

Firefox uses a distinct extension system; however, converting Chrome extensions to Firefox is often straightforward. For assistance, consult [Firefox's porting guide](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/).

Converting to Safari is typically more complex due to its different format. Further information is available [here](https://bartsolutions.github.io/2020/11/20/safari-extension/).

> Is this extension usable on **Chrome for Android/iOS**?

Mobile versions of Chrome do not support extensions at this time.

> What if my extension does not require a **popup tool**? Can I remove it?

Indeed, you can. Simply delete the `popup` directory and remove the `default_popup` line from the manifest file.

### uninstall

Uninstallation is straightforward:

- Open the extensions management page: `chrome://extensions`.
- Locate the extension's card and click the _Remove_ button at the bottom. If prompted, confirm the action. The extension will be successfully removed.

---
## Directory Breakdown

Here's a breakdown of the project's top-level directories:

```
project-root/
│
├── src/
│   ├── popup/
│   ├── settings/
│   ├── foreground
│   └── service-worker
│
├── extension/
│   ├── popup/
│   ├── settings/
│   ├── foreground
│   ├── service-worker
│   └── [other optimized assets]
│
└── static/
    ├── manifest.json
    ├── logo
    └── [other static assets]
```

### `src/` | Source Code

source codes that need transpile/compile

### `extension/` | Production Build

the unpacked version of the extension ready to be loaded

### `static/` | Unmodified Assets

any file to be instantly copied to the extension folder

---

## External resources

- [Official feature summary for manifest v3](https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview/)
- [Excellent write-ups of a migration](https://github.com/kentbrew/learning-manifest-v3)
- The javascript only template is insipired from [this](https://github.com/SimGus/chrome-extension-v3-starter) repo