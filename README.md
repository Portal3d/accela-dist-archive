# accela-dist-archive

An archival backup and functional mirror of the defunct ACCELA-DIST web page, recovered via the Wayback Machine. 

## Restoration Details

The original site went offline, so the source code was extracted from internet archives and adapted to run properly. The following essential modifications were made to restore functionality:

* **Local Assets:** Extracted original media and removed all Wayback Machine injection scripts.
* **Preserved Binaries:** Replaced dead API calls with links to the preserved Windows and Linux releases.
* **Domain Updates:** Updated Morrenus API references to point to the new Hubcap manifest.

## Improvements

To make the project more accessible and easier to maintain, the following improvements were added:

* **Code Refactoring:** Separated JS/CSS into standalone files and converted the static HTML guide to dynamic Markdown rendering. *(Thanks to [@aglairdev](https://github.com/aglairdev) for this implementation)*
* **Multi-language Support:** Added English and PT-BR translations with automatic system language detection. *(Thanks to [@aglairdev](https://github.com/aglairdev) for this implementation)*

## Credits
**All the credits go to the original creator of the tool and the website.**
