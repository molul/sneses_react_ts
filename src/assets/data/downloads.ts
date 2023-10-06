const basePath = "http://tripware.es/wp-content/uploads/";
const snesesPath = basePath + "sneses/";

export const downloads = [
  {
    title: "LATEST BUILD (1.0.7-release-20200122)",
    files: [
      {
        name: "SD Card Image",
        description: "Download this if you haven't installed SNESES yet",
        icon: "zip",
        size: "1.22GB",
        url: snesesPath + "releases/sneses_release-1.0.7-20200122.zip",
      },
      {
        name: "USB Update",
        description:
          "Download this if you already have Blast16 1.0.17 or lower",
        icon: "zip",
        size: "15MB",
        url:
          snesesPath +
          "releases/sneses_release-1.0.7-20200122 (USB update).zip",
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
