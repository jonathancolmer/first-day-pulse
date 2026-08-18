# First-Day Class Pulse

A no-build, static classroom response app with two views:

- Student: the default URL
- Presenter: append `?role=presenter`
- Presenter demo (sample data, no database writes): append `?role=presenter&demo=1`

The presenter creates a session, clicks the QR code to enlarge it, and students scan to submit an anonymous response. Results update live. Student origins appear as count-scaled pins on an interactive map, with a ranked list and an automatic bar-chart fallback if the mapping library is unavailable. A repeated submission from the same browser edits that browser's existing response rather than adding a duplicate.

## Run locally

From this folder:

```sh
python3 -m http.server 8000
```

Then open:

- `http://localhost:8000/?role=presenter&demo=1` to preview the dashboard
- `http://localhost:8000/` to preview the student view

Firebase modules cannot load from a `file://` URL, so use a local server.

## Deploy on GitHub Pages

Put the contents of this folder at the root of a GitHub repository, enable GitHub Pages for the repository's main branch, then open the published URL with `?role=presenter`.

The app reuses the Firebase project from the Plot Tournament app and stores its data only below `firstDayClassPulse/`. The Firebase configuration in `app.js` identifies the Firebase project; it is not a secret. Access is controlled by the Realtime Database rules.

## Suggested Realtime Database rules

The app is intentionally anonymous and does not use student accounts. These rules allow classroom devices to read session metadata and create/update a response, while preventing students from deleting the whole response collection. Because a static presenter URL has no real authentication, presenter controls are not cryptographically protected.

```json
{
  "rules": {
    "firstDayClassPulse": {
      ".read": true,
      "currentSession": { ".write": true },
      "sessions": { "$session": { ".write": true } },
      "responses": {
        "$session": {
          "$device": {
            ".write": "newData.exists()",
            ".validate": "newData.hasChildren(['locationType','location','year','major','answer']) && newData.child('location').isString() && newData.child('location').val().length <= 60 && newData.child('major').isString() && newData.child('major').val().length <= 80 && newData.child('answer').isString() && newData.child('answer').val().length <= 120"
          }
        }
      }
    }
  }
}
```

If this Firebase database already has rules for other apps, merge the `firstDayClassPulse` block into the existing top-level `rules` object instead of replacing the entire ruleset.

Each new class gets a separate session ID. Past sessions remain in Firebase until you delete them from the Firebase console, which avoids accidental data loss during class.

## Customize

Edit the `CONFIG` object at the top of `app.js` to change the course name, default word-cloud question, database namespace, or Firebase project. The live question can also be changed each time the presenter starts a new session.

The app collects no names or email addresses. A random anonymous device ID is kept in the student's browser local storage so they can edit a response without double-counting.

The presenter map uses [Leaflet](https://leafletjs.com/) with [OpenStreetMap](https://www.openstreetmap.org/) tiles. State and country centroids are embedded in `app.js`; student responses are not sent to a geocoding service.
