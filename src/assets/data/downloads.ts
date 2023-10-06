const basePath = "http://tripware.es/wp-content/uploads/";
const blast16Path = basePath + "blast16/";

export const downloads = [
  {
    title: "LATEST BUILD (1.0.18-release-20200118)",
    files: [
      {
        name: "SD Card Image",
        description: "Download this if you haven't installed Blast16 yet",
        icon: "zip",
        size: "1.22GB",
        url: blast16Path + "releases/blast16_release-1.0.18-20200118.zip",
      },
      {
        name: "USB Update",
        description:
          "Download this if you already have Blast16 1.0.17 or lower",
        icon: "zip",
        size: "15MB",
        url:
          blast16Path +
          "releases/blast16_release-1.0.18-20200118_(USB_update).zip",
      },
    ],
  },
  {
    title: "Changelog",
    files: [
      {
        name: "Changelog",
        icon: "txt",
        size: "14.5KB",
        url: blast16Path + "doc/changelog-blast16.txt",
      },
    ],
  },
  {
    title: "User manual",
    files: [
      {
        name: "User Manual (English)",
        icon: "pdf",
        size: "2MB",
        url: blast16Path + "doc/Blast16_-_User_Manual.pdf",
      },
      {
        name: "User Manual (German)",
        icon: "pdf",
        size: "500KB",
        url: blast16Path + "doc/Blast16_-_User_Manual_(German).pdf",
      },
    ],
  },
  {
    title: "CUSTOM OVERLAY KIT",
    files: [
      {
        name: "Custom overlay kit",
        description: "Use this to customize your Blast16 interface.",
        icon: "zip",
        size: "510KB",
        url: blast16Path + "misc/blast16_overlay kit.zip",
      },
    ],
  },
  // {
  //   title: "Previous build (1.0.17-20191231)",
  //   files: [
  //     {
  //       name: "SD Card",
  //       icon: "zip",
  //       size: "1.3GB",
  //       url: blast16Path + "releases/old/blast16_release-1.0.17-20191231.zip",
  //     },
  //     {
  //       name: "USB updates",
  //       icon: "zip",
  //       size: "16.3MB",
  //       url:
  //         blast16Path +
  //         "releases/old/blast16_release-1.0.17-20191231_(USB_update).zip",
  //     },
  //   ],
  // },
  {
    title: "RETROARCH SOURCE CODE (1.7.8)",
    files: [
      {
        name: "Retroarch source code",
        icon: "zip",
        size: "30MB",
        url: blast16Path + "misc/RetroArch-1.7.8.zip",
      },
    ],
  },
  {
    title: "Boxarts",
    files: [
      {
        name: "Mega Drive/Genesis",
        icon: "zip",
        size: "295MB",
        url: blast16Path + "boxarts/Sega_-_Mega_Drive_-_Genesis.zip",
      },
      {
        name: "European Mega Drive",
        icon: "link",
        size: "",
        url: "https://emumovies.com/files/file/2337-mega-drive-europesouth-america-2d-front-boxart/",
      },
      {
        name: "Master System",
        icon: "zip",
        size: "77MB",
        url: blast16Path + "boxarts/Sega_-_Master_System_-_Mark_III.zip",
      },
      {
        name: "Game Gear",
        icon: "zip",
        size: "71MB",
        url: blast16Path + "boxarts/Sega_-_Game_Gear.zip",
      },
      {
        name: "Mega CD/Sega CD",
        icon: "zip",
        size: "233MB",
        url: blast16Path + "boxarts/Sega_-_Mega_CD_-_Sega_CD.zip",
      },
      {
        name: "Mega Drive 32X/Sega 32X",
        icon: "zip",
        size: "10MB",
        url: blast16Path + "boxarts/Sega_-_32X.zip",
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
