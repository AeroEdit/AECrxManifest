{
    "name": "__MSG_extName__",
    "author": "themirrazz@gmail.com",
    "description": "__MSG_extDesc__",
    "version": "1.0",
    "minimum_chrome_version": "90",
    "default_locale": "en-US",
    "commands": {
        "capture_aeroshot": {
            "description": "__MSG_capture_aeroshot__",
            "suggested_key": {
                "chromeos": "Alt+Shift+A"
            }
        }
    },
    "icons": {
        "32": "icons/ae32.png",
        "64": "icons/ae64.png",
        "128": "icons/ae128.png"
    },
    "manifest_version": 3,
    "background": {
        "service_worker": "service-worker.js"
    },
    "permissions": [
        "tabs",
        "accessibilityFeatures.read",  // accessibility accomidations
        "desktopCapture",              // AeroShotCRE
        "storage",
        "unlimitedStorage",            // prevent users from losing data
        "clipboardRead",               // copy and paste
        "clipboardWrite",
        "loginState",
        "offscreen",                   // for playing notification sounds
        "wallpaper",                   // some plugins may need it
        "notifications"                // collab notifications, etc
    ],
    "host_permissions": [
        "https://*/*",                 // access backend + save to Google Drive and DropBox
        "http://*/*"
    ]
}
