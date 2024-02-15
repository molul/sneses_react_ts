const basePath = "https://tripware.es/wp-content/uploads/";
const snesesPath = basePath + "sneses/";

export const downloads = [
  {
    title: "LATEST BUILD (1.0.7-release-20200122)",
    files: [
      {
        name: "SD Card Image",
        icon: "zip",
        size: "1.22GB",
        url: snesesPath + "releases/sneses_release-1.0.7-20200122.zip",
      },
      {
        name: "Fix for newest RPi 3B+ models",
        description:
          "If you have a new RPi 3B+ model and SNESES doesn't launch, download this file and follow the README.txt inside. A new SNESES version will be eventually uploaded to automate this process",
        icon: "zip",
        size: "12.8MB",
        url: "files/fix_sneses.zip",
      },
    ],
  },
  {
    title: "Doc",
    files: [
      {
        name: "User Manual (English)",
        icon: "pdf",
        size: "2MB",
        url: snesesPath + "doc/SNESES_-_User_Manual.pdf",
      },
      {
        name: "Changelog",
        icon: "txt",
        size: "14.5KB",
        url: snesesPath + "doc/changelog-sneses.txt",
      },
    ],
  },
  {
    title: "Misc",
    files: [
      {
        name: "SNES boxarts",
        icon: "zip",
        size: "771MB",
        url:
          snesesPath +
          "boxarts/Nintendo_-_Super_Nintendo_Entertainment_System.zip",
      },
      {
        name: "Retroarch source code",
        icon: "zip",
        size: "30MB",
        url: snesesPath + "misc/RetroArch-1.7.8.zip",
      },
      {
        name: "Custom overlay kit",
        description: "Use this to customize your SNESES interface.",
        icon: "zip",
        size: "510KB",
        url: snesesPath + "misc/sneses_overlays kit.zip",
      },
    ],
  },
];
/*
name
icon ->  txt pdf zip link
size 

export const estadosOptions = [
    {value: 'no-disponible', label: 'No disponible'},
];
*/
