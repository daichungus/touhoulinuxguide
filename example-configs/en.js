{
  "console": false,
  "dat_dump": false,
  "patched_files_dump": false,
  "patches": [
    {
      "archive": "repos/nmlgc/base_tsa/" // This is loaded first. All patches require this.
    },
    {
      "archive": "repos/nmlgc/base_tasofro/" // For Twilight Frontier spin-off games
    },
    {
      "archive": "repos/nmlgc/script_latin/" // Latin script (ABC's, etc.)
    },
    {
      "archive": "repos/nmlgc/western_name_order/" // Last First -> First Last (e.g. Hakurei Reimu -> Reimu Hakurei)
    },
    {
      "archive": "repos/thpatch/lang_en/" // This is loaded last
    }
  ]
}