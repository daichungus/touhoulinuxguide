{
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
      "archive": "repos/tpZHCNex/taso/" // This and the next one are required for Chinese support on Twilight Frontier games
    },
    {
      "archive": "repos/tpZHCNex/tsa/"
    },
    {
      "archive": "repos/thpatch/lang_zh-hans/" // This is loaded last.
    }
  ]
}