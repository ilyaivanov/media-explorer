import { NodesContainer, RootState } from "../types";

const itemsArray = [
  {
    id: "playground1",
    title: "My Playground",
    type: "folder",
    children: [
      {
        id: "playground11",
        title: "Sync24 - DOT",
        itemId: "vQFDW0_GB8Q",
        type: "video",
        image: "https://i.ytimg.com/vi/vQFDW0_GB8Q/mqdefault.jpg",
        children: [],
      },
      {
        id: "playground12",
        title: "Something Something",
        itemId: "_WGJ83wSibc",
        type: "video",
        image: "https://i.ytimg.com/vi/_WGJ83wSibc/mqdefault.jpg",
        children: [],
      },
    ],
  },
  {
    id: "6AMvzfzD1jNf0shVG8Fy",
    title: "Trance/House Sets",
    type: "folder",
    children: [
      {
        id: "0.8218925884000752",
        title: "Deep house",
        type: "folder",
        children: [
          {
            id: "6b71fb1aeeaa0db208ef3f7e",
            title:
              "Deep House Mix 2015 #92 | Tropical House Mix by Luca dot DJ",
            itemId: "bYiSLGZlY7A",
            image: "https://i.ytimg.com/vi/bYiSLGZlY7A/mqdefault.jpg",
          },
          {
            id: "59ee76602effda59422b1c26",
            title:
              "The Best Of Vocal Deep House Nu Disco 2013 (2 Hour Mixed By Zeni N)",
            itemId: "iIO-xrZ6IE0",
            image: "https://i.ytimg.com/vi/iIO-xrZ6IE0/mqdefault.jpg",
          },
          {
            id: "247ca74070c99d7c941f64c5",
            title: "Deep House Mix 2015 #85 | New House Music Mixed by XYPO",
            itemId: "49bwFBvHM9A",
            image: "https://i.ytimg.com/vi/49bwFBvHM9A/mqdefault.jpg",
          },
          {
            id: "8e06b8a6cae789977ead9309",
            title:
              "Feeling Happy - Best Of Vocal Deep House Music Chill Out - Mix By Regard #3",
            itemId: "Dz-ZjC0GywY",
            image: "https://i.ytimg.com/vi/Dz-ZjC0GywY/mqdefault.jpg",
          },
          {
            id: "979b8fca092882548968cedd",
            title:
              "The Best Of Vocal Deep House Chill Out Music 2015 (2 Hour Mixed By Regard ) #1",
            itemId: "Z-LyvotnXBA",
            image: "https://i.ytimg.com/vi/Z-LyvotnXBA/mqdefault.jpg",
          },
          {
            id: "1ef218d1a09cb57c8af0d370",
            title: "Best of Vocal Trance Mix HD",
            itemId: "zIjPoj8a4Ko",
            image: "https://i.ytimg.com/vi/zIjPoj8a4Ko/mqdefault.jpg",
          },
          {
            id: "149ec02dab0497ccad35b73b",
            title:
              "Deep & Elegant Vibes • Deep House Mix [Gentleman Selection Vol.4]",
            itemId: "Uj6shBUMZa4",
            image: "https://i.ytimg.com/vi/Uj6shBUMZa4/mqdefault.jpg",
          },
          {
            id: "661422b5f047f7ae37278e2a",
            title: "Y3lloW - Deep House Vocals Winter 2014 Vol.1 HQ",
            itemId: "gmQJVl51yCc",
            image: "https://i.ytimg.com/vi/gmQJVl51yCc/mqdefault.jpg",
          },
          {
            id: "c28910e52f36c5272e4dfb9e",
            title: "Deep House Mix 2015 #85 | New House Music Mixed by XYPO",
            itemId: "csvzQve9PB0",
            image: "https://i.ytimg.com/vi/csvzQve9PB0/mqdefault.jpg",
          },
          {
            id: "2038c5413d5fd3a8926defe3",
            title: "DEEP HOUSE MIX 2015 (1Hour) | Chilled Deep | Vol. 2",
            itemId: "FSPKSBE0MME",
            image: "https://i.ytimg.com/vi/FSPKSBE0MME/mqdefault.jpg",
          },
          {
            id: "f49a66b88ef98cbd9789554c",
            title: "Best Deep House Vocal Mix 2015 (1Hour) | Vol. 5",
            itemId: "vl3A10IfDzQ",
            image: "https://i.ytimg.com/vi/vl3A10IfDzQ/mqdefault.jpg",
          },
          {
            id: "704ac83a21261b906a8208fd",
            title:
              "Deep House Mix 2015 #75 | New Music Mixed by Melody4emotion",
            itemId: "IstWciF_aW0",
            image: "https://i.ytimg.com/vi/IstWciF_aW0/mqdefault.jpg",
          },
          {
            id: "197ea501c4264a23c07b84f4",
            title:
              "Deep House Chill Out Lounge Music | Mixed By Dj Regard | 2013 |",
            itemId: "UPzRv5VVctA",
            image: "https://i.ytimg.com/vi/UPzRv5VVctA/mqdefault.jpg",
          },
          {
            id: "55a3af3327dea10d6862c7b6",
            title: "♫ Best Deep House Mix 2018 Vol. #1 ♫",
            itemId: "cvRbhpvnUuc",
            image: "https://i.ytimg.com/vi/cvRbhpvnUuc/mqdefault.jpg",
          },
          {
            id: "a66e1857726b97f95b759941",
            title:
              "The Best Of Vocal Deep House Chill Out Music 2015 (2 Hour Mixed By Regard ) #4",
            itemId: "9NiMDN1fxno",
            image: "https://i.ytimg.com/vi/9NiMDN1fxno/mqdefault.jpg",
          },
          {
            id: "4e2dd8c466dc30854f6d41a5",
            title: "Deep House Mix 2015 #104 | New Music Mixed by XYPO",
            itemId: "UaLaI_6J5UI",
            image: "https://i.ytimg.com/vi/UaLaI_6J5UI/mqdefault.jpg",
          },
          {
            id: "6fbad7832e79ee73741e21b8",
            title: "Progressive House · Relaxing Focus Music · 24/7 Live Radio",
            itemId: "KvRVky0r7YM",
            image: "https://i.ytimg.com/vi/KvRVky0r7YM/mqdefault.jpg",
          },
          {
            id: "0e7577962d8ad5c77e74c5b3",
            title:
              "Ibiza Vibes | Deep House Mix &amp; Tech House Music 2016 #145 by XYPO",
            itemId: "_HqSqNBNP6k",
            image: "https://i.ytimg.com/vi/_HqSqNBNP6k/mqdefault.jpg",
          },
        ],
      },
      {
        id: "0.90299175428736",
        title: "Boris Brejcha",
        type: "folder",
        children: [
          {
            id: "dd869e870550f28308e13ca5",
            title:
              "Boris Brejcha @ Art of Minimal Techno Tripping - The Mad Doctor by RTTWLR",
            itemId: "WddpRmmAYkg",
            image: "https://i.ytimg.com/vi/WddpRmmAYkg/mqdefault.jpg",
          },
          {
            id: "f28cfb99ddc1cea9c595b73e",
            title:
              "Boris Brejcha @ Art of Minimal Techno Tripping - Mickey &amp; Bad Hot Dogs by RTTWLR",
            itemId: "e4kbKEOJcd4",
            image: "https://i.ytimg.com/vi/e4kbKEOJcd4/mqdefault.jpg",
          },
          {
            id: "5f2a81e164b6b2ee580243fb",
            title:
              "Boris Brejcha & Trippy Code @ Art of Minimal Techno & Melodic Good Life Radio 24/7 Live",
            itemId: "CKPgpUzocRw",
            image: "https://i.ytimg.com/vi/CKPgpUzocRw/mqdefault.jpg",
          },
          {
            id: "264454440520c45706a7b17f",
            title:
              "Boris Brejcha &amp; Art of Minimal Techno Favourites - Classic Cartoons by RTTWLR",
            itemId: "5Wa_CwRK9I4",
            image: "https://i.ytimg.com/vi/5Wa_CwRK9I4/mqdefault.jpg",
          },
          {
            id: "5f344ec3707a56542478b657",
            title:
              "Boris Brejcha @ Art of Minimal Techno Tripping - Lucky Rabbit by RTTWLR",
            itemId: "jEF-0DY8pJw",
            image: "https://i.ytimg.com/vi/jEF-0DY8pJw/mqdefault.jpg",
          },
        ],
      },
      {
        id: "0.56135308959955",
        title: "Other",
        type: "folder",
        children: [
          {
            id: "086da56677a362590c0d41da",
            title:
              "Best of Shingo Nakamura 01 (2-Hour Melodic Progressive House Mix)",
            itemId: "WYp9Eo9T3BA",
            image: "https://i.ytimg.com/vi/WYp9Eo9T3BA/mqdefault.jpg",
          },
          {
            id: "0b37c502d09b5504648ba376",
            title:
              "Best of Shingo Nakamura 02 (2-Hour Melodic Progressive House Mix)",
            itemId: "XSBmtKpcoTg",
            image: "https://i.ytimg.com/vi/XSBmtKpcoTg/mqdefault.jpg",
          },
        ],
      },
      {
        id: "0.6370634151427679",
        title: "Radio Intense",
        type: "folder",
        children: [
          {
            id: "ecfe85ebc22287f3e0b9820a",
            title: "@Miss Monique  - Live @ Radio Intense 31.01.2017",
            itemId: "Q-oluoEQCk0",
            image: "https://i.ytimg.com/vi/Q-oluoEQCk0/mqdefault.jpg",
          },
          {
            id: "f23be63deaa6949cec5a945e",
            title: "Miss Monique - Live @ Radio Intense 16.03.2016",
            itemId: "bgGl_E-ZbkI",
            image: "https://i.ytimg.com/vi/bgGl_E-ZbkI/mqdefault.jpg",
          },
          {
            id: "13c7b32e893e92449ccb8545",
            title:
              "Miss Monique - MiMo Weekly Podcast #004 [Progressive Music]",
            itemId: "Tu4liSKkTEs",
            image: "https://i.ytimg.com/vi/Tu4liSKkTEs/mqdefault.jpg",
          },
          {
            id: "1ad198dbcc37f761b2ec3eeb",
            title:
              "@Miss Monique  - Live @ Radio Intense 03.05.2018 // Progressive House, Techno Mix",
            itemId: "jz1aO9bfJCE",
            image: "https://i.ytimg.com/vi/jz1aO9bfJCE/mqdefault.jpg",
          },
          {
            id: "de94a6b8886ded6f340be543",
            title:
              "Miss Monique - MiMo Weekly Podcast #004 [Progressive Music]",
            itemId: "Tu4liSKkTEs",
            image: "https://i.ytimg.com/vi/Tu4liSKkTEs/mqdefault.jpg",
          },
          {
            id: "a5fec59a5cbab8753313db8f",
            title: "Xenia - Live @ Radio Intense 09.05.2017 // Techno Mix",
            itemId: "CrMU8IvK1_k",
            image: "https://i.ytimg.com/vi/CrMU8IvK1_k/mqdefault.jpg",
          },
          {
            id: "9464edddf51a3655f71f6828",
            title: "Xenia - Live @ Radio Intense 24.02.2016 // Melodic Techno",
            itemId: "H12b1vpXQxQ",
            image: "https://i.ytimg.com/vi/H12b1vpXQxQ/mqdefault.jpg",
          },
          {
            id: "3f8376c724da7844181cbb7a",
            title: "Xenia - Live @ Radio Intense 24.02.2016 // Melodic Techno",
            itemId: "H12b1vpXQxQ",
            image: "https://i.ytimg.com/vi/H12b1vpXQxQ/mqdefault.jpg",
          },
          {
            id: "fc20c580cd864b4e829a1032",
            title: "Xenia - Live @ Radio Intense 25.10.2016",
            itemId: "RYObzH_8Tkk",
            image: "https://i.ytimg.com/vi/RYObzH_8Tkk/mqdefault.jpg",
          },
          {
            id: "e7dbd8e5a6da8ee7c5c481e4",
            title: "Xenia @ DJanes.net 18.10.2018 // Progressive, Techno music",
            itemId: "xJ5z8GF1uys",
            image: "https://i.ytimg.com/vi/xJ5z8GF1uys/mqdefault.jpg",
          },
          {
            id: "e050f79e8bcde076611fd604",
            title:
              "Xenia Meow  - Live @ Radio Intense 17.01.2017 (Ksenia Meow)",
            itemId: "QwYWnGw53Js",
            image: "https://i.ytimg.com/vi/QwYWnGw53Js/mqdefault.jpg",
          },
        ],
      },
    ],
  },
  {
    id: "Czqu7HWAGl5m1Yz5NUN8",
    title: "Semi-dark",
    type: "folder",
    children: [
      {
        id: "0.1554975941540664",
        title: "10,000 Days",
        type: "folder",
        children: [
          {
            id: "f600b8321b50c872ad942e9a",
            title: "TOOL - Vicarious (Audio)",
            itemId: "N26N7lQHNW8",
            image: "https://i.ytimg.com/vi/N26N7lQHNW8/mqdefault.jpg",
          },
          {
            id: "7278f3656f9aaccc078f082a",
            title: "TOOL - Jambi (Audio)",
            itemId: "ed_UWFr13pU",
            image: "https://i.ytimg.com/vi/ed_UWFr13pU/mqdefault.jpg",
          },
          {
            id: "90a7d6cea41fa7c21669f202",
            title: "TOOL - Wings For Marie (Pt 1) (Audio)",
            itemId: "BNTo34xOwoM",
            image: "https://i.ytimg.com/vi/BNTo34xOwoM/mqdefault.jpg",
          },
          {
            id: "944ee2361174cf8953b01402",
            title: "TOOL - 10,000 Days (Wings Pt 2) (Audio)",
            itemId: "qJq9y9xPKWs",
            image: "https://i.ytimg.com/vi/qJq9y9xPKWs/mqdefault.jpg",
          },
          {
            id: "dc86c4ad9a3ace9207da1392",
            title: "TOOL - The Pot (Audio)",
            itemId: "civuoU_NE38",
            image: "https://i.ytimg.com/vi/civuoU_NE38/mqdefault.jpg",
          },
          {
            id: "b7c3c97a796d54e4ede581ff",
            title: "TOOL - Lipan Conjuring (Audio)",
            itemId: "M8r5rnamdaI",
            image: "https://i.ytimg.com/vi/M8r5rnamdaI/mqdefault.jpg",
          },
          {
            id: "1b5274fd1411392ee9f536a8",
            title: "TOOL - Lost Keys (Blame Hofman) (Audio)",
            itemId: "vvCM7Qig9qI",
            image: "https://i.ytimg.com/vi/vvCM7Qig9qI/mqdefault.jpg",
          },
          {
            id: "10d801f83c34e436eee8bc7f",
            title: "TOOL - Rosetta Stoned (Audio)",
            itemId: "qnlhVVwBfew",
            image: "https://i.ytimg.com/vi/qnlhVVwBfew/mqdefault.jpg",
          },
          {
            id: "9adac9a1983d20126ba13963",
            title: "TOOL - Intension (Audio)",
            itemId: "LMCU-lYb0G4",
            image: "https://i.ytimg.com/vi/LMCU-lYb0G4/mqdefault.jpg",
          },
          {
            id: "266eeda29f6af8474763c8f4",
            title: "TOOL - Right In Two (Audio)",
            itemId: "bndL7wwAj0U",
            image: "https://i.ytimg.com/vi/bndL7wwAj0U/mqdefault.jpg",
          },
          {
            id: "563ddafb815080cc7dfe34ac",
            title: "TOOL - Viginti Tres (Audio)",
            itemId: "flRx55ucBlQ",
            image: "https://i.ytimg.com/vi/flRx55ucBlQ/mqdefault.jpg",
          },
        ],
      },
      {
        id: "0.8136050295853101",
        title: "Nirvana - Nevermind (Full Album)",
        type: "folder",
        children: [
          {
            id: "cf85b22c5bd1150a85abf22a",
            title: "Smells Like Teen Spirit",
            itemId: "ljUtuoFt-8c",
            image: "https://i.ytimg.com/vi/ljUtuoFt-8c/mqdefault.jpg",
          },
          {
            id: "cf4ee6876cf672c9fccf6a3c",
            title: "In Bloom (Nevermind Version)",
            itemId: "ng_vqlKtxLs",
            image: "https://i.ytimg.com/vi/ng_vqlKtxLs/mqdefault.jpg",
          },
          {
            id: "564de9821c7dd538acbc94e6",
            title: "Come As You Are",
            itemId: "ZEMBDKMtHqM",
            image: "https://i.ytimg.com/vi/ZEMBDKMtHqM/mqdefault.jpg",
          },
          {
            id: "5ad8506828263ad2ed181188",
            title: "Breed",
            itemId: "ox_BG6sLPq8",
            image: "https://i.ytimg.com/vi/ox_BG6sLPq8/mqdefault.jpg",
          },
          {
            id: "7bb5ed64272e8306f8cc0ea8",
            title: "Lithium",
            itemId: "_oWUgfpGi0M",
            image: "https://i.ytimg.com/vi/_oWUgfpGi0M/mqdefault.jpg",
          },
          {
            id: "b4791d114bcbfbe5046320aa",
            title: "Polly",
            itemId: "h5cZvNWxnho",
            image: "https://i.ytimg.com/vi/h5cZvNWxnho/mqdefault.jpg",
          },
          {
            id: "af8382c951d6c107a57267b2",
            title: "Territorial Pissings",
            itemId: "W64Bz9wXvRs",
            image: "https://i.ytimg.com/vi/W64Bz9wXvRs/mqdefault.jpg",
          },
          {
            id: "29610a83712e946680c5db1f",
            title: "Drain You",
            itemId: "jFU6xiWbHT0",
            image: "https://i.ytimg.com/vi/jFU6xiWbHT0/mqdefault.jpg",
          },
          {
            id: "94abb7e71e583a47d32003e6",
            title: "Lounge Act",
            itemId: "jwcq2Ci6jx0",
            image: "https://i.ytimg.com/vi/jwcq2Ci6jx0/mqdefault.jpg",
          },
          {
            id: "84fe8bcc7d3104ac766644bc",
            title: "Stay Away",
            itemId: "UGA6zBEyo8Y",
            image: "https://i.ytimg.com/vi/UGA6zBEyo8Y/mqdefault.jpg",
          },
          {
            id: "f9142f3b87bddd30384e17b8",
            title: "On A Plain",
            itemId: "INFH5bt8hxM",
            image: "https://i.ytimg.com/vi/INFH5bt8hxM/mqdefault.jpg",
          },
          {
            id: "b0893632e52078066086112e",
            title: "Something In The Way",
            itemId: "SVSjcS-N224",
            image: "https://i.ytimg.com/vi/SVSjcS-N224/mqdefault.jpg",
          },
          {
            id: "48a5dc71b4db2de6adbf20ac",
            title: "Endless, Nameless",
            itemId: "MCBzJ2vjYyg",
            image: "https://i.ytimg.com/vi/MCBzJ2vjYyg/mqdefault.jpg",
          },
        ],
      },
      {
        id: "0.7148339006656954",
        title: "New Stack",
        type: "folder",
        children: [
          {
            id: "5ee923cff7ec9cce394104c2",
            title: "Black Label Society: Fire It Up (Mafia Album)",
            itemId: "O3-Wjmb9PBA",
            image: "https://i.ytimg.com/vi/O3-Wjmb9PBA/mqdefault.jpg",
          },
          {
            id: "4674f294dfcfa7c5823263fc",
            title: "Pantera - Vulgar Display of Power (Full Album)",
            itemId: "v8a6zPe9VxU",
            image: "https://i.ytimg.com/vi/v8a6zPe9VxU/mqdefault.jpg",
          },
          {
            id: "01b60e2fbccb4fa1c3e7a5eb",
            title: "Pantera Power Metal Full Album (1988)",
            itemId: "qDpkhGBc7AA",
            image: "https://i.ytimg.com/vi/qDpkhGBc7AA/mqdefault.jpg",
          },
          {
            id: "d08931b4737b7a94fafac4f6",
            title: "(1990) Full Album (HQ)",
            itemId: "BdjUFXK9LC4",
            image: "https://i.ytimg.com/vi/BdjUFXK9LC4/mqdefault.jpg",
          },
          {
            id: "19c876aa6be3937bb2bc6df3",
            title: "Pantera: Far Beyond Driven",
            itemId: "wSuOlMedzlw",
            image: "https://i.ytimg.com/vi/wSuOlMedzlw/mqdefault.jpg",
          },
          {
            id: "fa6459ef78dc10b32546a150",
            title: "Metallica- St.Anger [FULL ALBUM]",
            itemId: "_3ZMQoRHkas",
            image: "https://i.ytimg.com/vi/_3ZMQoRHkas/mqdefault.jpg",
          },
          {
            id: "7d3041fecaad226bda0953cc",
            title: "Black Label Society Hangover Music Vol. VI Full Album)",
            itemId: "p38eoc9xxCQ",
            image: "https://i.ytimg.com/vi/p38eoc9xxCQ/mqdefault.jpg",
          },
        ],
      },
    ],
  },
  {
    id: "DT9nA3Q0mOnVnBf32TG4",
    title: "Motivation",
    type: "folder",
    children: [
      {
        id: "0.19850903044690682",
        title: "Morning",
        type: "folder",
        children: [
          {
            id: "72f4ac272a4056a82da20eee",
            title: "WATCH THIS EVERY DAY - Motivational Speech By JOE ROGAN",
            itemId: "Sdu_1_A0dcM",
            image: "https://i.ytimg.com/vi/Sdu_1_A0dcM/mqdefault.jpg",
          },
          {
            id: "72657023dd1e51ffb184aef4",
            title:
              "Joe Rogan's Life Advice Will Change Your Life (MUST WATCH) | Joe Rogan Motivation",
            itemId: "P9yQnwpVcsQ",
            image: "https://i.ytimg.com/vi/P9yQnwpVcsQ/mqdefault.jpg",
          },
          {
            id: "f5ff930ffd50610bead22eeb",
            title: "RETRAIN YOUR MIND - New Motivational Video (JOE ROGAN)",
            itemId: "ysTGb27yCcc",
            image: "https://i.ytimg.com/vi/ysTGb27yCcc/mqdefault.jpg",
          },
          {
            id: "4c2d5a69b559b47b8a7a83a8",
            title: "Incredible Motivational Speech By Jordan Peterson",
            itemId: "8hTSK1iDcvQ",
            image: "https://i.ytimg.com/vi/8hTSK1iDcvQ/mqdefault.jpg",
          },
          {
            id: "ab8d178f73291353a2ac1546",
            title: "You Will Never Look At Life The Same | Jordan Peterson",
            itemId: "r-oNXuLDIfU",
            image: "https://i.ytimg.com/vi/r-oNXuLDIfU/mqdefault.jpg",
          },
          {
            id: "947f17756d07936e5cfe53bf",
            title:
              "Jordan Peterson: 5 Hours for the NEXT 50 Years of Your LIFE (MUST WATCH)",
            itemId: "W8e_dvbXoCQ",
            image: "https://i.ytimg.com/vi/W8e_dvbXoCQ/mqdefault.jpg",
          },
        ],
      },
    ],
  },
  {
    id: "EbI3DyvOGO2mm234m95j",
    title: "Dark Side",
    type: "folder",
    children: [
      {
        id: "0.45995652134049303",
        title: "Dimmu Borgir - Puritanical Euphoric Misanthropia",
        type: "folder",
        children: [
          {
            id: "2ceaf564bb1911fa94b671a0",
            title: "Fear and Wonder",
            itemId: "7GfDX9u0puo",
            image: "https://i.ytimg.com/vi/7GfDX9u0puo/mqdefault.jpg",
          },
          {
            id: "fd9b1f9b13c08fa07b160b08",
            title: "Blessings Upon the Throne of Tyranny",
            itemId: "W_y1JFYzVR8",
            image: "https://i.ytimg.com/vi/W_y1JFYzVR8/mqdefault.jpg",
          },
          {
            id: "5614b09ba5e5a65b8cbcd1c5",
            title: "Kings of the Carnival Creation",
            itemId: "qjDiwUqavyU",
            image: "https://i.ytimg.com/vi/qjDiwUqavyU/mqdefault.jpg",
          },
          {
            id: "b5a289fcbaa2cc5e4ee4c84e",
            title: "Hybrid Stigmata",
            itemId: "KlZWv5POkNo",
            image: "https://i.ytimg.com/vi/KlZWv5POkNo/mqdefault.jpg",
          },
          {
            id: "3a0a830027d7292b84ae2d8c",
            title: "Architecture of a Genocidal Nature",
            itemId: "79TcMaH4WUI",
            image: "https://i.ytimg.com/vi/79TcMaH4WUI/mqdefault.jpg",
          },
          {
            id: "732e9fd17d2487bd9d9840d2",
            title: "Puritania",
            itemId: "5_-duLEmtEo",
            image: "https://i.ytimg.com/vi/5_-duLEmtEo/mqdefault.jpg",
          },
          {
            id: "0fd1c0b31c2b33ebc32c4a25",
            title: "Indoctrination",
            itemId: "VXi5Mb-D1SY",
            image: "https://i.ytimg.com/vi/VXi5Mb-D1SY/mqdefault.jpg",
          },
          {
            id: "d2af280aa7101a667c20306a",
            title: "The Maelstrom Mephisto",
            itemId: "f5hEVbAHw94",
            image: "https://i.ytimg.com/vi/f5hEVbAHw94/mqdefault.jpg",
          },
          {
            id: "451c2e4b5804d4b46409bcd9",
            title: "Absolute Sole Right",
            itemId: "b0WTHOzVUWI",
            image: "https://i.ytimg.com/vi/b0WTHOzVUWI/mqdefault.jpg",
          },
          {
            id: "7e841ed3dd3ea7aa7a3e9dc7",
            title: "Sympozium",
            itemId: "AomocWqXYTU",
            image: "https://i.ytimg.com/vi/AomocWqXYTU/mqdefault.jpg",
          },
          {
            id: "00e2a008115ece0334437186",
            title: "Perfection or Vanity",
            itemId: "2GckrYjWsH4",
            image: "https://i.ytimg.com/vi/2GckrYjWsH4/mqdefault.jpg",
          },
        ],
      },
      {
        id: "0.4998267796950375",
        title: "Leo covers",
        type: "folder",
        children: [
          {
            id: "075a09d825fd25a8b00af2a6",
            title: "Feel Good Inc. (metal cover by Leo Moracchioli)",
            itemId: "yNENVZFHutQ",
            image: "https://i.ytimg.com/vi/yNENVZFHutQ/mqdefault.jpg",
          },
          {
            id: "b396e8315c577026c2a01a4f",
            title: "Dark Horse (metal cover by Leo Moracchioli)",
            itemId: "3Y4pbyVfGHU",
            image: "https://i.ytimg.com/vi/3Y4pbyVfGHU/mqdefault.jpg",
          },
          {
            id: "39890c38c5b32b71cee69532",
            title: "Adele - Hello (metal cover by Leo Moracchioli)",
            itemId: "LtQUJMBH8uE",
            image: "https://i.ytimg.com/vi/LtQUJMBH8uE/mqdefault.jpg",
          },
          {
            id: "2997033ef608ddbfe2419634",
            title: "Roar (metal cover by Leo Moracchioli)",
            itemId: "J6BV0aE4FEk",
            image: "https://i.ytimg.com/vi/J6BV0aE4FEk/mqdefault.jpg",
          },
          {
            id: "72d42ecc3584dcaf9bfce778",
            title: "Poker Face (metal cover by Leo Moracchioli)",
            itemId: "wCVukDiRsNs",
            image: "https://i.ytimg.com/vi/wCVukDiRsNs/mqdefault.jpg",
          },
          {
            id: "7e8b1dc2ca4b54905c40df0a",
            title: "Chandelier (metal cover by Leo Moracchioli)",
            itemId: "ZsT-IlaG5Qo",
            image: "https://i.ytimg.com/vi/ZsT-IlaG5Qo/mqdefault.jpg",
          },
          {
            id: "1c11aadade637d84f5e4347d",
            title:
              "Eye of the Tiger (metal cover by Leo Moracchioli feat. Rob Lundgren)",
            itemId: "G6r1dAire0Y",
            image: "https://i.ytimg.com/vi/G6r1dAire0Y/mqdefault.jpg",
          },
          {
            id: "29b616413c2507ef4328a3db",
            title: "Let It Go - from Frozen (metal cover by Leo Moracchioli)",
            itemId: "so49WpSj9bo",
            image: "https://i.ytimg.com/vi/so49WpSj9bo/mqdefault.jpg",
          },
          {
            id: "e83a9ebea8a2f5c0c3e4d028",
            title: "Beat It (metal cover by Leo Moracchioli)",
            itemId: "EN6nLcix45U",
            image: "https://i.ytimg.com/vi/EN6nLcix45U/mqdefault.jpg",
          },
          {
            id: "c1f899b2c32cb4e597d3300f",
            title: "Ghostbusters (metal cover by Leo Moracchioli)",
            itemId: "hF39e_hnFb8",
            image: "https://i.ytimg.com/vi/hF39e_hnFb8/mqdefault.jpg",
          },
          {
            id: "00fdebe5f839fcf37cb8dd08",
            title: "Sail - Awolnation (metal cover by Leo Moracchioli)",
            itemId: "YjEGRAEcbQU",
            image: "https://i.ytimg.com/vi/YjEGRAEcbQU/mqdefault.jpg",
          },
          {
            id: "20e4ed55ce62d6df41b46bb5",
            title: "Shake It Off (metal cover by Leo Moracchioli)",
            itemId: "kCEq3-w8Ls4",
            image: "https://i.ytimg.com/vi/kCEq3-w8Ls4/mqdefault.jpg",
          },
          {
            id: "35903cbbb65e6a9306c73b07",
            title: "All About That Bass (metal cover by Leo Moracchioli)",
            itemId: "I4p4afTAH9Y",
            image: "https://i.ytimg.com/vi/I4p4afTAH9Y/mqdefault.jpg",
          },
          {
            id: "267ca524c1546cf16bc9fc54",
            title: "Take On Me (metal cover by Leo Moracchioli)",
            itemId: "NBiQPZxd81s",
            image: "https://i.ytimg.com/vi/NBiQPZxd81s/mqdefault.jpg",
          },
          {
            id: "687b51bd24d3a8d3390af835",
            title: "Bad Romance (metal cover by Leo Moracchioli)",
            itemId: "-uaqsuvIew8",
            image: "https://i.ytimg.com/vi/-uaqsuvIew8/mqdefault.jpg",
          },
          {
            id: "d4b300736e91136219d7bf13",
            title: "U Can´t Touch This (metal cover by Leo Moracchioli)",
            itemId: "tFelfYq3zpQ",
            image: "https://i.ytimg.com/vi/tFelfYq3zpQ/mqdefault.jpg",
          },
          {
            id: "bc7e0b52bee80f02593375b8",
            title: "Anaconda (metal cover by Leo Moracchioli)",
            itemId: "CipIdBn55n4",
            image: "https://i.ytimg.com/vi/CipIdBn55n4/mqdefault.jpg",
          },
          {
            id: "35491ff58ef23fc9aabac4ec",
            title: "Like A Virgin (metal cover by Leo Moracchioli)",
            itemId: "lbrMRfgfWFI",
            image: "https://i.ytimg.com/vi/lbrMRfgfWFI/mqdefault.jpg",
          },
          {
            id: "e549b08e62437a1ef2f8d177",
            title: "Baby One More Time (metal cover by Leo Moracchioli)",
            itemId: "JdLhYrRlJ4Y",
            image: "https://i.ytimg.com/vi/JdLhYrRlJ4Y/mqdefault.jpg",
          },
          {
            id: "5fc683ceda549ae70423b94e",
            title: "Pink - Try (metal cover by Leo Moracchioli)",
            itemId: "JY332_cEdoc",
            image: "https://i.ytimg.com/vi/JY332_cEdoc/mqdefault.jpg",
          },
          {
            id: "b99d0bd19dfd31c3c23ca0f5",
            title: "Uptown Funk (metal cover by Leo Moracchioli)",
            itemId: "PLyFcGKU_f8",
            image: "https://i.ytimg.com/vi/PLyFcGKU_f8/mqdefault.jpg",
          },
          {
            id: "ddfaab19ad4edacc1e3c4c63",
            title: "Elastic Heart (metal cover by Leo Moracchioli)",
            itemId: "H5veAVggF4s",
            image: "https://i.ytimg.com/vi/H5veAVggF4s/mqdefault.jpg",
          },
          {
            id: "57443c8da3b9bd901444456f",
            title: "Lips Are Movin (metal cover by Leo Moracchioli)",
            itemId: "hzZWm08mWKg",
            image: "https://i.ytimg.com/vi/hzZWm08mWKg/mqdefault.jpg",
          },
          {
            id: "0974a07b58d60df943973674",
            title: "Rolling In The Deep (metal cover by Leo Moracchioli)",
            itemId: "x2Oh7STrSIk",
            image: "https://i.ytimg.com/vi/x2Oh7STrSIk/mqdefault.jpg",
          },
          {
            id: "f4f235c08e2853c11541b3cb",
            title: "Moves Like Jagger (metal cover by Leo Moracchioli)",
            itemId: "nPAAIX8g6L4",
            image: "https://i.ytimg.com/vi/nPAAIX8g6L4/mqdefault.jpg",
          },
          {
            id: "a6d0ca8addd4d842117fbc12",
            title: "Livin´ La Vida Loca (metal cover by Leo Moracchioli)",
            itemId: "cSOe8PAupFE",
            image: "https://i.ytimg.com/vi/cSOe8PAupFE/mqdefault.jpg",
          },
          {
            id: "b73b916d32ad499223df419a",
            title: "Scatman (metal cover by Leo Moracchioli)",
            itemId: "gD_0U5l7jk4",
            image: "https://i.ytimg.com/vi/gD_0U5l7jk4/mqdefault.jpg",
          },
          {
            id: "473e98be9ff52a1561abc610",
            title: "No Limit (metal cover by Leo Moracchioli)",
            itemId: "HEk4fx_XNNE",
            image: "https://i.ytimg.com/vi/HEk4fx_XNNE/mqdefault.jpg",
          },
          {
            id: "e07957d6b49268616ef82b68",
            title: "Baby (metal cover by Leo Moracchioli)",
            itemId: "VOrOna2P0ok",
            image: "https://i.ytimg.com/vi/VOrOna2P0ok/mqdefault.jpg",
          },
          {
            id: "d67e3d70a2b04cc7fbf66115",
            title: "Ice Ice Baby (metal cover by Leo Moracchioli)",
            itemId: "ylaQvvNILt4",
            image: "https://i.ytimg.com/vi/ylaQvvNILt4/mqdefault.jpg",
          },
          {
            id: "72e58b26a04cfe900d55118b",
            title: "Never Gonna Give You Up (metal cover by Leo Moracchioli)",
            itemId: "1_Z5q152GSQ",
            image: "https://i.ytimg.com/vi/1_Z5q152GSQ/mqdefault.jpg",
          },
          {
            id: "caa28a73f8f38f97f2999140",
            title: "Fatty Boom Boom (metal cover by Leo Moracchioli)",
            itemId: "1szxGUSAoDw",
            image: "https://i.ytimg.com/vi/1szxGUSAoDw/mqdefault.jpg",
          },
          {
            id: "5408b35d1a2b28b8a2ab20c6",
            title: "Push It (metal cover by Leo Moracchioli)",
            itemId: "4uXqp_AsXvM",
            image: "https://i.ytimg.com/vi/4uXqp_AsXvM/mqdefault.jpg",
          },
          {
            id: "5118770bf4307504c3995d13",
            title: "Stay (metal cover by Leo Moracchioli)",
            itemId: "Kj1hinqoljA",
            image: "https://i.ytimg.com/vi/Kj1hinqoljA/mqdefault.jpg",
          },
          {
            id: "edc05e120e7b0f3242ac0d9f",
            title: "Gangster´s Paradise (metal cover by Leo Moracchioli)",
            itemId: "G7BieooyNNA",
            image: "https://i.ytimg.com/vi/G7BieooyNNA/mqdefault.jpg",
          },
          {
            id: "f7e48ef4f2618d234e6578b4",
            title: "Stayin´ Alive (metal cover by Leo Moracchioli)",
            itemId: "JDW_HK1Xmv8",
            image: "https://i.ytimg.com/vi/JDW_HK1Xmv8/mqdefault.jpg",
          },
          {
            id: "d44f6ca982d34a7036eaf919",
            title: "Firework (metal cover by Leo Moracchioli)",
            itemId: "Mi3IHouEeWk",
            image: "https://i.ytimg.com/vi/Mi3IHouEeWk/mqdefault.jpg",
          },
          {
            id: "2a1ed7a75be23c12e8346d36",
            title: "Gangnam Style (metal cover by Leo Moracchioli)",
            itemId: "MmbvxyRjMc0",
            image: "https://i.ytimg.com/vi/MmbvxyRjMc0/mqdefault.jpg",
          },
          {
            id: "654d22f9dd9c633e5f289a67",
            title: "Barbie Girl (metal cover by Leo Moracchioli)",
            itemId: "3vnVzoEz_Zs",
            image: "https://i.ytimg.com/vi/3vnVzoEz_Zs/mqdefault.jpg",
          },
          {
            id: "8bb05c8cc3a87f21f60e0acf",
            title: "Wrecking Ball (metal cover by Leo Moracchioli)",
            itemId: "1fi9OmYtvSU",
            image: "https://i.ytimg.com/vi/1fi9OmYtvSU/mqdefault.jpg",
          },
          {
            id: "6c864b09c2a16f7c1c02a0cc",
            title: "California Dreamin´ (metal cover by Leo Moracchioli)",
            itemId: "2RVB-CYbJqA",
            image: "https://i.ytimg.com/vi/2RVB-CYbJqA/mqdefault.jpg",
          },
          {
            id: "7c3d5d758da87c966e5b8842",
            title: "Get Lucky (metal cover by Leo Moracchioli)",
            itemId: "NyU5CShHmXw",
            image: "https://i.ytimg.com/vi/NyU5CShHmXw/mqdefault.jpg",
          },
          {
            id: "a5af36858539feda631590fe",
            title: "Black Night - Deep Purple (metal cover by Leo Moracchioli)",
            itemId: "o_dyQ9z5H8I",
            image: "https://i.ytimg.com/vi/o_dyQ9z5H8I/mqdefault.jpg",
          },
          {
            id: "69d2e9df3dafc412273238d8",
            title: "Macarena (metal cover by Leo Moracchioli)",
            itemId: "R3C9CVsZ_8I",
            image: "https://i.ytimg.com/vi/R3C9CVsZ_8I/mqdefault.jpg",
          },
          {
            id: "f33f160cd972c370b40a0ea1",
            title: "Justin Bieber - Sorry (metal cover by Leo Moracchioli)",
            itemId: "6t_MfckFDnQ",
            image: "https://i.ytimg.com/vi/6t_MfckFDnQ/mqdefault.jpg",
          },
          {
            id: "85aa5d48d51741c62edd6838",
            title: "Greased Lightning (metal cover by Leo Moracchioli)",
            itemId: "4idy0uJN-A0",
            image: "https://i.ytimg.com/vi/4idy0uJN-A0/mqdefault.jpg",
          },
          {
            id: "4b81cf45920e9e5a92291699",
            title: "Sia - Cheap Thrills (metal cover by Leo Moracchioli)",
            itemId: "0Jrp6IrV6gY",
            image: "https://i.ytimg.com/vi/0Jrp6IrV6gY/mqdefault.jpg",
          },
          {
            id: "cd4e930c8abaff2bbfb5e841",
            title: "Mambo No. 5 (metal cover by Leo Moracchioli)",
            itemId: "EpVpSKYXSwM",
            image: "https://i.ytimg.com/vi/EpVpSKYXSwM/mqdefault.jpg",
          },
          {
            id: "5e5541f46cc37aa2db9d5777",
            title: "The Final Countdown (metal cover by Leo Moracchioli)",
            itemId: "LUtg-utg2XU",
            image: "https://i.ytimg.com/vi/LUtg-utg2XU/mqdefault.jpg",
          },
          {
            id: "78d0cfaab1bc738d136a7658",
            title: "The Power of Love (metal cover by Leo Moracchioli)",
            itemId: "kaULR6g-EJY",
            image: "https://i.ytimg.com/vi/kaULR6g-EJY/mqdefault.jpg",
          },
          {
            id: "0f8bfe25b0a4b90916c4ecf9",
            title: "Gin and Juice (metal cover by Leo Moracchioli)",
            itemId: "ygaqdf41kPI",
            image: "https://i.ytimg.com/vi/ygaqdf41kPI/mqdefault.jpg",
          },
          {
            id: "e43016d8ef5401a20e924a5f",
            title:
              "Smells Like Teen Spirit (metal cover by Leo & Stine Moracchioli)",
            itemId: "ZjX8Tlx4FgY",
            image: "https://i.ytimg.com/vi/ZjX8Tlx4FgY/mqdefault.jpg",
          },
          {
            id: "052f95685e8d97d7355b4c45",
            title: "Money, Money, Money (metal cover by Leo Moracchioli)",
            itemId: "rBu7ISCWh6A",
            image: "https://i.ytimg.com/vi/rBu7ISCWh6A/mqdefault.jpg",
          },
          {
            id: "805e277df876bc723d48a868",
            title: "Take Me To Church (metal cover by Leo Moracchioli)",
            itemId: "em3dCmlzRp4",
            image: "https://i.ytimg.com/vi/em3dCmlzRp4/mqdefault.jpg",
          },
          {
            id: "ef3b5bb5b515e800c78468c1",
            title: "Hotline Bling (metal cover by Leo Moracchioli)",
            itemId: "FID_RNV-FP0",
            image: "https://i.ytimg.com/vi/FID_RNV-FP0/mqdefault.jpg",
          },
          {
            id: "7f0e072da98a55076686bf14",
            title: "Respect (metal cover by Leo Moracchioli)",
            itemId: "SQnrbdChHrg",
            image: "https://i.ytimg.com/vi/SQnrbdChHrg/mqdefault.jpg",
          },
          {
            id: "360a23436e38a327c2786773",
            title: "The Wheels On The Bus (metal cover by Leo Moracchioli)",
            itemId: "mGtYLRQh1Gk",
            image: "https://i.ytimg.com/vi/mGtYLRQh1Gk/mqdefault.jpg",
          },
          {
            id: "58aba1872a28b719df88cbb2",
            title: "BAD (metal cover by Leo Moracchioli)",
            itemId: "VajYyiX7K9A",
            image: "https://i.ytimg.com/vi/VajYyiX7K9A/mqdefault.jpg",
          },
          {
            id: "d93ddbc1fcddf03631a8427c",
            title: "Hey Jude (metal cover by Leo Moracchioli)",
            itemId: "vVaSZvcLFgs",
            image: "https://i.ytimg.com/vi/vVaSZvcLFgs/mqdefault.jpg",
          },
          {
            id: "98d45a34ecfdb6761edf9158",
            title: "Paparazzi (metal cover by Leo Moracchioli)",
            itemId: "S0BFkhztqJI",
            image: "https://i.ytimg.com/vi/S0BFkhztqJI/mqdefault.jpg",
          },
          {
            id: "16b615a6fc8644967768886b",
            title: "Radioactive (metal cover by Leo Moracchioli)",
            itemId: "KpUHWlMIbQU",
            image: "https://i.ytimg.com/vi/KpUHWlMIbQU/mqdefault.jpg",
          },
          {
            id: "71733b48ec270e59dea4f205",
            title: "Lorde - Royals (metal cover by Leo Moracchioli)",
            itemId: "shRLgMADMB0",
            image: "https://i.ytimg.com/vi/shRLgMADMB0/mqdefault.jpg",
          },
          {
            id: "70a6840c55ca9129e484f05e",
            title: "Shawn Mendes - Stitches (metal cover by Leo Moracchioli)",
            itemId: "rZWzVPBj_fw",
            image: "https://i.ytimg.com/vi/rZWzVPBj_fw/mqdefault.jpg",
          },
          {
            id: "eb2b2315578d28edf47f85af",
            title: "Halo (metal cover by Leo Moracchioli)",
            itemId: "c8lBaFz_PNU",
            image: "https://i.ytimg.com/vi/c8lBaFz_PNU/mqdefault.jpg",
          },
          {
            id: "0a9816e51b80591e600329cb",
            title: "Wannabe (metal cover by Leo Moracchioli)",
            itemId: "UfV24sc-2gQ",
            image: "https://i.ytimg.com/vi/UfV24sc-2gQ/mqdefault.jpg",
          },
          {
            id: "55c56face40e2a1a47e1953f",
            title: "Heathens (metal cover by Leo Moracchioli)",
            itemId: "sYTDSCDGcCM",
            image: "https://i.ytimg.com/vi/sYTDSCDGcCM/mqdefault.jpg",
          },
          {
            id: "c001c703a7bb9bfc56553917",
            title: "Kiss from a Rose (metal cover by Leo Moracchioli)",
            itemId: "p8HstnjmaS4",
            image: "https://i.ytimg.com/vi/p8HstnjmaS4/mqdefault.jpg",
          },
          {
            id: "2ea4dd74b401688cd1128196",
            title: "Cotton Eye Joe (metal cover by Leo Moracchioli)",
            itemId: "o58Tw62G7N8",
            image: "https://i.ytimg.com/vi/o58Tw62G7N8/mqdefault.jpg",
          },
          {
            id: "05e6c049ed4c9338ddb9c8b6",
            title:
              "Somebody That I Used To Know (metal cover by Leo Moracchioli)",
            itemId: "3PDvJDXKmvM",
            image: "https://i.ytimg.com/vi/3PDvJDXKmvM/mqdefault.jpg",
          },
          {
            id: "fd3668139395e68aef3ec99f",
            title: "Stressed Out (metal cover by Leo Moracchioli)",
            itemId: "jG01a41WHzk",
            image: "https://i.ytimg.com/vi/jG01a41WHzk/mqdefault.jpg",
          },
          {
            id: "c75a49ae8561490be793e56b",
            title: "Girl You Know It´s True (metal cover by Leo Moracchioli)",
            itemId: "M1BPt9fPEo4",
            image: "https://i.ytimg.com/vi/M1BPt9fPEo4/mqdefault.jpg",
          },
          {
            id: "efa1a1001f438dd45c025353",
            title: "Snow - Informer (metal cover by Leo Moracchioli)",
            itemId: "xpV9wRA7_sY",
            image: "https://i.ytimg.com/vi/xpV9wRA7_sY/mqdefault.jpg",
          },
          {
            id: "dbf65f18e399cbaec3981791",
            title: "Blur - Song 2 (metal cover by Leo & Stine Moracchioli)",
            itemId: "adnAIJUnyYg",
            image: "https://i.ytimg.com/vi/adnAIJUnyYg/mqdefault.jpg",
          },
          {
            id: "d1f2c6827c5533e78482b0ed",
            title: "The Pretender (metal cover by Leo Moracchioli)",
            itemId: "VbHpGfcyzbE",
            image: "https://i.ytimg.com/vi/VbHpGfcyzbE/mqdefault.jpg",
          },
          {
            id: "0e501b865736dff878cc865d",
            title: "Bad Blood (metal cover by Leo Moracchioli)",
            itemId: "i4lsFKUx4gg",
            image: "https://i.ytimg.com/vi/i4lsFKUx4gg/mqdefault.jpg",
          },
        ],
      },
      {
        id: "0.17781857088584296",
        title: "Slipknot - Slipknot (1999)",
        type: "folder",
        children: [
          {
            id: "26a0f4cfa496cf0b15b4811c",
            title: "Slipknot - 742617000027 (Audio)",
            itemId: "g9ARDbWuGIY",
            image: "https://i.ytimg.com/vi/g9ARDbWuGIY/mqdefault.jpg",
          },
          {
            id: "3d5e433773fec2fdd3998fa3",
            title: "Slipknot - (Sic) (Audio)",
            itemId: "m3I3-KTJbtY",
            image: "https://i.ytimg.com/vi/m3I3-KTJbtY/mqdefault.jpg",
          },
          {
            id: "97daf2c331f1975b38ed300c",
            title: "Slipknot - Eyeless (Audio)",
            itemId: "WLubS6QOMsQ",
            image: "https://i.ytimg.com/vi/WLubS6QOMsQ/mqdefault.jpg",
          },
          {
            id: "d64b5527c3f6c84fbd340a25",
            title: "Slipknot - Wait and Bleed *HD*",
            itemId: "Z5ou8N3U8yg",
            image: "https://i.ytimg.com/vi/Z5ou8N3U8yg/mqdefault.jpg",
          },
          {
            id: "bf8a6cf8bf794a6f0e354d8c",
            title: "Slipknot - Surfacing (Audio)",
            itemId: "vq-zaD1poAE",
            image: "https://i.ytimg.com/vi/vq-zaD1poAE/mqdefault.jpg",
          },
          {
            id: "498bb6f14cfc516fac0111fe",
            title: "Slipknot - Spit it Out *HD*",
            itemId: "76F9nyNgT80",
            image: "https://i.ytimg.com/vi/76F9nyNgT80/mqdefault.jpg",
          },
          {
            id: "cebb47484030fcc52c8efa7b",
            title: "Slipknot - Tattered & Torn (Audio)",
            itemId: "oXWUQdoTmKw",
            image: "https://i.ytimg.com/vi/oXWUQdoTmKw/mqdefault.jpg",
          },
          {
            id: "dfc27793024be4979f99978e",
            title: "Slipknot - Frail Limb Nursery",
            itemId: "Cacs5-t-KKg",
            image: "https://i.ytimg.com/vi/Cacs5-t-KKg/mqdefault.jpg",
          },
          {
            id: "7c86e50d98b4f21c50f18b47",
            title: "SlipKnoT-Purity Lyrics",
            itemId: "Ky3mHDoNQc0",
            image: "https://i.ytimg.com/vi/Ky3mHDoNQc0/mqdefault.jpg",
          },
          {
            id: "1f8fa2c2e9ef0adbcc0d4cb1",
            title: "Slipknot - Liberate (Audio)",
            itemId: "GHR8IkJIbZY",
            image: "https://i.ytimg.com/vi/GHR8IkJIbZY/mqdefault.jpg",
          },
          {
            id: "15f41ea2bc4b0aee209c4d3f",
            title: "Slipknot - Prosthetics (Audio)",
            itemId: "Ta5eng4ej7Q",
            image: "https://i.ytimg.com/vi/Ta5eng4ej7Q/mqdefault.jpg",
          },
          {
            id: "a0712b7a758e9890e607310f",
            title: "Slipknot - No Life (Audio)",
            itemId: "BvCG-iiUgZU",
            image: "https://i.ytimg.com/vi/BvCG-iiUgZU/mqdefault.jpg",
          },
          {
            id: "28b67186db1d5f9d292867f0",
            title: "Slipknot - Diluted (Audio)",
            itemId: "ZTx9PGo9DFE",
            image: "https://i.ytimg.com/vi/ZTx9PGo9DFE/mqdefault.jpg",
          },
          {
            id: "637fbd9838cb13dde76bfcd6",
            title: "Slipknot - Only One (Audio)",
            itemId: "dIYg4895bMI",
            image: "https://i.ytimg.com/vi/dIYg4895bMI/mqdefault.jpg",
          },
          {
            id: "ee38dcba9e7945b90bb09282",
            title: "Slipknot - Scissors (Audio)",
            itemId: "90tMJjWQTBQ",
            image: "https://i.ytimg.com/vi/90tMJjWQTBQ/mqdefault.jpg",
          },
          {
            id: "cc55ea483da22709f9aa3468",
            title: "Slipknot - Me Inside (Audio)",
            itemId: "TodcVvQoQ7c",
            image: "https://i.ytimg.com/vi/TodcVvQoQ7c/mqdefault.jpg",
          },
          {
            id: "8014d91bad4025351d0fc9aa",
            title: "Get This- Slipknot (HD)",
            itemId: "ltyxOHESqos",
            image: "https://i.ytimg.com/vi/ltyxOHESqos/mqdefault.jpg",
          },
          {
            id: "9c29b267779988a56709d542",
            title: "Slipknot - Eeyore (Audio)",
            itemId: "0sMap0PlC5Q",
            image: "https://i.ytimg.com/vi/0sMap0PlC5Q/mqdefault.jpg",
          },
        ],
      },
      {
        id: "0.9760370232481032",
        title: "Cadaveria - Far Away from Conformity",
        type: "folder",
        children: [
          {
            id: "528f5d7b835f89d529f5b89c",
            title: "CADAVERIA - blood and confusion",
            itemId: "FlpeXrI2MGw",
            image: "https://i.ytimg.com/vi/FlpeXrI2MGw/mqdefault.jpg",
          },
          {
            id: "bfd89beaea0b1dc1153501bf",
            title: "Cadaveria-Eleven three o' three una gran banda!",
            itemId: "mJCtREiv7Rs",
            image: "https://i.ytimg.com/vi/mJCtREiv7Rs/mqdefault.jpg",
          },
          {
            id: "f97bf8921a7d95cff47b2c74",
            title: "Cadaveria - Irreverent Elegy",
            itemId: "lauydrnJf9Y",
            image: "https://i.ytimg.com/vi/lauydrnJf9Y/mqdefault.jpg",
          },
          {
            id: "0e04abe1c5c786eaada01a1d",
            title: "The Divine Rapture - Cadaveria",
            itemId: "NoBfpyu0rtE",
            image: "https://i.ytimg.com/vi/NoBfpyu0rtE/mqdefault.jpg",
          },
          {
            id: "404a7a7ebe570acd1a2e3561",
            title: "Cadaveria - Omen of Delirium",
            itemId: "8-i8F9ATZwM",
            image: "https://i.ytimg.com/vi/8-i8F9ATZwM/mqdefault.jpg",
          },
          {
            id: "ea305ad3322f293de264f279",
            title: "Cadaveria - Call Me (Blondie Cover)",
            itemId: "hz24Xl94aVE",
            image: "https://i.ytimg.com/vi/hz24Xl94aVE/mqdefault.jpg",
          },
          {
            id: "1d2b069a416ab261014fe7e7",
            title: "Cadaveria - Out Body Experience",
            itemId: "kOaAr0P8MgI",
            image: "https://i.ytimg.com/vi/kOaAr0P8MgI/mqdefault.jpg",
          },
          {
            id: "7aeafdbb3712b55fce4641ef",
            title: "CADAVERIA (FAR AWAY FROM CONFORMITY) - VOX OF ANTI-TIME",
            itemId: "tqvC230B4II",
            image: "https://i.ytimg.com/vi/tqvC230B4II/mqdefault.jpg",
          },
        ],
      },
      {
        id: "0.6888934856023133",
        title: "Mudvayne the new game full album",
        type: "folder",
        children: [
          {
            id: "f0689d33b85a915265946875",
            title: "Mudvayne - Fish Out of Water Full Song",
            itemId: "3sF-xbku4F0",
            image: "https://i.ytimg.com/vi/3sF-xbku4F0/mqdefault.jpg",
          },
          {
            id: "d4eaab5051a17db0e251ad97",
            title: "Mudvayne - Do What You Do",
            itemId: "nJaEyV_7zf4",
            image: "https://i.ytimg.com/vi/nJaEyV_7zf4/mqdefault.jpg",
          },
          {
            id: "29cc8feace566d29472ad1a2",
            title: "Mudvayne A New Game with lyrics",
            itemId: "edARvxRQPYk",
            image: "https://i.ytimg.com/vi/edARvxRQPYk/mqdefault.jpg",
          },
          {
            id: "e6a39a4c74643dd1f4e556af",
            title: "Mudvayne The New Game - Have it Your Way",
            itemId: "Am1pCAbSkD8",
            image: "https://i.ytimg.com/vi/Am1pCAbSkD8/mqdefault.jpg",
          },
          {
            id: "3cbc06d829f93f8ba98592da",
            title: "Mudvayne The New Game - A Cinderella Story",
            itemId: "Nusi0lBq_BM",
            image: "https://i.ytimg.com/vi/Nusi0lBq_BM/mqdefault.jpg",
          },
          {
            id: "0c59888dbae29e36eb4ee51a",
            title: "Mudvayne - The Hate In Me",
            itemId: "hGGlf9X90_k",
            image: "https://i.ytimg.com/vi/hGGlf9X90_k/mqdefault.jpg",
          },
          {
            id: "53c51556f8f87b8d0d454f5c",
            title: "Mudvayne Scarlet Letters lyrics",
            itemId: "PQzS2-SeJTQ",
            image: "https://i.ytimg.com/vi/PQzS2-SeJTQ/mqdefault.jpg",
          },
          {
            id: "84dc684f489f28557d765d9d",
            title: "Mudvayne - Dull Boy (Lyrics)",
            itemId: "tjoexntfgH4",
            image: "https://i.ytimg.com/vi/tjoexntfgH4/mqdefault.jpg",
          },
          {
            id: "de23cce8e67afc6b1babe3af",
            title: "Mudvayne The New Game - Same Ol'",
            itemId: "7SNy1lK_-d4",
            image: "https://i.ytimg.com/vi/7SNy1lK_-d4/mqdefault.jpg",
          },
          {
            id: "4af54a070de389b97771e289",
            title: "Mudvayne The New Game - Never Enough",
            itemId: "VuRFP6gIve4",
            image: "https://i.ytimg.com/vi/VuRFP6gIve4/mqdefault.jpg",
          },
          {
            id: "be2fd8702e01ee0abdad62cd",
            title: "Mudvayne The New Game - We The People",
            itemId: "SEfFgzDGPPs",
            image: "https://i.ytimg.com/vi/SEfFgzDGPPs/mqdefault.jpg",
          },
        ],
      },
      {
        id: "0.27432305443130744",
        title: "Top Tracks - Mudvayne",
        type: "folder",
        children: [
          {
            id: "0f71d22c0192a8936af6bb3f",
            title: "Mudvayne - Happy? (Official Video)",
            itemId: "anbrb2u9GYI",
            image: "https://i.ytimg.com/vi/anbrb2u9GYI/mqdefault.jpg",
          },
          {
            id: "2caed5b96caf061f92625aad",
            title: "Mudvayne - Dig (Official Video)",
            itemId: "YIqbdnaPcT8",
            image: "https://i.ytimg.com/vi/YIqbdnaPcT8/mqdefault.jpg",
          },
          {
            id: "bd645dd00a895808fda57ba8",
            title: "Mudvayne - Not Falling (Official Video)",
            itemId: "uhqRMzoyV4g",
            image: "https://i.ytimg.com/vi/uhqRMzoyV4g/mqdefault.jpg",
          },
          {
            id: "dde14c43a46d5611ca8038a9",
            title:
              "Mudvayne - Forget to Remember (Radio Mix Audio) [Official Video]",
            itemId: "3ea_7J1hffs",
            image: "https://i.ytimg.com/vi/3ea_7J1hffs/mqdefault.jpg",
          },
          {
            id: "59e1f01ec078a1f60581367a",
            title: "Mudvayne - World So Cold",
            itemId: "A0S9ck12Cd0",
            image: "https://i.ytimg.com/vi/A0S9ck12Cd0/mqdefault.jpg",
          },
          {
            id: "bfc02cbaf3bc131a1b1bc188",
            title: "Mudvayne - Death Blooms",
            itemId: "9nVvojfQVBY",
            image: "https://i.ytimg.com/vi/9nVvojfQVBY/mqdefault.jpg",
          },
          {
            id: "cf110200fe829168e852d365",
            title: "Mudvayne - Scream With Me (Video Version)",
            itemId: "7q2bNqe0Xyk",
            image: "https://i.ytimg.com/vi/7q2bNqe0Xyk/mqdefault.jpg",
          },
          {
            id: "5e53a672a96c87cc3eb0c5d6",
            title: "Mudvayne - Fall Into Sleep (Official Video)",
            itemId: "KaLbCivhO-8",
            image: "https://i.ytimg.com/vi/KaLbCivhO-8/mqdefault.jpg",
          },
          {
            id: "b1dfeb8b0a8dbe41bbe440ae",
            title: "Mudvayne - Determined (Official Studio Version) HD",
            itemId: "KfLVs3yv_wg",
            image: "https://i.ytimg.com/vi/KfLVs3yv_wg/mqdefault.jpg",
          },
          {
            id: "2569e773250a6f2fafe19127",
            title: "Mudvayne - Do What You Do (Video Version)",
            itemId: "x8y_Y-7P6gg",
            image: "https://i.ytimg.com/vi/x8y_Y-7P6gg/mqdefault.jpg",
          },
          {
            id: "207284a2e9c5e789cf8e29b0",
            title: "Mudvayne - Dull Boy (Video)",
            itemId: "M6Ki0hePw78",
            image: "https://i.ytimg.com/vi/M6Ki0hePw78/mqdefault.jpg",
          },
          {
            id: "39eb8bb16911096f9787555a",
            title: "Nothing to Gein-Mudvayne (Lyrics)",
            itemId: "FjKnpu65pq8",
            image: "https://i.ytimg.com/vi/FjKnpu65pq8/mqdefault.jpg",
          },
          {
            id: "6878dd4c412a3be7c400b594",
            title: "Mudvayne -  Scarlet Letters Lyrics",
            itemId: "tayr3pHhmmk",
            image: "https://i.ytimg.com/vi/tayr3pHhmmk/mqdefault.jpg",
          },
          {
            id: "02b4ae8632a991d30d1ba5e7",
            title: "Mudvayne - A Cinderella Story (Lyrics).wmv",
            itemId: "ApiXsIXtt6o",
            image: "https://i.ytimg.com/vi/ApiXsIXtt6o/mqdefault.jpg",
          },
          {
            id: "44437e173d58fd2221c5c90e",
            title: "Mudvayne - Severed (Lyrics)",
            itemId: "ekn_IZtsS3M",
            image: "https://i.ytimg.com/vi/ekn_IZtsS3M/mqdefault.jpg",
          },
          {
            id: "d7bfbd96a4721d5acb085ad3",
            title: "Mudvayne - All That You Are",
            itemId: "rP16cHaeeB8",
            image: "https://i.ytimg.com/vi/rP16cHaeeB8/mqdefault.jpg",
          },
          {
            id: "3c3e8abde94562d8f2e5c6a3",
            title:
              "Mudvayne - Beautiful And Strange (Video Version - Graphic Content)",
            itemId: "b1MqKNu6asw",
            image: "https://i.ytimg.com/vi/b1MqKNu6asw/mqdefault.jpg",
          },
          {
            id: "ea59658fd70d5c0fe8677a18",
            title: "Mudvayne- Silenced",
            itemId: "ih04nCAy5RE",
            image: "https://i.ytimg.com/vi/ih04nCAy5RE/mqdefault.jpg",
          },
          {
            id: "eec12b2f08dbb076d6aab7f2",
            title: "Mudvayne - King of Pain (The Police Cover)",
            itemId: "6eXBwZGnI4Q",
            image: "https://i.ytimg.com/vi/6eXBwZGnI4Q/mqdefault.jpg",
          },
          {
            id: "7ceaa8b0cc963b023b5c047e",
            title: "Mudvayne - IMN",
            itemId: "w8Z8tRy70dQ",
            image: "https://i.ytimg.com/vi/w8Z8tRy70dQ/mqdefault.jpg",
          },
          {
            id: "18e23518df87fb216aa29a34",
            title: "Mudvayne-Cradle (lyrics)",
            itemId: "IE-k2oNGlMU",
            image: "https://i.ytimg.com/vi/IE-k2oNGlMU/mqdefault.jpg",
          },
          {
            id: "3a79a106d73b2d9e7f3dc91f",
            title: "Never Enough - Mudvayne Lyrics",
            itemId: "QD3jwTUOl2w",
            image: "https://i.ytimg.com/vi/QD3jwTUOl2w/mqdefault.jpg",
          },
          {
            id: "12a6316172a4e1cae9f87b0b",
            title: "Mudvayne-Dead inside with Lyrics",
            itemId: "kDLVG9h8E9Q",
            image: "https://i.ytimg.com/vi/kDLVG9h8E9Q/mqdefault.jpg",
          },
          {
            id: "d1c0fff7979c4eaf4f723191",
            title: "Mudvayne - (Per)version Of A Truth",
            itemId: "d7eWNNn2qpk",
            image: "https://i.ytimg.com/vi/d7eWNNn2qpk/mqdefault.jpg",
          },
          {
            id: "39e78eb6de6025c9d95c7d00",
            title: "Mudvayne - Pharmaecopia lyrics on screen",
            itemId: "C3J18ccK-CE",
            image: "https://i.ytimg.com/vi/C3J18ccK-CE/mqdefault.jpg",
          },
          {
            id: "65a2ec5784d19dd9c4f71aae",
            title: "Mudvayne Trapped in the Wake of a Dream (Dark Version)",
            itemId: "HqTyiE8n5uA",
            image: "https://i.ytimg.com/vi/HqTyiE8n5uA/mqdefault.jpg",
          },
          {
            id: "6f5756edf5f2a20b13526199",
            title: "Mudvayne- Choices",
            itemId: "htdH6uS-YW4",
            image: "https://i.ytimg.com/vi/htdH6uS-YW4/mqdefault.jpg",
          },
          {
            id: "ac742afa2ddc4958a240879d",
            title: "Mudvayne - 1000 Mile Journey",
            itemId: "tnTDXdVsGD4",
            image: "https://i.ytimg.com/vi/tnTDXdVsGD4/mqdefault.jpg",
          },
          {
            id: "8ee2c3c3b14e0e59f222d3f4",
            title: "Mudvayne - Prod (Lyrics)",
            itemId: "dXeLijmOA3k",
            image: "https://i.ytimg.com/vi/dXeLijmOA3k/mqdefault.jpg",
          },
          {
            id: "5e1718fb3e7242fdf028ea96",
            title: "Mudvayne - The Patient Mental",
            itemId: "G_A2Rn9AAdQ",
            image: "https://i.ytimg.com/vi/G_A2Rn9AAdQ/mqdefault.jpg",
          },
          {
            id: "9ec0bf4026459b663c050700",
            title: "01 - Mudvayne - Monolith.avi",
            itemId: "2vEr7nUeCJ0",
            image: "https://i.ytimg.com/vi/2vEr7nUeCJ0/mqdefault.jpg",
          },
          {
            id: "185be988213677a3dac486b0",
            title: "Under My Skin - Mudvayne",
            itemId: "MxPRhZ1whdI",
            image: "https://i.ytimg.com/vi/MxPRhZ1whdI/mqdefault.jpg",
          },
          {
            id: "d0db52eedc4af0be7aefae6a",
            title: "Mudvayne - Heard It All Before",
            itemId: "4gfC2BYtfE4",
            image: "https://i.ytimg.com/vi/4gfC2BYtfE4/mqdefault.jpg",
          },
          {
            id: "8ee31aa37fd9a42e7d7ed94b",
            title: "Mudvayne - Everything And Nothing (Lyrics)",
            itemId: "zRLjb8vqPLA",
            image: "https://i.ytimg.com/vi/zRLjb8vqPLA/mqdefault.jpg",
          },
          {
            id: "df541fb244f9a8b62163a708",
            title: "Mudvayne - Pushing Through",
            itemId: "cP__HRZOFgs",
            image: "https://i.ytimg.com/vi/cP__HRZOFgs/mqdefault.jpg",
          },
          {
            id: "ee45ef93781733fcfb02e891",
            title: "Mudvayne - Skrying",
            itemId: "DXbxiiqm9c4",
            image: "https://i.ytimg.com/vi/DXbxiiqm9c4/mqdefault.jpg",
          },
          {
            id: "48d34660772b545fbff75421",
            title: "Mudvayne - A New Game (Video Version)",
            itemId: "OqOKIQlSDWo",
            image: "https://i.ytimg.com/vi/OqOKIQlSDWo/mqdefault.jpg",
          },
          {
            id: "f77f50f967b4daf6fcc57faf",
            title: "Mudvayne - fish out of water (LYRICS)",
            itemId: "-HWABDBCVbQ",
            image: "https://i.ytimg.com/vi/-HWABDBCVbQ/mqdefault.jpg",
          },
          {
            id: "fcc72721117f24b408051942",
            title: "Mudvayne - Rain. Sun. Gone.",
            itemId: "z2PDIcOaag4",
            image: "https://i.ytimg.com/vi/z2PDIcOaag4/mqdefault.jpg",
          },
          {
            id: "abd2c63ee6a770ee3d8af871",
            title: "16 - Know Forever - Mudvayne (HD)",
            itemId: "_c9NL2psyYQ",
            image: "https://i.ytimg.com/vi/_c9NL2psyYQ/mqdefault.jpg",
          },
          {
            id: "72be5aa52972f6b29d600e7f",
            title: "Mudvayne The New Game - Have it Your Way",
            itemId: "Am1pCAbSkD8",
            image: "https://i.ytimg.com/vi/Am1pCAbSkD8/mqdefault.jpg",
          },
          {
            id: "2fc56fc3fbdf3c8f24cbef72",
            title: "Mudvayne All Talk lyrics",
            itemId: "8XWF9ItmJTA",
            image: "https://i.ytimg.com/vi/8XWF9ItmJTA/mqdefault.jpg",
          },
          {
            id: "d5f462a3cc6a90c6eb3366d2",
            title: "Mudvayne- Shadow of a Man",
            itemId: "bZMINlsjAcY",
            image: "https://i.ytimg.com/vi/bZMINlsjAcY/mqdefault.jpg",
          },
          {
            id: "8ca5041095795e6d55a1dd3c",
            title: "13 - A Key To Nothing - Mudvayne",
            itemId: "CpjMg7dusvM",
            image: "https://i.ytimg.com/vi/CpjMg7dusvM/mqdefault.jpg",
          },
          {
            id: "bee43de3a02583d17f0fe1d1",
            title: "Mudvayne-The End of All Things To come (lyrics)",
            itemId: "XAN5tcwBhvI",
            image: "https://i.ytimg.com/vi/XAN5tcwBhvI/mqdefault.jpg",
          },
          {
            id: "4f8d7d7414f7bde2acccec76",
            title: 'Mudvayne - Track 9 "Out To Pasture"',
            itemId: "ed2s0LBqMcs",
            image: "https://i.ytimg.com/vi/ed2s0LBqMcs/mqdefault.jpg",
          },
          {
            id: "474768bb895ee5227901ed5f",
            title: "MUDVAYNE - JUST - DRUM COVER",
            itemId: "KM7RaWqxesg",
            image: "https://i.ytimg.com/vi/KM7RaWqxesg/mqdefault.jpg",
          },
          {
            id: "0dcd52fab63b5424016e8b89",
            title: "MUDVAYNE Golden Ratio",
            itemId: "WDILGEn1oBs",
            image: "https://i.ytimg.com/vi/WDILGEn1oBs/mqdefault.jpg",
          },
          {
            id: "061863a78f78e976cfd9017c",
            title: 'Mudvayne - Track 7 "Beyond The Pale"',
            itemId: "hkj6b6K84w0",
            image: "https://i.ytimg.com/vi/hkj6b6K84w0/mqdefault.jpg",
          },
          {
            id: "4dd5bb85fa1baf6102c583c2",
            title: 'Mudvayne - Track 4 "Closer"',
            itemId: "GCqnAVRracw",
            image: "https://i.ytimg.com/vi/GCqnAVRracw/mqdefault.jpg",
          },
          {
            id: "557c4ff6f1590cef3990fb75",
            title: "Mudvayne - TV Radio",
            itemId: "2NbmRGVPI1I",
            image: "https://i.ytimg.com/vi/2NbmRGVPI1I/mqdefault.jpg",
          },
          {
            id: "1ade4eb007ff9fcb06309a54",
            title: "Mutatis Mutandis",
            itemId: "gajEv-WdMb4",
            image: "https://i.ytimg.com/vi/gajEv-WdMb4/mqdefault.jpg",
          },
          {
            id: "fb2bbdd9eaced9f7fcc7e659",
            title: "Mudvayne I Can't Wait lyrics",
            itemId: "ihzzHs_L7i0",
            image: "https://i.ytimg.com/vi/ihzzHs_L7i0/mqdefault.jpg",
          },
          {
            id: "61880a122e08cc811e339c0d",
            title: "Mudvayne Burn the Bridge Lyrics",
            itemId: "FyG87EbbhlU",
            image: "https://i.ytimg.com/vi/FyG87EbbhlU/mqdefault.jpg",
          },
          {
            id: "4fa7a173a1565a48562d36ae",
            title: "09 - Solve Et Coagula - Mudvayne",
            itemId: "Yf1kXVAdFuk",
            image: "https://i.ytimg.com/vi/Yf1kXVAdFuk/mqdefault.jpg",
          },
          {
            id: "12b49132399782520e9f4bf3",
            title: "Mudvayne - Pulling The String",
            itemId: "azHVbjLuNGg",
            image: "https://i.ytimg.com/vi/azHVbjLuNGg/mqdefault.jpg",
          },
          {
            id: "e1bbb2f44498115cfbbe9e93",
            title: "Mudvayne - Poop Loser",
            itemId: "oCMJ3QevUbY",
            image: "https://i.ytimg.com/vi/oCMJ3QevUbY/mqdefault.jpg",
          },
          {
            id: "4a7e024ddb3c4d5cc5dfdb0f",
            title: "Mudvayne The New Game - Same Ol'",
            itemId: "7SNy1lK_-d4",
            image: "https://i.ytimg.com/vi/7SNy1lK_-d4/mqdefault.jpg",
          },
          {
            id: "306b52691538358ee4c122b7",
            title: "Mudvayne - The Hate In Me",
            itemId: "hGGlf9X90_k",
            image: "https://i.ytimg.com/vi/hGGlf9X90_k/mqdefault.jpg",
          },
          {
            id: "1fbf3818d11eee3119b4ee6a",
            title: "Cultivate - Mudvayne",
            itemId: "1KGS1NAKGs4",
            image: "https://i.ytimg.com/vi/1KGS1NAKGs4/mqdefault.jpg",
          },
          {
            id: "8d3b8076b2e490f5bc3294f7",
            title: "Recombinant Resurgence",
            itemId: "VocQSvIjLlg",
            image: "https://i.ytimg.com/vi/VocQSvIjLlg/mqdefault.jpg",
          },
          {
            id: "7266da83fb257063143f17c7",
            title: "Mudvayne- Goodbye",
            itemId: "7GNc4Hov3hA",
            image: "https://i.ytimg.com/vi/7GNc4Hov3hA/mqdefault.jpg",
          },
          {
            id: "65db581d23821af95e0c28b8",
            title: "mudvayne - seed",
            itemId: "XohAoOb3ZLU",
            image: "https://i.ytimg.com/vi/XohAoOb3ZLU/mqdefault.jpg",
          },
          {
            id: "2a4af72c92d91abd3c8fd908",
            title: "We The People-Mudvayne",
            itemId: "XR5RsEnh7bE",
            image: "https://i.ytimg.com/vi/XR5RsEnh7bE/mqdefault.jpg",
          },
          {
            id: "8e1c4ba6e3d1f8a2cb5e42e3",
            title: "12:97:24:99",
            itemId: "9e2K0jxaYhk",
            image: "https://i.ytimg.com/vi/9e2K0jxaYhk/mqdefault.jpg",
          },
          {
            id: "5d27bd662b35b7d8e42e2f26",
            title: "17 - Mudvayne - Lethal Dosage.avi",
            itemId: "veN8H4bOx7s",
            image: "https://i.ytimg.com/vi/veN8H4bOx7s/mqdefault.jpg",
          },
          {
            id: "9ba6ed7fe62a38916dc28167",
            title: "I.D.I.O.T.",
            itemId: "m4xGhZyBM6M",
            image: "https://i.ytimg.com/vi/m4xGhZyBM6M/mqdefault.jpg",
          },
          {
            id: "c66094823af1e81b87e6aa67",
            title: "The Many Faces of Mudvayne & Chad Gray!",
            itemId: "BoKLpP4K4vI",
            image: "https://i.ytimg.com/vi/BoKLpP4K4vI/mqdefault.jpg",
          },
          {
            id: "9206124cb69264e2f63bc3ce",
            title: "Album Intro",
            itemId: "bM-t00qWL6M",
            image: "https://i.ytimg.com/vi/bM-t00qWL6M/mqdefault.jpg",
          },
          {
            id: "a5efc775184fdaeac4617805",
            title: "Mudvayne - Some Assembly Required",
            itemId: "Srw6RcCbstw",
            image: "https://i.ytimg.com/vi/Srw6RcCbstw/mqdefault.jpg",
          },
          {
            id: "0b3608699330388063602a57",
            title: "Coal",
            itemId: "7-S-sCeHG3g",
            image: "https://i.ytimg.com/vi/7-S-sCeHG3g/mqdefault.jpg",
          },
          {
            id: "61c0802c34421a56a8f16369",
            title: "Fear",
            itemId: "9JnynsDo3aY",
            image: "https://i.ytimg.com/vi/9JnynsDo3aY/mqdefault.jpg",
          },
        ],
      },
      {
        id: "0.13234762464988037",
        title: "Fuck Yeah",
        type: "folder",
        children: [
          {
            id: "c2a79415444334eb74fb383b",
            title:
              "Black Label Society  Boozed, Broozed, and Broken Boned   Full Concert",
            itemId: "NhEXli0peeY",
            image: "https://i.ytimg.com/vi/NhEXli0peeY/mqdefault.jpg",
          },
          {
            id: "9cc51bef8b365dc64f6fcea4",
            title: "Black Label Society - Super Terrorizer",
            itemId: "ALrRD_nNd1E",
            image: "https://i.ytimg.com/vi/ALrRD_nNd1E/mqdefault.jpg",
          },
          {
            id: "8da56a0bcf28c4a24eb50087",
            title: "Nailbomb - 1994 - Point Blank [ Full Album ]",
            itemId: "3mjtsXaYRV8",
            image: "https://i.ytimg.com/vi/3mjtsXaYRV8/mqdefault.jpg",
          },
          {
            id: "5e7c562f4182c07d5c3f96a2",
            title: "Mudvayne - Live At Rock Am Ring (2001) FULL SHOW HQ",
            itemId: "4klJYi8yfWQ",
            image: "https://i.ytimg.com/vi/4klJYi8yfWQ/mqdefault.jpg",
          },
        ],
      },
      {
        id: "0.5770257993941921",
        title: "Mafia - Black Label Society",
        type: "folder",
        children: [
          {
            id: "8e5307302c008a4735f76b23",
            title: "Black Label Society - Fire It Up (Mafia) ~ Audio",
            itemId: "OsaG3iUs2mk",
            image: "https://i.ytimg.com/vi/OsaG3iUs2mk/mqdefault.jpg",
          },
          {
            id: "5423c2e86c0699cb174103cc",
            title: "Black Label Society   Suicide Messiah Mafia ~ Audio",
            itemId: "C0J0Nrf9fc0",
            image: "https://i.ytimg.com/vi/C0J0Nrf9fc0/mqdefault.jpg",
          },
          {
            id: "55fbd68b0ac8520b71d433fd",
            title: "Black Label Society - Forever Down (Subtitulado)",
            itemId: "QTIu8EhkSP4",
            image: "https://i.ytimg.com/vi/QTIu8EhkSP4/mqdefault.jpg",
          },
          {
            id: "e6f309e8c1178da5c48a8669",
            title: "Black Label Society - In This River (Mafia) ~ Audio",
            itemId: "MWbsPYKuRck",
            image: "https://i.ytimg.com/vi/MWbsPYKuRck/mqdefault.jpg",
          },
          {
            id: "2f6305122241b4c40334f4b2",
            title: "BLack Label Society: Whats In You (Mafia Album)",
            itemId: "hfeZYaCY1M0",
            image: "https://i.ytimg.com/vi/hfeZYaCY1M0/mqdefault.jpg",
          },
          {
            id: "c0723888c5433a3d26b664c3",
            title: "Black Label Society: You Must Be Blind (Mafia Album)",
            itemId: "agBsreE3cOQ",
            image: "https://i.ytimg.com/vi/agBsreE3cOQ/mqdefault.jpg",
          },
          {
            id: "bbf146d72885c15a3a493426",
            title: "Black Label Society: Death March (Mafia Album)",
            itemId: "IYbw10rW6VQ",
            image: "https://i.ytimg.com/vi/IYbw10rW6VQ/mqdefault.jpg",
          },
          {
            id: "a441ab558ebbed46ae0ce0f6",
            title:
              "Black Label Society Dr  Octavia & Say What You Will (Mafia Album)",
            itemId: "ndO3QHI6gHk",
            image: "https://i.ytimg.com/vi/ndO3QHI6gHk/mqdefault.jpg",
          },
          {
            id: "b5abcc41f7245f5888a44a06",
            title: "Black Label Society Black Label Society Too Tough To Die",
            itemId: "8wpjJxGQ378",
            image: "https://i.ytimg.com/vi/8wpjJxGQ378/mqdefault.jpg",
          },
          {
            id: "64b5626ce38512b358af0176",
            title: "Black Label Society Electric Hellfire",
            itemId: "1Dc3WduCKlY",
            image: "https://i.ytimg.com/vi/1Dc3WduCKlY/mqdefault.jpg",
          },
          {
            id: "310d301b2d6cb73f8c1501c5",
            title: "Spread your wings-Black Label Society",
            itemId: "vRLwImwAmSY",
            image: "https://i.ytimg.com/vi/vRLwImwAmSY/mqdefault.jpg",
          },
          {
            id: "3bc389a386a8b52fa85669bf",
            title: "Black Label Society  Been A Long Time",
            itemId: "2liryRs15uI",
            image: "https://i.ytimg.com/vi/2liryRs15uI/mqdefault.jpg",
          },
          {
            id: "c4a2989f95ff4550dda463a2",
            title: "Black Label Society Dirt On The Grave",
            itemId: "WN3WSHUTn1o",
            image: "https://i.ytimg.com/vi/WN3WSHUTn1o/mqdefault.jpg",
          },
          {
            id: "146f83d7f5eadd9954d7eceb",
            title: "Black Label Society - I Never Dreamed with lyrics",
            itemId: "vYzm43gI59E",
            image: "https://i.ytimg.com/vi/vYzm43gI59E/mqdefault.jpg",
          },
        ],
      },
      {
        id: "0.0203595190850272",
        title: "Purgatory",
        type: "folder",
        children: [
          {
            id: "62cf32b5b6f86f2b91f9e9c2",
            title: "The Dark Side Of the MINIMAL TECHNO sensure",
            itemId: "tz63PRyqeFw",
            image: "https://i.ytimg.com/vi/tz63PRyqeFw/mqdefault.jpg",
          },
          {
            id: "bae9749367aa60090420e593",
            title: "Best Metal Dubstep Mix",
            itemId: "EgNh0i2r4Ho",
            image: "https://i.ytimg.com/vi/EgNh0i2r4Ho/mqdefault.jpg",
          },
          {
            id: "0e88a3062ffbc4c16009e988",
            title:
              "Dubstep Meets Metal: Skrillex vs. Disturbed - Down With San Diego",
            itemId: "npeX5HXisaw",
            image: "https://i.ytimg.com/vi/npeX5HXisaw/mqdefault.jpg",
          },
          {
            id: "0182b34a7be54189dc452d5d",
            title:
              "Top Dubstep Drops - Epic Motivational Mix (Powered edition)",
            itemId: "dLyH94jNau0",
            image: "https://i.ytimg.com/vi/dLyH94jNau0/mqdefault.jpg",
          },
        ],
      },
      {
        id: "0.5206435935687498",
        title: "Level 2",
        type: "folder",
        children: [
          {
            id: "6d4e229ec1e8208177dee6c2",
            title: "Ancient - Um Sonho Psycodelico",
            itemId: "-iXFGsD7Xho",
            image: "https://i.ytimg.com/vi/-iXFGsD7Xho/mqdefault.jpg",
          },
          {
            id: "824e5ddbf0d95ef492dd2134",
            title: 'ANCIENT - "Um Sonho Psycodelico"',
            itemId: "gp46daXHj-M",
            image: "https://i.ytimg.com/vi/gp46daXHj-M/mqdefault.jpg",
          },
          {
            id: "1d9d4236ee8cf15eeb849a82",
            title: "Ancient - The Cainian Chronicle (full album)",
            itemId: "TFD1pQYDWiE",
            image: "https://i.ytimg.com/vi/TFD1pQYDWiE/mqdefault.jpg",
          },
        ],
      },
      {
        id: "0.9102380018648057",
        title: "Limb bizkit",
        type: "folder",
        children: [
          {
            id: "5f9039f9b84d55fac4bd538c",
            title: "Limp Bizkit - Nookie (Official Video)",
            itemId: "JTMVOzPPtiw",
            image: "https://i.ytimg.com/vi/JTMVOzPPtiw/mqdefault.jpg",
          },
          {
            id: "44375508ae9507716f1a529e",
            title: "Limp Bizkit - Rollin' (Official Video)",
            itemId: "RYnFIRc0k6E",
            image: "https://i.ytimg.com/vi/RYnFIRc0k6E/mqdefault.jpg",
          },
          {
            id: "587cd3aa6e144732701613f3",
            title: "Limp Bizkit - Boiler (Official Video)",
            itemId: "qex0OjXolzc",
            image: "https://i.ytimg.com/vi/qex0OjXolzc/mqdefault.jpg",
          },
          {
            id: "3c5e24732521533d08b07873",
            title: "Limp Bizkit - (Mission Impossible 2)",
            itemId: "NdpP6ynPbiY",
            image: "https://i.ytimg.com/vi/NdpP6ynPbiY/mqdefault.jpg",
          },
        ],
      },
      {
        id: "0.5605086199462946",
        title: "Limb Bizkit",
        type: "folder",
        children: [
          {
            id: "39283e11b089c50e9f0b1104",
            title: "Mudavne - -1 (Lyrics)",
            itemId: "GhJ7L8hdqKs",
            image: "https://i.ytimg.com/vi/GhJ7L8hdqKs/mqdefault.jpg",
          },
          {
            id: "e4179f0ab547cdddeaecb296",
            title: "Mudvayne - Mercy, Severity",
            itemId: "_VHibS-ubDw",
            image: "https://i.ytimg.com/vi/_VHibS-ubDw/mqdefault.jpg",
          },
        ],
      },
      {
        id: "0.7039636844207072",
        title: "New Stack",
        type: "folder",
        children: [
          {
            id: "1c4747328c0705ecf34f0387",
            title: "Roar (metal cover by Leo Moracchioli)",
            itemId: "J6BV0aE4FEk",
            image: "https://i.ytimg.com/vi/J6BV0aE4FEk/mqdefault.jpg",
          },
          {
            id: "92fd875f462efb9ad7551e68",
            title: "dimmu borgir-puritania",
            itemId: "jGP1pCz4IbY",
            image: "https://i.ytimg.com/vi/jGP1pCz4IbY/mqdefault.jpg",
          },
          {
            id: "29ee1e4f9989fd0fa0f647b8",
            title: "Dark Horse (metal cover by Leo Moracchioli)",
            itemId: "3Y4pbyVfGHU",
            image: "https://i.ytimg.com/vi/3Y4pbyVfGHU/mqdefault.jpg",
          },
          {
            id: "0687129854ed7bd3168bcab8",
            title: "Zombie (metal cover by Leo & Stine Moracchioli)",
            itemId: "4e4bAsQ4r30",
            image: "https://i.ytimg.com/vi/4e4bAsQ4r30/mqdefault.jpg",
          },
          {
            id: "aa144b003efa17c0bc2a9c69",
            title: "Adele - Hello (metal cover by Leo Moracchioli)",
            itemId: "LtQUJMBH8uE",
            image: "https://i.ytimg.com/vi/LtQUJMBH8uE/mqdefault.jpg",
          },
        ],
      },
      {
        id: "0.6055306438153337",
        title: "Cool clips",
        type: "folder",
        children: [
          {
            id: "7f9efba6ca436ed755d8933c",
            title: "DIMMU BORGIR - Gateways (OFFICIAL MUSIC VIDEO)",
            itemId: "_jw7yk8hm_0",
            image: "https://i.ytimg.com/vi/_jw7yk8hm_0/mqdefault.jpg",
          },
          {
            id: "13a1741b58e12e8e5e9b122c",
            title:
              "DIMMU BORGIR - Progenies of The Great Apocalypse (OFFICIAL MUSIC VIDEO)",
            itemId: "NiNTrKsQ8TU",
            image: "https://i.ytimg.com/vi/NiNTrKsQ8TU/mqdefault.jpg",
          },
          {
            id: "bf970770ccf814bdb354fb50",
            title: "DIMMU BORGIR - Mourning Palace (OFFICIAL MUSIC VIDEO)",
            itemId: "7vcTRWE2_u8",
            image: "https://i.ytimg.com/vi/7vcTRWE2_u8/mqdefault.jpg",
          },
          {
            id: "57bdbf5a6f9a81c8c4492a02",
            title: "Katatonia - Deliberation",
            itemId: "kKesZLA0zHw",
            image: "https://i.ytimg.com/vi/kKesZLA0zHw/mqdefault.jpg",
          },
          {
            id: "6852ef8b4192ce41586f1048",
            title: "Katatonia - My Twin (from The Great Cold Distance)",
            itemId: "nH45PdkXF9I",
            image: "https://i.ytimg.com/vi/nH45PdkXF9I/mqdefault.jpg",
          },
          {
            id: "10761c6e9abea157e789a608",
            title:
              "DAYLIGHT DIES - Dreaming of Breathing (official music video)",
            itemId: "r3QVPEUJYRg",
            image: "https://i.ytimg.com/vi/r3QVPEUJYRg/mqdefault.jpg",
          },
          {
            id: "18ca6763eea5f32a2724b0ba",
            title: "Daylight Dies - Ghosting",
            itemId: "Fw8MzVqKM94",
            image: "https://i.ytimg.com/vi/Fw8MzVqKM94/mqdefault.jpg",
          },
        ],
      },
      {
        id: "0.6104704294359848",
        title: "New Stack",
        type: "folder",
        children: [
          {
            id: "c74c152195d24f808899f0f3",
            title: "Slipknot - Vol 3: The Subliminal Verses (Full Album)",
            itemId: "SVJ1IxMkkcA",
            image: "https://i.ytimg.com/vi/SVJ1IxMkkcA/mqdefault.jpg",
          },
        ],
      },
    ],
  },
  {
    id: "O2xyAl84gQOOJGtUKQae",
    title: "Focus",
    type: "folder",
    children: [
      {
        id: "0.9484395977805561",
        title: "Andy James - Arrival (Album Stream)",
        type: "folder",
        children: [
          {
            id: "92eebaf175d2e16aa5b2b0f6",
            title: "Andy James - After Midnight (Playthrough)",
            itemId: "OOCbKcP5qrs",
            image: "https://i.ytimg.com/vi/OOCbKcP5qrs/mqdefault.jpg",
          },
          {
            id: "0999d8f86a43d6a5cae39fa2",
            title: "Andy James - '85 (Playthrough)",
            itemId: "uNcUB6IqZvQ",
            image: "https://i.ytimg.com/vi/uNcUB6IqZvQ/mqdefault.jpg",
          },
          {
            id: "2b7c79a4ddb410c232d67809",
            title: "Andy James -  Asylum (Official Music Video)",
            itemId: "hthpbaLZWPE",
            image: "https://i.ytimg.com/vi/hthpbaLZWPE/mqdefault.jpg",
          },
          {
            id: "75cd6e1853777dc3f04d03bd",
            title: "Andy James - Equinox (Playthrough)",
            itemId: "9uTTG_aK1QY",
            image: "https://i.ytimg.com/vi/9uTTG_aK1QY/mqdefault.jpg",
          },
          {
            id: "b201ae0984071dade4119f8a",
            title: "Andy James - As I Fall (Playthrough)",
            itemId: "9YLhUhOmFeU",
            image: "https://i.ytimg.com/vi/9YLhUhOmFeU/mqdefault.jpg",
          },
          {
            id: "b4df37452a36df9a1965a8cc",
            title: "Andy James - Stay (Official Album Stream)",
            itemId: "7ysZIjFNPWc",
            image: "https://i.ytimg.com/vi/7ysZIjFNPWc/mqdefault.jpg",
          },
          {
            id: "7870d374f54704b54b2ec3fe",
            title: "Andy James - Shattered and Broken (Official Album Stream)",
            itemId: "BHI3qcKWooE",
            image: "https://i.ytimg.com/vi/BHI3qcKWooE/mqdefault.jpg",
          },
          {
            id: "619662005a32d4165377340a",
            title: "Andy James - Enter Through Fire (Official Album Stream)",
            itemId: "N-1-JX7BG4A",
            image: "https://i.ytimg.com/vi/N-1-JX7BG4A/mqdefault.jpg",
          },
          {
            id: "34bd36e9b6c961beab5dc811",
            title: "Andy James - Afterlife (Official Album Stream)",
            itemId: "antnGD9Wwbc",
            image: "https://i.ytimg.com/vi/antnGD9Wwbc/mqdefault.jpg",
          },
          {
            id: "800b20b2d9189e650a866533",
            title: "Andy James - Obsession (Official Album Stream)",
            itemId: "L82sNCqQav4",
            image: "https://i.ytimg.com/vi/L82sNCqQav4/mqdefault.jpg",
          },
          {
            id: "43c11962040d91743bb0f48b",
            title: "Andy James  - A Plan For Us (Official Album Stream)",
            itemId: "ttnHaDS1GjQ",
            image: "https://i.ytimg.com/vi/ttnHaDS1GjQ/mqdefault.jpg",
          },
          {
            id: "3d2cdc7c7382c78bb5876498",
            title: "Andy James - Droneoid (Official Album Stream)",
            itemId: "nTCMET-H-RA",
            image: "https://i.ytimg.com/vi/nTCMET-H-RA/mqdefault.jpg",
          },
        ],
      },
      {
        id: "0.25353128789349355",
        title: "Rock",
        type: "folder",
        children: [
          {
            id: "1a8739f3d259212323c23412",
            title: "Nick Johnston - Remarkably Human - Full Album",
            itemId: "fYfe_JkVsDo",
            image: "https://i.ytimg.com/vi/fYfe_JkVsDo/mqdefault.jpg",
          },
          {
            id: "027ea8453f5e774694d7e8f1",
            title: "Nick Johnston - Wide Eyes In The Dark - Full Album Stream",
            itemId: "MfiNRE6IZJM",
            image: "https://i.ytimg.com/vi/MfiNRE6IZJM/mqdefault.jpg",
          },
          {
            id: "09bf887b9e28317ed4fbb01f",
            title:
              "Need For Speed 3 Hot Pursuit - Full Soundtrack (With Full-Length Songs) [HQ]",
            itemId: "L9pp1_en1EE",
            image: "https://i.ytimg.com/vi/L9pp1_en1EE/mqdefault.jpg",
          },
          {
            id: "f1ff4ab161d933755ef75139",
            title: "nobody.one -  HEAD MOVIES (2010) - Full Album",
            itemId: "fkrjkY9If5o",
            image: "https://i.ytimg.com/vi/fkrjkY9If5o/mqdefault.jpg",
          },
          {
            id: "e456981977cdaf78cf9dc05f",
            title: "nobody.one -  NO CARE (2016) - Full Album",
            itemId: "3WzD6Z6tt5Q",
            image: "https://i.ytimg.com/vi/3WzD6Z6tt5Q/mqdefault.jpg",
          },
          {
            id: "fd6d534fcf06cf026b455189",
            title: "(FULL ALBUM) Polyphia - Renaissance",
            itemId: "Q2dfe2yseIM",
            image: "https://i.ytimg.com/vi/Q2dfe2yseIM/mqdefault.jpg",
          },
        ],
      },
      {
        id: "0.32913264184295055",
        title: "Xenia",
        type: "folder",
        children: [
          {
            id: "92342db2ad6d29421c8ac350",
            title:
              "Xenia Meow  - Live @ Radio Intense 17.01.2017 (Ksenia Meow)",
            itemId: "QwYWnGw53Js",
            image: "https://i.ytimg.com/vi/QwYWnGw53Js/mqdefault.jpg",
          },
          {
            id: "db61aceff202c0b02b44cb5f",
            title: "Xenia - Live @ Radio Intense 25.10.2016",
            itemId: "RYObzH_8Tkk",
            image: "https://i.ytimg.com/vi/RYObzH_8Tkk/mqdefault.jpg",
          },
          {
            id: "1cf4018a1c7f61b30db95ca2",
            title: "Xenia @ DJanes.net 18.10.2018 // Progressive, Techno music",
            itemId: "xJ5z8GF1uys",
            image: "https://i.ytimg.com/vi/xJ5z8GF1uys/mqdefault.jpg",
          },
          {
            id: "5fd461f55ddc28951b3fc010",
            title: "Xenia - Live @ Radio Intense 05.04.2017",
            itemId: "KxAKFVkL0XA",
            image: "https://i.ytimg.com/vi/KxAKFVkL0XA/mqdefault.jpg",
          },
          {
            id: "913f97cfda3567461843297d",
            title: "Xenia - Live @ Radio Intense 24.02.2016 // Melodic Techno",
            itemId: "H12b1vpXQxQ",
            image: "https://i.ytimg.com/vi/H12b1vpXQxQ/mqdefault.jpg",
          },
          {
            id: "2dd0beb3752f427c62559ee5",
            title: "Xenia - Live @ Radio Intense 09.05.2017 // Techno Mix",
            itemId: "CrMU8IvK1_k",
            image: "https://i.ytimg.com/vi/CrMU8IvK1_k/mqdefault.jpg",
          },
          {
            id: "bee8704fe6c9135e6a305f97",
            title: "Xenia - Live @ Radio Intense 07.12.2016",
            itemId: "SgggOd1E_kE",
            image: "https://i.ytimg.com/vi/SgggOd1E_kE/mqdefault.jpg",
          },
          {
            id: "911b1fbe95a8906960932209",
            title: "XENIA - Live @ Radio Intense 30.08.2019 #Techno",
            itemId: "WCwf8-Sni7k",
            image: "https://i.ytimg.com/vi/WCwf8-Sni7k/mqdefault.jpg",
          },
          {
            id: "b99de2c8ee1811d947ea8c1b",
            title: "Xenia - Live @ Radio Intense Kyiv 28.12.2019 // Techno Mix",
            itemId: "wNj_CLFJXKc",
            image: "https://i.ytimg.com/vi/wNj_CLFJXKc/mqdefault.jpg",
          },
          {
            id: "f3724c135b5732f5ef7073b1",
            title:
              "XENIA UA - Live @ Radio Intense Kyiv 29.10.2019 // #TechnoMix",
            itemId: "ZjtOLsbszGk",
            image: "https://i.ytimg.com/vi/ZjtOLsbszGk/mqdefault.jpg",
          },
        ],
      },
      {
        id: "0.8918764437799601",
        title: "Miss Monique",
        children: [
          {
            id: "37206874702f526895b2cab3",
            title:
              "Miss Monique - Live @ Radio Intense 31.01.2017 [Progressive House]",
            itemId: "Q-oluoEQCk0",
            image: "https://i.ytimg.com/vi/Q-oluoEQCk0/mqdefault.jpg",
          },
          {
            id: "6836ec1591133133c120048f",
            title:
              "@Miss Monique  - Live @ Radio Intense 03.05.2018 // Progressive House, Techno Mix",
            itemId: "jz1aO9bfJCE",
            image: "https://i.ytimg.com/vi/jz1aO9bfJCE/mqdefault.jpg",
          },
          {
            id: "309e80aa8143a3c2aa72315e",
            title:
              "Miss Monique - Special B'day Podcast (Live, @Radio Intense  05.05.2017) //Progressive House",
            itemId: "Dlxu28sQfkE",
            image: "https://i.ytimg.com/vi/Dlxu28sQfkE/mqdefault.jpg",
          },
          {
            id: "0c8321f0ee358b00f3aedebe",
            title: "Miss Monique - Live @ Radio Intense 13.04.2016",
            itemId: "hcskSDph5ZY",
            image: "https://i.ytimg.com/vi/hcskSDph5ZY/mqdefault.jpg",
          },
          {
            id: "a64e2db3e094a9c5530b9d00",
            title:
              "Miss Monique - MiMo Weekly Podcast 015 [Progressive House/Melodic Techno]",
            itemId: "6Qd0kmnKGOI",
            image: "https://i.ytimg.com/vi/6Qd0kmnKGOI/mqdefault.jpg",
          },
          {
            id: "e9cb8783fcebe74ed1cf72f6",
            title:
              "Miss Monique - Live @ Radio Intense 12.03.2020 [Progressive House / Melodic]",
            itemId: "x5Dzn8EwmCg",
            image: "https://i.ytimg.com/vi/x5Dzn8EwmCg/mqdefault.jpg",
          },
        ],
      },
    ],
  },
  {
    id: "ROg4WdB4SCoqJxoRBB5N",
    title: "fuck me i'm metal",
    type: "folder",
    children: [
      {
        id: "0.6825250815188063",
        title: "Leo covers",
        type: "folder",
        children: [
          {
            id: "658082b467182997234dc860",
            title: "Adele - Hello (metal cover by Leo Moracchioli)",
            itemId: "LtQUJMBH8uE",
            image: "https://i.ytimg.com/vi/LtQUJMBH8uE/mqdefault.jpg",
          },
          {
            id: "95420c626cd66ea9957e5a29",
            title: "Chandelier (metal cover by Leo Moracchioli)",
            itemId: "ZsT-IlaG5Qo",
            image: "https://i.ytimg.com/vi/ZsT-IlaG5Qo/mqdefault.jpg",
          },
          {
            id: "68b93961562303d7cd8bfa18",
            title:
              "Eye of the Tiger (metal cover by Leo Moracchioli feat. Rob Lundgren)",
            itemId: "G6r1dAire0Y",
            image: "https://i.ytimg.com/vi/G6r1dAire0Y/mqdefault.jpg",
          },
          {
            id: "ac76cd4ef32fc381dc566e8d",
            title: "Let It Go - from Frozen (metal cover by Leo Moracchioli)",
            itemId: "so49WpSj9bo",
            image: "https://i.ytimg.com/vi/so49WpSj9bo/mqdefault.jpg",
          },
          {
            id: "ee96b978a5a72d78210640a0",
            title: "Poker Face (metal cover by Leo Moracchioli)",
            itemId: "wCVukDiRsNs",
            image: "https://i.ytimg.com/vi/wCVukDiRsNs/mqdefault.jpg",
          },
          {
            id: "128e58e4fbf795dc26634081",
            title: "Beat It (metal cover by Leo Moracchioli)",
            itemId: "EN6nLcix45U",
            image: "https://i.ytimg.com/vi/EN6nLcix45U/mqdefault.jpg",
          },
          {
            id: "db6c2c4b11d4b24c6d75a746",
            title: "Ghostbusters (metal cover by Leo Moracchioli)",
            itemId: "hF39e_hnFb8",
            image: "https://i.ytimg.com/vi/hF39e_hnFb8/mqdefault.jpg",
          },
          {
            id: "d5123f774379988acaaba17b",
            title: "Sail - Awolnation (metal cover by Leo Moracchioli)",
            itemId: "YjEGRAEcbQU",
            image: "https://i.ytimg.com/vi/YjEGRAEcbQU/mqdefault.jpg",
          },
          {
            id: "d95d3822d3c1fef29be3da08",
            title: "Shake It Off (metal cover by Leo Moracchioli)",
            itemId: "kCEq3-w8Ls4",
            image: "https://i.ytimg.com/vi/kCEq3-w8Ls4/mqdefault.jpg",
          },
          {
            id: "072511968218834a0936575a",
            title: "All About That Bass (metal cover by Leo Moracchioli)",
            itemId: "I4p4afTAH9Y",
            image: "https://i.ytimg.com/vi/I4p4afTAH9Y/mqdefault.jpg",
          },
          {
            id: "3e34e94c97c856214195de29",
            title: "Take On Me (metal cover by Leo Moracchioli)",
            itemId: "NBiQPZxd81s",
            image: "https://i.ytimg.com/vi/NBiQPZxd81s/mqdefault.jpg",
          },
          {
            id: "b181ce686a692082a5bdc2af",
            title: "Bad Romance (metal cover by Leo Moracchioli)",
            itemId: "-uaqsuvIew8",
            image: "https://i.ytimg.com/vi/-uaqsuvIew8/mqdefault.jpg",
          },
          {
            id: "6163b53a3cb7f93c698eac72",
            title: "U Can´t Touch This (metal cover by Leo Moracchioli)",
            itemId: "tFelfYq3zpQ",
            image: "https://i.ytimg.com/vi/tFelfYq3zpQ/mqdefault.jpg",
          },
          {
            id: "24ab3d2ee5d9339dc722ae07",
            title: "Anaconda (metal cover by Leo Moracchioli)",
            itemId: "CipIdBn55n4",
            image: "https://i.ytimg.com/vi/CipIdBn55n4/mqdefault.jpg",
          },
          {
            id: "ab6f5be97dcd0cf5d1b42ac4",
            title: "Like A Virgin (metal cover by Leo Moracchioli)",
            itemId: "lbrMRfgfWFI",
            image: "https://i.ytimg.com/vi/lbrMRfgfWFI/mqdefault.jpg",
          },
          {
            id: "4bf14460355f57eb5855571a",
            title: "Baby One More Time (metal cover by Leo Moracchioli)",
            itemId: "JdLhYrRlJ4Y",
            image: "https://i.ytimg.com/vi/JdLhYrRlJ4Y/mqdefault.jpg",
          },
          {
            id: "b086f174a38dfe0d2e256d13",
            title: "Pink - Try (metal cover by Leo Moracchioli)",
            itemId: "JY332_cEdoc",
            image: "https://i.ytimg.com/vi/JY332_cEdoc/mqdefault.jpg",
          },
          {
            id: "209fc2adeb31c8b66b35d9de",
            title: "Uptown Funk (metal cover by Leo Moracchioli)",
            itemId: "PLyFcGKU_f8",
            image: "https://i.ytimg.com/vi/PLyFcGKU_f8/mqdefault.jpg",
          },
          {
            id: "3c42a17b39aeaa161c67869c",
            title: "Elastic Heart (metal cover by Leo Moracchioli)",
            itemId: "H5veAVggF4s",
            image: "https://i.ytimg.com/vi/H5veAVggF4s/mqdefault.jpg",
          },
          {
            id: "fdb1f5a664656c6b2687722f",
            title: "Lips Are Movin (metal cover by Leo Moracchioli)",
            itemId: "hzZWm08mWKg",
            image: "https://i.ytimg.com/vi/hzZWm08mWKg/mqdefault.jpg",
          },
          {
            id: "b04f85fef7b344ec2ba46fc3",
            title: "Rolling In The Deep (metal cover by Leo Moracchioli)",
            itemId: "x2Oh7STrSIk",
            image: "https://i.ytimg.com/vi/x2Oh7STrSIk/mqdefault.jpg",
          },
          {
            id: "99ed967267f3239c749a7e4f",
            title: "Moves Like Jagger (metal cover by Leo Moracchioli)",
            itemId: "nPAAIX8g6L4",
            image: "https://i.ytimg.com/vi/nPAAIX8g6L4/mqdefault.jpg",
          },
          {
            id: "181ffe363beb7848470600c0",
            title: "Livin´ La Vida Loca (metal cover by Leo Moracchioli)",
            itemId: "cSOe8PAupFE",
            image: "https://i.ytimg.com/vi/cSOe8PAupFE/mqdefault.jpg",
          },
          {
            id: "7607487a5397f2f07bde8819",
            title: "Scatman (metal cover by Leo Moracchioli)",
            itemId: "gD_0U5l7jk4",
            image: "https://i.ytimg.com/vi/gD_0U5l7jk4/mqdefault.jpg",
          },
          {
            id: "661659b126df4a749a2968a1",
            title: "No Limit (metal cover by Leo Moracchioli)",
            itemId: "HEk4fx_XNNE",
            image: "https://i.ytimg.com/vi/HEk4fx_XNNE/mqdefault.jpg",
          },
          {
            id: "cf9030a1c91ce4f235e78f54",
            title: "Baby (metal cover by Leo Moracchioli)",
            itemId: "VOrOna2P0ok",
            image: "https://i.ytimg.com/vi/VOrOna2P0ok/mqdefault.jpg",
          },
          {
            id: "7857df99c1d1d815eefec6b4",
            title: "Ice Ice Baby (metal cover by Leo Moracchioli)",
            itemId: "ylaQvvNILt4",
            image: "https://i.ytimg.com/vi/ylaQvvNILt4/mqdefault.jpg",
          },
          {
            id: "4217d6c758d4b9b6a7b5860a",
            title: "Never Gonna Give You Up (metal cover by Leo Moracchioli)",
            itemId: "1_Z5q152GSQ",
            image: "https://i.ytimg.com/vi/1_Z5q152GSQ/mqdefault.jpg",
          },
          {
            id: "d7b12a478bb5a7cc0a94d336",
            title: "Dark Horse (metal cover by Leo Moracchioli)",
            itemId: "3Y4pbyVfGHU",
            image: "https://i.ytimg.com/vi/3Y4pbyVfGHU/mqdefault.jpg",
          },
          {
            id: "e656bc85353c3933bf456749",
            title: "Fatty Boom Boom (metal cover by Leo Moracchioli)",
            itemId: "1szxGUSAoDw",
            image: "https://i.ytimg.com/vi/1szxGUSAoDw/mqdefault.jpg",
          },
          {
            id: "c9938d7442ec72c52ff5fdab",
            title: "Push It (metal cover by Leo Moracchioli)",
            itemId: "4uXqp_AsXvM",
            image: "https://i.ytimg.com/vi/4uXqp_AsXvM/mqdefault.jpg",
          },
          {
            id: "d00c13113cff508e113b951f",
            title: "Stay (metal cover by Leo Moracchioli)",
            itemId: "Kj1hinqoljA",
            image: "https://i.ytimg.com/vi/Kj1hinqoljA/mqdefault.jpg",
          },
          {
            id: "ce976b838ed8a8b52ff9c199",
            title: "Gangster´s Paradise (metal cover by Leo Moracchioli)",
            itemId: "G7BieooyNNA",
            image: "https://i.ytimg.com/vi/G7BieooyNNA/mqdefault.jpg",
          },
          {
            id: "b850ce19a827d7ad6ba62a59",
            title: "Stayin´ Alive (metal cover by Leo Moracchioli)",
            itemId: "JDW_HK1Xmv8",
            image: "https://i.ytimg.com/vi/JDW_HK1Xmv8/mqdefault.jpg",
          },
          {
            id: "d2750938269d0237e7b4a22a",
            title: "Firework (metal cover by Leo Moracchioli)",
            itemId: "Mi3IHouEeWk",
            image: "https://i.ytimg.com/vi/Mi3IHouEeWk/mqdefault.jpg",
          },
          {
            id: "540c85329d38f0761099e94c",
            title: "Gangnam Style (metal cover by Leo Moracchioli)",
            itemId: "MmbvxyRjMc0",
            image: "https://i.ytimg.com/vi/MmbvxyRjMc0/mqdefault.jpg",
          },
          {
            id: "62d59edbd50d617b32565314",
            title: "Barbie Girl (metal cover by Leo Moracchioli)",
            itemId: "3vnVzoEz_Zs",
            image: "https://i.ytimg.com/vi/3vnVzoEz_Zs/mqdefault.jpg",
          },
          {
            id: "4a00c32b7322524abcfce3d4",
            title: "Wrecking Ball (metal cover by Leo Moracchioli)",
            itemId: "1fi9OmYtvSU",
            image: "https://i.ytimg.com/vi/1fi9OmYtvSU/mqdefault.jpg",
          },
          {
            id: "cd6cbee32a6760d43fd1c97f",
            title: "California Dreamin´ (metal cover by Leo Moracchioli)",
            itemId: "2RVB-CYbJqA",
            image: "https://i.ytimg.com/vi/2RVB-CYbJqA/mqdefault.jpg",
          },
          {
            id: "877f56430c9e2d2385f55e2e",
            title: "Get Lucky (metal cover by Leo Moracchioli)",
            itemId: "NyU5CShHmXw",
            image: "https://i.ytimg.com/vi/NyU5CShHmXw/mqdefault.jpg",
          },
          {
            id: "600e0c2b5f4b513ec25edabc",
            title: "Black Night - Deep Purple (metal cover by Leo Moracchioli)",
            itemId: "o_dyQ9z5H8I",
            image: "https://i.ytimg.com/vi/o_dyQ9z5H8I/mqdefault.jpg",
          },
          {
            id: "817779cb5c5ff18cd21b7995",
            title: "Macarena (metal cover by Leo Moracchioli)",
            itemId: "R3C9CVsZ_8I",
            image: "https://i.ytimg.com/vi/R3C9CVsZ_8I/mqdefault.jpg",
          },
          {
            id: "8087f588f0d3e7164738c114",
            title: "Justin Bieber - Sorry (metal cover by Leo Moracchioli)",
            itemId: "6t_MfckFDnQ",
            image: "https://i.ytimg.com/vi/6t_MfckFDnQ/mqdefault.jpg",
          },
          {
            id: "af111d242ab305688a98a2bc",
            title: "Greased Lightning (metal cover by Leo Moracchioli)",
            itemId: "4idy0uJN-A0",
            image: "https://i.ytimg.com/vi/4idy0uJN-A0/mqdefault.jpg",
          },
          {
            id: "48af8f0d70853c6d3d8a6b4d",
            title: "Sia - Cheap Thrills (metal cover by Leo Moracchioli)",
            itemId: "0Jrp6IrV6gY",
            image: "https://i.ytimg.com/vi/0Jrp6IrV6gY/mqdefault.jpg",
          },
          {
            id: "54f350746d54120a6a12bb2d",
            title: "Mambo No. 5 (metal cover by Leo Moracchioli)",
            itemId: "EpVpSKYXSwM",
            image: "https://i.ytimg.com/vi/EpVpSKYXSwM/mqdefault.jpg",
          },
          {
            id: "5841a53121b3cab262335ba3",
            title: "The Final Countdown (metal cover by Leo Moracchioli)",
            itemId: "LUtg-utg2XU",
            image: "https://i.ytimg.com/vi/LUtg-utg2XU/mqdefault.jpg",
          },
          {
            id: "51f95eafd469ac700f7f3095",
            title: "The Power of Love (metal cover by Leo Moracchioli)",
            itemId: "kaULR6g-EJY",
            image: "https://i.ytimg.com/vi/kaULR6g-EJY/mqdefault.jpg",
          },
        ],
      },
      {
        id: "0.9328624995465041",
        title: "Leo",
        children: [
          {
            id: "6042c380d9ac42e7bfdf522e",
            title: "U Can´t Touch This (metal cover by Leo Moracchioli)",
            itemId: "tFelfYq3zpQ",
            image: "https://i.ytimg.com/vi/tFelfYq3zpQ/mqdefault.jpg",
          },
          {
            id: "34866471bf4f6b5110e32fc6",
            title: "Dark Horse (metal cover by Leo Moracchioli)",
            itemId: "3Y4pbyVfGHU",
            image: "https://i.ytimg.com/vi/3Y4pbyVfGHU/mqdefault.jpg",
          },
          {
            id: "3edd661d6474fd97c678882f",
            title: "Roar (metal cover by Leo Moracchioli)",
            itemId: "J6BV0aE4FEk",
            image: "https://i.ytimg.com/vi/J6BV0aE4FEk/mqdefault.jpg",
          },
          {
            id: "1f893a2e71209db3b0bb4922",
            title: "Feel Good Inc. (metal cover by Leo Moracchioli)",
            itemId: "yNENVZFHutQ",
            image: "https://i.ytimg.com/vi/yNENVZFHutQ/mqdefault.jpg",
          },
          {
            id: "a498305f916c7081100dada9",
            title: "Adele - Hello (metal cover by Leo Moracchioli)",
            itemId: "LtQUJMBH8uE",
            image: "https://i.ytimg.com/vi/LtQUJMBH8uE/mqdefault.jpg",
          },
        ],
      },
      {
        id: "0.8198408715208939",
        title: "Original",
        children: [
          {
            id: "20c89fbc3749a2919d04c111",
            title: "Adele - Hello",
            itemId: "YQHsXMglC9A",
            image: "https://i.ytimg.com/vi/YQHsXMglC9A/mqdefault.jpg",
          },
          {
            id: "42beb36d6cf2b62c876b32cf",
            title: "Katy Perry - Roar (Official)",
            itemId: "CevxZvSJLk8",
            image: "https://i.ytimg.com/vi/CevxZvSJLk8/mqdefault.jpg",
          },
          {
            id: "36d2c18d5d1f6176e2970a26",
            title: "Gorillaz - Feel Good Inc. (Official Video)",
            itemId: "HyHNuVaZJ-k",
            image: "https://i.ytimg.com/vi/HyHNuVaZJ-k/mqdefault.jpg",
          },
          {
            id: "f05b1a4d2d1e5b4e6c3ed3c7",
            title: "MC Hammer - U Can't Touch This (Official Music Video)",
            itemId: "otCpCn0l4Wo",
            image: "https://i.ytimg.com/vi/otCpCn0l4Wo/mqdefault.jpg",
          },
          {
            id: "aec8839c7d87defccc9d9c66",
            title: "Katy Perry - Dark Horse (Official) ft. Juicy J",
            itemId: "0KSOMA3QBU0",
            image: "https://i.ytimg.com/vi/0KSOMA3QBU0/mqdefault.jpg",
          },
        ],
      },
    ],
  },
  {
    id: "ZcC9mCfSEZss0bkcQNE9",
    title: "Piano",
    children: [
      {
        id: "0.9379589491299908",
        title: "Synthesia",
        children: [
          {
            id: "e4f117f4b4b3145e3eb60c96",
            title:
              "Fly - Ludovico Einaudi \\\\ Jacob's Piano \\\\ Synthesia Piano Tutorial",
            itemId: "7mhJFks2n2g",
            image: "https://i.ytimg.com/vi/7mhJFks2n2g/mqdefault.jpg",
          },
          {
            id: "fc71dead8dfcbc081430c207",
            title: "Night - Ludovico Einaudi - Synthesia",
            itemId: "Vq1XEcvile0",
            image: "https://i.ytimg.com/vi/Vq1XEcvile0/mqdefault.jpg",
          },
          {
            id: "95f726d7d382e5016f31168f",
            title: "Oltremare - Ludovico Einaudi \\\\ Synthesia Piano Tutorial",
            itemId: "rwE2BuRxyK4",
            image: "https://i.ytimg.com/vi/rwE2BuRxyK4/mqdefault.jpg",
          },
          {
            id: "b0ef6ee6edd3f3a714b67ee6",
            title:
              "Ludovico Einaudi - Experience - Piano Tutorial (High quality audio)",
            itemId: "4cFOEfbp9EM",
            image: "https://i.ytimg.com/vi/4cFOEfbp9EM/mqdefault.jpg",
          },
          {
            id: "24f610c33ffcaeab76ca05cf",
            title:
              "Ludovico Einaudi - Primavera - Piano Tutorial by PlutaX - Synthesia",
            itemId: "fxW0pW_OGn8",
            image: "https://i.ytimg.com/vi/fxW0pW_OGn8/mqdefault.jpg",
          },
          {
            id: "8f1081e510662ec95f9e439d",
            title: "Ludovico Einaudi - I Giorni [Synthesia Piano Tutorial]",
            itemId: "G7oNtCHFPJM",
            image: "https://i.ytimg.com/vi/G7oNtCHFPJM/mqdefault.jpg",
          },
          {
            id: "dbfd6ab264b36b1ec13046bd",
            title: "Ludovico Einaudi - Nuvole Bianche",
            itemId: "4VR-6AS0-l4",
            image: "https://i.ytimg.com/vi/4VR-6AS0-l4/mqdefault.jpg",
          },
          {
            id: "9eae6fd8f99eb41e8299ab53",
            title: "Ludovico Einaudi - Una Mattina (The Intouchables)",
            itemId: "-8X_aMT5z0A",
            image: "https://i.ytimg.com/vi/-8X_aMT5z0A/mqdefault.jpg",
          },
          {
            id: "4fa4dca41aaa59401bffab5e",
            title: "Ludovico Einaudi - Le Onde [Synthesia Tutorial]",
            itemId: "MnRn9qAzbUo",
            image: "https://i.ytimg.com/vi/MnRn9qAzbUo/mqdefault.jpg",
          },
          {
            id: "dcb21def55e408bc59f4158d",
            title: "Ludovico Einaudi - Monday",
            itemId: "vnuoedGE4DU",
            image: "https://i.ytimg.com/vi/vnuoedGE4DU/mqdefault.jpg",
          },
          {
            id: "ab386664f9bd86972eafa5d1",
            title:
              "Waterways | in a Time lapse - Ludovico Einaudi ( MIDI / Synthesia / Tutorial )",
            itemId: "TuJmu9MQ3eQ",
            image: "https://i.ytimg.com/vi/TuJmu9MQ3eQ/mqdefault.jpg",
          },
          {
            id: "e4b4cbcb3eef2eb038f6fae5",
            title: "Andare - Ludovico Einaudi - Piano Cover Tutorial HD",
            itemId: "qO-aKbZG0gQ",
            image: "https://i.ytimg.com/vi/qO-aKbZG0gQ/mqdefault.jpg",
          },
        ],
      },
      {
        id: "0.9574496645912778",
        title: "Originals",
        children: [
          {
            id: "15cfece3c53fb57f2bff7847",
            title: "Ludovico Einaudi - Oltremare",
            itemId: "R8MzHqkNBwo",
            image: "https://i.ytimg.com/vi/R8MzHqkNBwo/mqdefault.jpg",
          },
          {
            id: "ba9d33581bca45cf71e81318",
            title: "Ludovico Einaudi - Fly",
            itemId: "411iOnRcjAU",
            image: "https://i.ytimg.com/vi/411iOnRcjAU/mqdefault.jpg",
          },
          {
            id: "6c3d2cd92032671558b4f010",
            title: "Ludovico Einaudi - Nuvole Bianche",
            itemId: "xyY4IZ3JDFE",
            image: "https://i.ytimg.com/vi/xyY4IZ3JDFE/mqdefault.jpg",
          },
          {
            id: "a931759fc48b6f23b4505ff0",
            title: "Ludovico Einaudi - I Giorni",
            itemId: "P2K7D-uMH2g",
            image: "https://i.ytimg.com/vi/P2K7D-uMH2g/mqdefault.jpg",
          },
          {
            id: "6c190813b9ad4d6ac3ab60fd",
            title: "Ludovico Einaudi - Una Mattina",
            itemId: "gR03YnCK66M",
            image: "https://i.ytimg.com/vi/gR03YnCK66M/mqdefault.jpg",
          },
          {
            id: "1eb1507ee1190aa85aa7cfae",
            title: "LE ONDE - Ludovico Einaudi -",
            itemId: "Vg-0DFNTBm0",
            image: "https://i.ytimg.com/vi/Vg-0DFNTBm0/mqdefault.jpg",
          },
          {
            id: "70c14592863026cf598be4ed",
            title: "Monday - Ludovico Einaudi",
            itemId: "fEYayRe4uSs",
            image: "https://i.ytimg.com/vi/fEYayRe4uSs/mqdefault.jpg",
          },
          {
            id: "74770ca0877d97c51c75a947",
            title: "Ludovico Einaudi - Waterways",
            itemId: "e3JjbDS70CY",
            image: "https://i.ytimg.com/vi/e3JjbDS70CY/mqdefault.jpg",
          },
        ],
      },
    ],
  },
  {
    id: "lg9SJcbrPsATaJdxLBRp",
    title: "Jordan Peterson Personality",
    children: [
      {
        id: "0.19501501206802951",
        title: "2017 Maps of Meaning",
        children: [
          {
            id: "b337d5b9cf4e10e75f474e3e",
            title:
              "2017 Maps of Meaning 02: Marionettes & Individuals (Part 1)",
            itemId: "EN2lyN7rM4E",
            image: "https://i.ytimg.com/vi/EN2lyN7rM4E/mqdefault.jpg",
          },
          {
            id: "383aafe1826630861a38f300",
            title:
              "2017 Maps of Meaning 03: Marionettes and Individuals (Part 2)",
            itemId: "Us979jCjHu8",
            image: "https://i.ytimg.com/vi/Us979jCjHu8/mqdefault.jpg",
          },
          {
            id: "73ad0108fb290dc5e4197631",
            title: "2017 Maps of Meaning 01: Context and Background",
            itemId: "I8Xc2_FtpHI",
            image: "https://i.ytimg.com/vi/I8Xc2_FtpHI/mqdefault.jpg",
          },
          {
            id: "e91f043483a31f8129b1cd85",
            title:
              "2017 Maps of Meaning 04: Marionettes and Individuals (Part 3)",
            itemId: "bV16NEWld8Q",
            image: "https://i.ytimg.com/vi/bV16NEWld8Q/mqdefault.jpg",
          },
          {
            id: "b06847ddd8d7c4ad00312f23",
            title: "2017 Maps of Meaning 05: Story and Metastory (Part 1)",
            itemId: "RudKmwzDpNY",
            image: "https://i.ytimg.com/vi/RudKmwzDpNY/mqdefault.jpg",
          },
          {
            id: "6ff71f8bb1ddb6b7aefacf65",
            title: "2017 Maps of Meaning 06: Story and Metastory (Part 2)",
            itemId: "nsZ8XqHPjI4",
            image: "https://i.ytimg.com/vi/nsZ8XqHPjI4/mqdefault.jpg",
          },
          {
            id: "25035e39e815d2bd3e31a94e",
            title: "2017 Maps of Meaning 07: Images of Story & Metastory",
            itemId: "F3n5qtj89QE",
            image: "https://i.ytimg.com/vi/F3n5qtj89QE/mqdefault.jpg",
          },
          {
            id: "1db305e45fcacd1ace1f3fa9",
            title:
              "2017 Maps of Meaning 08: Neuropsychology of Symbolic Representation",
            itemId: "Nb5cBkbQpGY",
            image: "https://i.ytimg.com/vi/Nb5cBkbQpGY/mqdefault.jpg",
          },
          {
            id: "94c4b098671cee31475c521f",
            title:
              "2017 Maps of Meaning 09: Patterns of Symbolic Representation",
            itemId: "yXZSeiAl4PI",
            image: "https://i.ytimg.com/vi/yXZSeiAl4PI/mqdefault.jpg",
          },
          {
            id: "5800f207e90b69507b7baf24",
            title: "2017 Maps of Meaning 10: Genesis and the Buddha",
            itemId: "7XtEZvLo-Sc",
            image: "https://i.ytimg.com/vi/7XtEZvLo-Sc/mqdefault.jpg",
          },
          {
            id: "cc87d4842460f90bb5a56ef7",
            title: "2017 Maps of Meaning 11: The Flood and the Tower",
            itemId: "T4fjSrVCDvA",
            image: "https://i.ytimg.com/vi/T4fjSrVCDvA/mqdefault.jpg",
          },
          {
            id: "1824208a7e4a3729e6a350e3",
            title:
              "2017 Maps of Meaning 12: Final: The Divinity of the Individual",
            itemId: "6V1eMvGGcXQ",
            image: "https://i.ytimg.com/vi/6V1eMvGGcXQ/mqdefault.jpg",
          },
        ],
      },
      {
        id: "0.6544722697389692",
        title: "2017 Personality ",
        children: [
          {
            id: "6cadd47cce41897c3cee3bf6",
            title: "2017 Personality 01: Introduction",
            itemId: "kYYJlNbV1OM",
            image: "https://i.ytimg.com/vi/kYYJlNbV1OM/mqdefault.jpg",
          },
          {
            id: "2b69ac260e795230d0dd6be3",
            title: "2017 Personality 02/03: Historical & Mythological Context",
            itemId: "HbAZ6cFxCeY",
            image: "https://i.ytimg.com/vi/HbAZ6cFxCeY/mqdefault.jpg",
          },
          {
            id: "393a52c023ca5808e3925663",
            title: "2017 Personality 04/05: Heroic and Shamanic Initiations",
            itemId: "wLc_MC7NQek",
            image: "https://i.ytimg.com/vi/wLc_MC7NQek/mqdefault.jpg",
          },
          {
            id: "2eac5489d565f70e779a2fbd",
            title: "2017 Personality 06: Jean Piaget & Constructivism",
            itemId: "BQ4VSRg4e8w",
            image: "https://i.ytimg.com/vi/BQ4VSRg4e8w/mqdefault.jpg",
          },
          {
            id: "b46c8dfbc611370d2a2fa435",
            title: "2017 Personality 07: Carl Jung and the Lion King (Part 1)",
            itemId: "3iLiKMUiyTI",
            image: "https://i.ytimg.com/vi/3iLiKMUiyTI/mqdefault.jpg",
          },
          {
            id: "96c262063823a46d66977509",
            title: "2017 Personality 08: Carl Jung and the Lion King (Part 2)",
            itemId: "X6pbJTqv2hw",
            image: "https://i.ytimg.com/vi/X6pbJTqv2hw/mqdefault.jpg",
          },
          {
            id: "3d6cf2bc7addfdc0672904eb",
            title: "2017 Personality 09: Freud and the Dynamic Unconscious",
            itemId: "YFWLwYyrMRE",
            image: "https://i.ytimg.com/vi/YFWLwYyrMRE/mqdefault.jpg",
          },
          {
            id: "b54565fa5296313379b2c839",
            title: "2017 Personality 10: Humanism & Phenomenology: Carl Rogers",
            itemId: "68tFnjkIZ1Q",
            image: "https://i.ytimg.com/vi/68tFnjkIZ1Q/mqdefault.jpg",
          },
          {
            id: "1c2ddc215b986f281de91548",
            title:
              "2017 Personality 11: Existentialism: Nietzsche Dostoevsky & Kierkegaard",
            itemId: "4qZ3EsrKPsc",
            image: "https://i.ytimg.com/vi/4qZ3EsrKPsc/mqdefault.jpg",
          },
          {
            id: "87be914d700a748298d17c83",
            title:
              "2017 Personality 12: Phenomenology: Heidegger, Binswanger, Boss",
            itemId: "11oBFCNeTAs",
            image: "https://i.ytimg.com/vi/11oBFCNeTAs/mqdefault.jpg",
          },
          {
            id: "841d4203a726b225f722ffa2",
            title:
              "2017 Personality 13: Existentialism via Solzhenitsyn and the Gulag",
            itemId: "w84uRYq0Uc8",
            image: "https://i.ytimg.com/vi/w84uRYq0Uc8/mqdefault.jpg",
          },
          {
            id: "d1880ca100172eb1eac278d6",
            title:
              "2017 Personality 14: Introduction to Traits/jometrics/The Big 5",
            itemId: "pCceO_D4AlY",
            image: "https://i.ytimg.com/vi/pCceO_D4AlY/mqdefault.jpg",
          },
          {
            id: "e7c190fe8da4f2fdd7ee8e28",
            title: "2017 Personality 15: Biology/Traits: The Limbic System",
            itemId: "AqkFg1pvNDw",
            image: "https://i.ytimg.com/vi/AqkFg1pvNDw/mqdefault.jpg",
          },
          {
            id: "25e33e6f50bb34421a80fedf",
            title:
              "2017 Personality 16: Biology/Traits: Incentive Reward/Neuroticism",
            itemId: "ewU7Vb9ToXg",
            image: "https://i.ytimg.com/vi/ewU7Vb9ToXg/mqdefault.jpg",
          },
          {
            id: "e1c6cee5bcd60f5711a8a016",
            title: "2017 Personality 17:  Biology and Traits: Agreeableness",
            itemId: "G1eHJ9DdoEA",
            image: "https://i.ytimg.com/vi/G1eHJ9DdoEA/mqdefault.jpg",
          },
          {
            id: "263f9b65043031263943cdea",
            title:
              "2017 Personality 18: Biology & Traits: Openness/Intelligence/Creativity I",
            itemId: "D7Kn5p7TP_Y",
            image: "https://i.ytimg.com/vi/D7Kn5p7TP_Y/mqdefault.jpg",
          },
          {
            id: "9dca9698247ddab6ffa839a8",
            title:
              "2017 Personality 19: Biology & Traits: Openness/Intelligence/Creativity II",
            itemId: "fjtBDa4aSGM",
            image: "https://i.ytimg.com/vi/fjtBDa4aSGM/mqdefault.jpg",
          },
          {
            id: "aa7f2cf82f0b145eda2b5a2a",
            title:
              "2017 Personality 20: Biology & Traits: Orderliness/Disgust/Conscientiousness",
            itemId: "MBWyBdUYPgk",
            image: "https://i.ytimg.com/vi/MBWyBdUYPgk/mqdefault.jpg",
          },
          {
            id: "1a393046ed309a66b6a8c643",
            title:
              "2017 Personality 21: Biology & Traits: Performance Prediction",
            itemId: "Q7GKmznaqsQ",
            image: "https://i.ytimg.com/vi/Q7GKmznaqsQ/mqdefault.jpg",
          },
          {
            id: "015ab238af189b9c5459c9b0",
            title: "2017 Personality 22: Conclusion: Psychology and Belief",
            itemId: "J9j-bVDrGdI",
            image: "https://i.ytimg.com/vi/J9j-bVDrGdI/mqdefault.jpg",
          },
        ],
      },
      {
        id: "0.13975218361535113",
        title: "2016 Personality",
        children: [
          {
            id: "8aaf65f26abef6f90893a3cf",
            title:
              "2016 Personality Lecture 01: Introduction and Overview (Part 1)",
            itemId: "UGLsnu5RLe8",
            image: "https://i.ytimg.com/vi/UGLsnu5RLe8/mqdefault.jpg",
          },
          {
            id: "c5f735f53c09834311fb22e4",
            title:
              "2016 Personality Lecture 02: Introduction and Overview (Part 2)",
            itemId: "ajtnhtEg76k",
            image: "https://i.ytimg.com/vi/ajtnhtEg76k/mqdefault.jpg",
          },
          {
            id: "164bc16e888388fb0c95535c",
            title:
              "2016 Personality Lecture 03: Mythological Elements of the Life Story -- and Initiation",
            itemId: "PH67HpFD2Ew",
            image: "https://i.ytimg.com/vi/PH67HpFD2Ew/mqdefault.jpg",
          },
          {
            id: "9031252210f5c849bff409c4",
            title: "2016 Personality Lecture 04: Piaget Constructivism",
            itemId: "G3fWuMQ5K8I",
            image: "https://i.ytimg.com/vi/G3fWuMQ5K8I/mqdefault.jpg",
          },
          {
            id: "90e4fce7b9fc5c01695cf8fc",
            title: "2016 Personality Lecture 05: Piaget, Segueing into Jung",
            itemId: "IO6NvcGKZ20",
            image: "https://i.ytimg.com/vi/IO6NvcGKZ20/mqdefault.jpg",
          },
          {
            id: "ba809f51e9f6f821f4432b67",
            title: "2016 Personality Lecture 06: Freud: An Overview",
            itemId: "BSh37_x5RNY",
            image: "https://i.ytimg.com/vi/BSh37_x5RNY/mqdefault.jpg",
          },
          {
            id: "16bfb81d9c13964a9cb4ec8d",
            title: "2016 Personality Lecture 07: Phenomenology and Carl Rogers",
            itemId: "3uJkd54p9dY",
            image: "https://i.ytimg.com/vi/3uJkd54p9dY/mqdefault.jpg",
          },
          {
            id: "0ab20f18e960d774fe1dc078",
            title:
              "2016 Personality Lecture 08: Existentialism: Nietzsche, Dostoevsky and Social Hierarchy",
            itemId: "WjpV9mja3Wc",
            image: "https://i.ytimg.com/vi/WjpV9mja3Wc/mqdefault.jpg",
          },
          {
            id: "51ede838136df76ecee7c159",
            title:
              "2016 Personality Lecture 09: Phenomenology: Heidegger, Binswanger, Boss",
            itemId: "539UQF6eT6I",
            image: "https://i.ytimg.com/vi/539UQF6eT6I/mqdefault.jpg",
          },
          {
            id: "22bc2ab431904599211114e5",
            title: "2016 Personality Lecture 10: The Psychobiology of Traits",
            itemId: "f511uRzsHhQ",
            image: "https://i.ytimg.com/vi/f511uRzsHhQ/mqdefault.jpg",
          },
          {
            id: "e1697576edb7b64f1abe2a16",
            title:
              "2016 Personality Lecture 11: The Psychobiology of Traits, Continued",
            itemId: "RNxlEQSvh_w",
            image: "https://i.ytimg.com/vi/RNxlEQSvh_w/mqdefault.jpg",
          },
          {
            id: "be0ef6f6c3fa380730b3f27c",
            title:
              "2016 Personality Lecture 12: Conscientiousness: Industriousness and Orderliness",
            itemId: "q15eTySnWxc",
            image: "https://i.ytimg.com/vi/q15eTySnWxc/mqdefault.jpg",
          },
          {
            id: "5725dd9bb18276819e89864d",
            title: "2016 Personality Lecture 13: Openness and Intelligence",
            itemId: "qRFxulvRC7I",
            image: "https://i.ytimg.com/vi/qRFxulvRC7I/mqdefault.jpg",
          },
        ],
      },
      {
        id: "0.12601498636427722",
        title: "2015 Personality",
        children: [
          {
            id: "0f2a05d0a13f4d138c89cd3a",
            title: "2015 Personality Lecture 01: Introduction & Overview",
            itemId: "ZKpqpBRVr8Y",
            image: "https://i.ytimg.com/vi/ZKpqpBRVr8Y/mqdefault.jpg",
          },
          {
            id: "ed1b42e44e63ffcf1c038761",
            title:
              "2015 Personality Lecture 02: Historical Perspectives - Mythological Representations",
            itemId: "9fKZPRAPT1w",
            image: "https://i.ytimg.com/vi/9fKZPRAPT1w/mqdefault.jpg",
          },
          {
            id: "6d0bb816e8a75580395ed471",
            title:
              "2015 Personality Lecture 03: Historical Perspectives - Heroic & Shamanic Initiations I Mircea Eliade",
            itemId: "t966lVrHEzo",
            image: "https://i.ytimg.com/vi/t966lVrHEzo/mqdefault.jpg",
          },
          {
            id: "080098585843f02794463c73",
            title:
              "2015 Personality Lecture 04: Heroic & Shamanic Initiations II: Mircea Eliade",
            itemId: "UFAyBEKKIBE",
            image: "https://i.ytimg.com/vi/UFAyBEKKIBE/mqdefault.jpg",
          },
          {
            id: "3160d5398253d402158fca1f",
            title: "2015 Personality Lecture 05: Constructivism: Jean Piaget",
            itemId: "ED_TfmwjsEw",
            image: "https://i.ytimg.com/vi/ED_TfmwjsEw/mqdefault.jpg",
          },
          {
            id: "865f27001050610cf3dd393a",
            title:
              "2015 Personality Lecture 06: Depth Psychology: Carl Jung (Part 01)",
            itemId: "DC0faZiBcG0",
            image: "https://i.ytimg.com/vi/DC0faZiBcG0/mqdefault.jpg",
          },
          {
            id: "a4b05d71a60c3cde806b4dd3",
            title:
              "2015 Personality Lecture 07: Depth Psychology: Carl Jung (Part 02)",
            itemId: "CFHZyse4VGw",
            image: "https://i.ytimg.com/vi/CFHZyse4VGw/mqdefault.jpg",
          },
          {
            id: "15f74bb3fc415119b1e9f0c3",
            title:
              "2015 Personality Lecture 08: Depth Psychology: Sigmund Freud (Part 1)",
            itemId: "9Zji6xMkOgo",
            image: "https://i.ytimg.com/vi/9Zji6xMkOgo/mqdefault.jpg",
          },
          {
            id: "b4b727e9dfaa964a61f138d1",
            title:
              "2015 Personality Lecture 09: Depth Psychology: Sigmund Freud (Part 02)",
            itemId: "A07DV3FXyPo",
            image: "https://i.ytimg.com/vi/A07DV3FXyPo/mqdefault.jpg",
          },
          {
            id: "6e2885cdbeccaff9d3322e3b",
            title: "2015 Personality Lecture 10: Humanism: Carl Rogers",
            itemId: "V9Ql5V7-OQo",
            image: "https://i.ytimg.com/vi/V9Ql5V7-OQo/mqdefault.jpg",
          },
          {
            id: "e93f434de7fbde5ce7e4ba8d",
            title:
              "2015 Personality Lecture 12: Existentialism: Dostoevsky, Nietzsche, Kierkegaard",
            itemId: "SsoVhKo4UvQ",
            image: "https://i.ytimg.com/vi/SsoVhKo4UvQ/mqdefault.jpg",
          },
          {
            id: "c7f50beff0a18de7c65d383b",
            title:
              "2015 Personality Lecture 13: Existentialism: Nazi Germany and the USSR",
            itemId: "XY7a1RXMbHI",
            image: "https://i.ytimg.com/vi/XY7a1RXMbHI/mqdefault.jpg",
          },
          {
            id: "a81d988054b3e2e8e2cd0921",
            title:
              "2015 Personality Lecture 14:  Existentialism: Solzhenitsyn / Intro to Biology & Psychometrics",
            itemId: "wZnqLvLbLV0",
            image: "https://i.ytimg.com/vi/wZnqLvLbLV0/mqdefault.jpg",
          },
          {
            id: "9203654131b14a9cc6480312",
            title:
              "2015 Personality Lecture 15: Biology & Traits: Limbic System & Lower Order Goals",
            itemId: "RdNJTP6tYMs",
            image: "https://i.ytimg.com/vi/RdNJTP6tYMs/mqdefault.jpg",
          },
          {
            id: "775fb7e61f7f4ad9535e0381",
            title:
              "2015 Personality Lecture 16: Conscientiousness I - Industriousness & Disgust",
            itemId: "vt90JwDHh-Y",
            image: "https://i.ytimg.com/vi/vt90JwDHh-Y/mqdefault.jpg",
          },
          {
            id: "322c373a2fb9c5fbdb224535",
            title:
              "2015 Personality Lecture 17: Agreeableness - Aggression & Empathy",
            itemId: "UgRaLmCOwYU",
            image: "https://i.ytimg.com/vi/UgRaLmCOwYU/mqdefault.jpg",
          },
          {
            id: "244619d126e7b7f64aeb24c1",
            title:
              "2015 Personality Lecture 18: Openness - Creativity & Intelligence",
            itemId: "P6rm0LrO9vU",
            image: "https://i.ytimg.com/vi/P6rm0LrO9vU/mqdefault.jpg",
          },
          {
            id: "41f8380dcbaeb1128538b835",
            title:
              "2015 Personality Lecture 20: Conscientiousness - Industriousness, Orderliness & Disgust",
            itemId: "35e5i6FQuMw",
            image: "https://i.ytimg.com/vi/35e5i6FQuMw/mqdefault.jpg",
          },
          {
            id: "eb8c27a99f5e0de299f96f08",
            title: "2015 Personality Lecture 21: Performance Prediction",
            itemId: "5p5YEvi8CHQ",
            image: "https://i.ytimg.com/vi/5p5YEvi8CHQ/mqdefault.jpg",
          },
          {
            id: "3c453d8d34bb153703939659",
            title:
              "2015 Personality Lecture 22: Conclusion - Psychology and Belief",
            itemId: "0v3x0ev1URY",
            image: "https://i.ytimg.com/vi/0v3x0ev1URY/mqdefault.jpg",
          },
        ],
      },
      {
        id: "0.4154871413481739",
        title: "2014 Personality",
        children: [
          {
            id: "e3f5393103cd4798014a6f22",
            title: "2014 Personality Lecture 01: Introduction and Overview",
            itemId: "_0xBOMWJkgM",
            image: "https://i.ytimg.com/vi/_0xBOMWJkgM/mqdefault.jpg",
          },
          {
            id: "fc0982210828aba67b8a2ca1",
            title: "2014 Personality Lecture 02: Mythological Representations",
            itemId: "Owgc63KhcL8",
            image: "https://i.ytimg.com/vi/Owgc63KhcL8/mqdefault.jpg",
          },
          {
            id: "9b3b8d05f63b47d5760a6931",
            title:
              "2014 Personality Lecture 03: Heroic & Shamanic Initiations (Part 01)",
            itemId: "iEZVWWk6qHg",
            image: "https://i.ytimg.com/vi/iEZVWWk6qHg/mqdefault.jpg",
          },
          {
            id: "b9477d0ac0ee2c5b6dceecc6",
            title:
              "2014 Personality Lecture 04: Heroic & Shamanic Initiations (Part 02)",
            itemId: "F9393El2Z1I",
            image: "https://i.ytimg.com/vi/F9393El2Z1I/mqdefault.jpg",
          },
          {
            id: "ff97d2124de2a2e354915541",
            title: "2014 Personality Lecture 05: Jean Piaget (Constructivism)",
            itemId: "91jWsB7ZYHw",
            image: "https://i.ytimg.com/vi/91jWsB7ZYHw/mqdefault.jpg",
          },
          {
            id: "fd6d5738e037eddb06e269c5",
            title: "2014 Personality Lecture  06: Carl Jung (Part 1)",
            itemId: "8r8ISkQ4exM",
            image: "https://i.ytimg.com/vi/8r8ISkQ4exM/mqdefault.jpg",
          },
          {
            id: "89d61d02b9cc44db3e47d0c8",
            title:
              "2014 Personality Lecture 09: Sigmund Freud II (Depth Psychology)",
            itemId: "16WF1jLLyik",
            image: "https://i.ytimg.com/vi/16WF1jLLyik/mqdefault.jpg",
          },
          {
            id: "cdfca3ef9fa33f85cf072f57",
            title:
              "2014 Personality Lecture 10: Carl Rogers (Phenomenological Humanism)",
            itemId: "NUfvht7aJPQ",
            image: "https://i.ytimg.com/vi/NUfvht7aJPQ/mqdefault.jpg",
          },
          {
            id: "f2208601d9221190310d06b0",
            title:
              "2014 Personality Lecture 11: Existentialism:  Viktor Frankl",
            itemId: "zooE5GE81TU",
            image: "https://i.ytimg.com/vi/zooE5GE81TU/mqdefault.jpg",
          },
          {
            id: "376154159a962467f25de473",
            title:
              "2014 Personality Lecture  12: Binswanger & Boss (Phenomenology)",
            itemId: "UzdpzuEkL74",
            image: "https://i.ytimg.com/vi/UzdpzuEkL74/mqdefault.jpg",
          },
          {
            id: "97fc7fe6a03dd59cfc12b8ab",
            title:
              "2014 Personality Lecture 13: Aleksandr Solzhenitsyn (Existentialism)",
            itemId: "8u3aTURVEC8",
            image: "https://i.ytimg.com/vi/8u3aTURVEC8/mqdefault.jpg",
          },
          {
            id: "2c3b902d35d9d063ea7c89ce",
            title:
              "2014 Personality Lecture 14: Psychometrics (Biology and Traits)",
            itemId: "Om0YPe8c66Y",
            image: "https://i.ytimg.com/vi/Om0YPe8c66Y/mqdefault.jpg",
          },
          {
            id: "52a8d719de9235e18feca061",
            title:
              "2014 Personality Lecture 15: Limbic System & Goals (Biology and Traits)",
            itemId: "_Jh8w6IVFs8",
            image: "https://i.ytimg.com/vi/_Jh8w6IVFs8/mqdefault.jpg",
          },
          {
            id: "ac83bba2932e9c7963026428",
            title:
              "2014 Personality Lecture 16:  Extraversion & Neuroticism (Biology & Traits)",
            itemId: "dYTAv7eQ-vg",
            image: "https://i.ytimg.com/vi/dYTAv7eQ-vg/mqdefault.jpg",
          },
          {
            id: "4b76a8efc407783d6fe4b312",
            title:
              "2014 Personality Lecture 17: Agreeableness and gender differences",
            itemId: "yOJR-nEhNMk",
            image: "https://i.ytimg.com/vi/yOJR-nEhNMk/mqdefault.jpg",
          },
          {
            id: "72f35fed713bbdc92c50bde9",
            title:
              "2014 Personality Lecture 20: Conscientiousness (Biology & Traits)",
            itemId: "qH9-xsuPiUk",
            image: "https://i.ytimg.com/vi/qH9-xsuPiUk/mqdefault.jpg",
          },
          {
            id: "77e3e17772937b2837af5b64",
            title:
              "2014 Personality Lecture 21: Performance Prediction (Biology & Traits)",
            itemId: "hzMWpfHNYf0",
            image: "https://i.ytimg.com/vi/hzMWpfHNYf0/mqdefault.jpg",
          },
          {
            id: "98c3d0b43b097fe2bcb52a1f",
            title:
              "2014 Personality Lecture 22: Psychology & Belief (Conclusion)",
            itemId: "qalR6Vx3Bpw",
            image: "https://i.ytimg.com/vi/qalR6Vx3Bpw/mqdefault.jpg",
          },
        ],
      },
      {
        id: "0.04448319531378497",
        title: "New Stack",
        children: [
          {
            id: "379d07391a0aafc4edc36f42",
            title: "Jordan Peterson: What low-status highly creative men need",
            itemId: "FDsu7ldQRQc",
            image: "https://i.ytimg.com/vi/FDsu7ldQRQc/mqdefault.jpg",
          },
          {
            id: "b0181b3d91da687be2e84683",
            title:
              "Jordan Peterson - Are You Depressed? Or Low In The Dominance Hierarchy?",
            itemId: "vKXD8ZEwAmw",
            image: "https://i.ytimg.com/vi/vKXD8ZEwAmw/mqdefault.jpg",
          },
        ],
      },
      {
        id: "0.11504199125765646",
        title: "New Stack",
        children: [
          {
            id: "1623e5ac0e16c1c2b459cbf9",
            title:
              "Jordan Peterson Joe Rogan - Creative vs Non-Creative People",
            itemId: "ROf5GoOCMeE",
            image: "https://i.ytimg.com/vi/ROf5GoOCMeE/mqdefault.jpg",
          },
        ],
      },
    ],
  },
  {
    id: "loWqWd8mWuQhjzAYGPRM",
    title: "Ambient",
    children: [
      {
        id: "0.8745972691741144",
        title: "Psyhedelic muse",
        children: [
          {
            id: "ad5fd9c5a15592ac63a79f2a",
            title: "Ott - Skylon [Full Album]",
            itemId: "V4Iow4cWvP0",
            image: "https://i.ytimg.com/vi/V4Iow4cWvP0/mqdefault.jpg",
          },
          {
            id: "ec492872ec72b0ab8e18725e",
            title: "Stellardrone - Light Years [Full Album]",
            itemId: "NDJn0SQehb4",
            image: "https://i.ytimg.com/vi/NDJn0SQehb4/mqdefault.jpg",
          },
          {
            id: "d94ecfdb73828a871cc1153a",
            title: "Ascendant - Meridian [Full Album]",
            itemId: "mH3rO8ptYsE",
            image: "https://i.ytimg.com/vi/mH3rO8ptYsE/mqdefault.jpg",
          },
          {
            id: "fc398b862e6eaaedf1e61f28",
            title: "Carbon Based Lifeforms - Derelicts | Full Album",
            itemId: "5o_uF1L5l6o",
            image: "https://i.ytimg.com/vi/5o_uF1L5l6o/mqdefault.jpg",
          },
          {
            id: "853e850d574afe42deb7cc32",
            title: "Kaminanda - Gateways Of Consciousness | Full Album",
            itemId: "XhugAjgxfL8",
            image: "https://i.ytimg.com/vi/XhugAjgxfL8/mqdefault.jpg",
          },
          {
            id: "b866865dc1a0a60ac24be790",
            title: "Unusual Cosmic Process - Spacetime [Full Album]",
            itemId: "TFSvNxk_j1c",
            image: "https://i.ytimg.com/vi/TFSvNxk_j1c/mqdefault.jpg",
          },
          {
            id: "77835bf0564bddba5dba91a8",
            title: "Echo Season - Periphery [Full Album]",
            itemId: "gBBvpZ7pZa4",
            image: "https://i.ytimg.com/vi/gBBvpZ7pZa4/mqdefault.jpg",
          },
          {
            id: "4de9fcb86df81beda2372500",
            title: "Deleted video",
            itemId: "4SuPq_k6U2Q",
            image: "https://i.ytimg.com/vi/4SuPq_k6U2Q/mqdefault.jpg",
          },
          {
            id: "43cd64c02bfcb520cfbbd25a",
            title: "Organic Dreamers - The Timeless Machine [Full Album]",
            itemId: "On_DeZFpEbM",
            image: "https://i.ytimg.com/vi/On_DeZFpEbM/mqdefault.jpg",
          },
          {
            id: "9397f49747cab58ada9071eb",
            title: "Ascendant - Æthereal Code [Full Album]",
            itemId: "i62iysHSE4I",
            image: "https://i.ytimg.com/vi/i62iysHSE4I/mqdefault.jpg",
          },
          {
            id: "0575be7f4027ff044ea9fc7a",
            title: "Nibana - Ask The Universe [Full Mixed Album]",
            itemId: "xVBrvw7Up_8",
            image: "https://i.ytimg.com/vi/xVBrvw7Up_8/mqdefault.jpg",
          },
          {
            id: "858dd2546ffb1709a1dcdb91",
            title: "Man Of No Ego - Blinkers Removed [Full Album]",
            itemId: "WzoG16FOyA8",
            image: "https://i.ytimg.com/vi/WzoG16FOyA8/mqdefault.jpg",
          },
          {
            id: "a72bb8c517ee2f7323ac0990",
            title: "Atmoswaves - Distant Horizons [Full Album]",
            itemId: "yqNVkdbqmFY",
            image: "https://i.ytimg.com/vi/yqNVkdbqmFY/mqdefault.jpg",
          },
          {
            id: "a8117869a786b7c0b7c767ac",
            title: "Solar Fields - Until We Meet The Sky [Full Album]",
            itemId: "_0n5MTS4DA8",
            image: "https://i.ytimg.com/vi/_0n5MTS4DA8/mqdefault.jpg",
          },
          {
            id: "24a32c236a07d737ff037297",
            title: "Marconi Union - Weightless (Official Video)",
            itemId: "UfcAVejslrU",
            image: "https://i.ytimg.com/vi/UfcAVejslrU/mqdefault.jpg",
          },
          {
            id: "2974e06e54cc1899e709cb5e",
            title:
              "Carbon Based Lifeforms - Hydroponic Garden (2015 24-bit Remaster) | Full Album",
            itemId: "5AAbrmLOV8k",
            image: "https://i.ytimg.com/vi/5AAbrmLOV8k/mqdefault.jpg",
          },
          {
            id: "7ecdfaba299331c35fd9630c",
            title:
              "Carbon Based Lifeforms - World Of Sleepers (24-bit 2015 Remaster) [Full Album]",
            itemId: "QH_liqx0fuI",
            image: "https://i.ytimg.com/vi/QH_liqx0fuI/mqdefault.jpg",
          },
          {
            id: "a50689eeece9f2316a1ad023",
            title: "Carbon Based Lifeforms - Twentythree [Full Album]",
            itemId: "SwsbOBlC-G0",
            image: "https://i.ytimg.com/vi/SwsbOBlC-G0/mqdefault.jpg",
          },
          {
            id: "64ee92fe48c092137955be78",
            title: "Carbon Based Lifeforms - VLA [Full Album]",
            itemId: "ckNPGa1HEyU",
            image: "https://i.ytimg.com/vi/ckNPGa1HEyU/mqdefault.jpg",
          },
          {
            id: "13f904c60366058c8f605d3a",
            title: "Carbon Based Lifeforms (aka Notch) - The Path [Full Album]",
            itemId: "EJZ-qTli7zo",
            image: "https://i.ytimg.com/vi/EJZ-qTli7zo/mqdefault.jpg",
          },
          {
            id: "8a4608d62f00c8449725f781",
            title: "Carbon Based Lifeforms - ALT:01 [Full Album]",
            itemId: "X6YvPGCyAdg",
            image: "https://i.ytimg.com/vi/X6YvPGCyAdg/mqdefault.jpg",
          },
          {
            id: "f9acfd2e3a42719ab0d0cb7e",
            title: "Carbon Based Lifeforms - Maximum Space Mix",
            itemId: "pH8XNr9TdOs",
            image: "https://i.ytimg.com/vi/pH8XNr9TdOs/mqdefault.jpg",
          },
          {
            id: "5ae11aedc1abffdbfe34a806",
            title: "Stellardrone - A Moment Of Stillness [HD] [Full EP]",
            itemId: "HOZcCFsnLzs",
            image: "https://i.ytimg.com/vi/HOZcCFsnLzs/mqdefault.jpg",
          },
          {
            id: "264849b674f36dd6cc9f5ce2",
            title: "Deleted video",
            itemId: "7gNFw1JxQbE",
            image: "https://i.ytimg.com/vi/7gNFw1JxQbE/mqdefault.jpg",
          },
          {
            id: "8fc2cb48e93c089cd65e1444",
            title: "Stellardrone - On A Beam Of Light | Full Album",
            itemId: "WXRpnt_H6FI",
            image: "https://i.ytimg.com/vi/WXRpnt_H6FI/mqdefault.jpg",
          },
        ],
      },
      {
        id: "0.25889284908018684",
        title: "Aes Dana - Leylines",
        children: [
          {
            id: "8c426e95effa71f355ff9f21",
            title: "AES DANA - Leylines - 01 Alignments",
            itemId: "4TBSl-cDYlo",
            image: "https://i.ytimg.com/vi/4TBSl-cDYlo/mqdefault.jpg",
          },
          {
            id: "39973ff9f75dc9bd603aac48",
            title: "AES DANA - Leylines - 02 Bam",
            itemId: "7FB1VPMe8uw",
            image: "https://i.ytimg.com/vi/7FB1VPMe8uw/mqdefault.jpg",
          },
          {
            id: "900299cbff862208a44ee82c",
            title: "AES DANA - Leylines - 03 Oxyd",
            itemId: "x7QlY0NT3ho",
            image: "https://i.ytimg.com/vi/x7QlY0NT3ho/mqdefault.jpg",
          },
          {
            id: "0eb774ddbb70125dbda3cc1c",
            title: "AES DANA - Leylines - 04 Heights",
            itemId: "KXWYCzPlzVk",
            image: "https://i.ytimg.com/vi/KXWYCzPlzVk/mqdefault.jpg",
          },
          {
            id: "4d4c0efe776b593024c53082",
            title: "AES DANA - Leylines - 05 Adonaï (edit)",
            itemId: "scohc15HMF0",
            image: "https://i.ytimg.com/vi/scohc15HMF0/mqdefault.jpg",
          },
          {
            id: "40e75dfbea405cf4485093b2",
            title: "AES DANA - Leylines - 06 Leylines",
            itemId: "EXC8WMQ-1hg",
            image: "https://i.ytimg.com/vi/EXC8WMQ-1hg/mqdefault.jpg",
          },
          {
            id: "72ed7a9df09ad0a2cb6cc45e",
            title: "AES DANA - Leylines - 07 Lysistrata",
            itemId: "ikgY_hvG7dM",
            image: "https://i.ytimg.com/vi/ikgY_hvG7dM/mqdefault.jpg",
          },
          {
            id: "147fcb47b24337a2560e5546",
            title: "AES DANA - Leylines - 08 Signs",
            itemId: "4Xgz4HCUv_w",
            image: "https://i.ytimg.com/vi/4Xgz4HCUv_w/mqdefault.jpg",
          },
          {
            id: "1bc233e353a333b2dfb4539b",
            title: "AES DANA - Leylines - 09 Inter",
            itemId: "jV69Gl4tC_w",
            image: "https://i.ytimg.com/vi/jV69Gl4tC_w/mqdefault.jpg",
          },
          {
            id: "469446615e81bfaf9698f93e",
            title: "AES DANA - Leylines - 10 Blossom",
            itemId: "yG7JN1GWauM",
            image: "https://i.ytimg.com/vi/yG7JN1GWauM/mqdefault.jpg",
          },
        ],
      },
      {
        id: "0.290153089870837",
        title: "Cell - Phonic Peace",
        children: [
          {
            id: "71baca27888f0fd9cb5ba6b7",
            title: "Cell - Phonic Peace - Orange",
            itemId: "s2i1J6Tj5TM",
            image: "https://i.ytimg.com/vi/s2i1J6Tj5TM/mqdefault.jpg",
          },
          {
            id: "81702e2b223958fd8a90ecc3",
            title: "Cell - Magic Karma",
            itemId: "Tgbs66_nIBM",
            image: "https://i.ytimg.com/vi/Tgbs66_nIBM/mqdefault.jpg",
          },
          {
            id: "c1af5432c647b70f0bc04a5b",
            title: "Cell - White Call",
            itemId: "ScV5PbNnAQQ",
            image: "https://i.ytimg.com/vi/ScV5PbNnAQQ/mqdefault.jpg",
          },
          {
            id: "c85cfddbc59393c8b14282e7",
            title: "Cell -  Phonic Peace for Tibet",
            itemId: "Vu-e-0JZvx4",
            image: "https://i.ytimg.com/vi/Vu-e-0JZvx4/mqdefault.jpg",
          },
          {
            id: "f8234faf1db8b8e9f3e405a6",
            title: "Soon - Cell (Phonic Peace)",
            itemId: "RkdAxONf0B0",
            image: "https://i.ytimg.com/vi/RkdAxONf0B0/mqdefault.jpg",
          },
          {
            id: "401f96ec67ca5fc8fd313e92",
            title: "cell - zaz",
            itemId: "XZZTZP-TyUU",
            image: "https://i.ytimg.com/vi/XZZTZP-TyUU/mqdefault.jpg",
          },
        ],
      },
      {
        id: "0.7239814899256926",
        title: "Farenheit Project",
        children: [
          {
            id: "1eb40e9f73036d11b9b17d09",
            title: "Fahrenheit Project Part One [Full Compilation]",
            itemId: "F1Er1aqZ4l8",
            image: "https://i.ytimg.com/vi/F1Er1aqZ4l8/mqdefault.jpg",
          },
          {
            id: "9bf47446adb7be0f0a5da4f2",
            title: "Fahrenheit Project Part Two [Full Compilation]",
            itemId: "lacDpceV7gs",
            image: "https://i.ytimg.com/vi/lacDpceV7gs/mqdefault.jpg",
          },
          {
            id: "37f3ddb20fc3516293e685e0",
            title: "Fahrenheit Project Part Three [Full Compilation]",
            itemId: "A84MqWqiccc",
            image: "https://i.ytimg.com/vi/A84MqWqiccc/mqdefault.jpg",
          },
          {
            id: "5e0f4036a0dbd906ec268250",
            title: "Fahrenheit Project Part Four [Full Compilation]",
            itemId: "2W2fOf_HjBc",
            image: "https://i.ytimg.com/vi/2W2fOf_HjBc/mqdefault.jpg",
          },
          {
            id: "c078ca1944154f8e82184491",
            title: "Fahrenheit Project Part Five [Full Compilation]",
            itemId: "tZlEGj2i9ww",
            image: "https://i.ytimg.com/vi/tZlEGj2i9ww/mqdefault.jpg",
          },
          {
            id: "dffe7bc7b6e2692ccb8464a6",
            title: "Fahrenheit Project Part Six [Full Compilation]",
            itemId: "nMJn2A8PDQA",
            image: "https://i.ytimg.com/vi/nMJn2A8PDQA/mqdefault.jpg",
          },
          {
            id: "c06925462af96fd75dd880d6",
            title: "Fahrenheit Project Part Seven [Full Compilation]",
            itemId: "rgGvQ54ZMUE",
            image: "https://i.ytimg.com/vi/rgGvQ54ZMUE/mqdefault.jpg",
          },
        ],
      },
      {
        id: "STACK_1",
        title: "Carbon based lifeforms",
        children: [
          {
            id: "ce172f79c8da70a274b61500",
            title:
              "Carbon Based Lifeforms - Hydroponic Garden [Full Reissued Album]",
            itemId: "00CbHeQ1k5I",
            image: "https://i.ytimg.com/vi/00CbHeQ1k5I/mqdefault.jpg",
          },
          {
            id: "a6e7092d0e55459ac9d6ab3e",
            title: "Carbon Based Lifeforms - Derelicts | Full Album",
            itemId: "5o_uF1L5l6o",
            image: "https://i.ytimg.com/vi/5o_uF1L5l6o/mqdefault.jpg",
          },
          {
            id: "ebccfaf8af27dc00781b405d",
            title:
              "Carbon Based Lifeforms - Hydroponic Garden (2015 24-bit Remaster) | Full Album",
            itemId: "5AAbrmLOV8k",
            image: "https://i.ytimg.com/vi/5AAbrmLOV8k/mqdefault.jpg",
          },
          {
            id: "0f286d1d3c8d569cb6dfa8fc",
            title:
              "Carbon Based Lifeforms - World Of Sleepers (24-bit 2015 Remaster) [Full Album]",
            itemId: "QH_liqx0fuI",
            image: "https://i.ytimg.com/vi/QH_liqx0fuI/mqdefault.jpg",
          },
          {
            id: "96db0b3cd01220f4897de7bd",
            title: "Carbon Based Lifeforms - World Of Sleepers | Full Album",
            itemId: "KQE29az48gM",
            image: "https://i.ytimg.com/vi/KQE29az48gM/mqdefault.jpg",
          },
          {
            id: "f8aa045b892eba3bad09b6fc",
            title:
              "CARBON BASED LIFEFORMS - [ Twentythree ] REISSUE 2015 full album",
            itemId: "b4YnGgQ46YA",
            image: "https://i.ytimg.com/vi/b4YnGgQ46YA/mqdefault.jpg",
          },
          {
            id: "7e41290ae1510cf5ba3146bc",
            title: "Carbon Based Lifeforms Mix (2019)",
            itemId: "iphfKWd3cLs",
            image: "https://i.ytimg.com/vi/iphfKWd3cLs/mqdefault.jpg",
          },
          {
            id: "5f05377bbce02cebce944b79",
            title: "Carbon Based Lifeforms - Twentythree [Full Album]",
            itemId: "SwsbOBlC-G0",
            image: "https://i.ytimg.com/vi/SwsbOBlC-G0/mqdefault.jpg",
          },
          {
            id: "8fb572933b059039fcfe9b60",
            title:
              "Carbon Based Lifeforms 5 hours mix ambient chillout electronic",
            itemId: "aKTlGo7QyK0",
            image: "https://i.ytimg.com/vi/aKTlGo7QyK0/mqdefault.jpg",
          },
        ],
      },
      {
        id: "0.8996486501275133",
        title: "Asura",
        children: [
          {
            id: "6a586fe8a106293a37edfa1f",
            title: "Asura - Code Eternity [Full Album]",
            itemId: "W9U0j2fU2Bc",
            image: "https://i.ytimg.com/vi/W9U0j2fU2Bc/mqdefault.jpg",
          },
          {
            id: "5a3ef9bd60531f0a8bfabb5a",
            title: "Solar Fields - Movements | Full Album",
            itemId: "yQjove0nzss",
            image: "https://i.ytimg.com/vi/yQjove0nzss/mqdefault.jpg",
          },
          {
            id: "43b026ca4330a47af2a464ee",
            title: "Asura - Totem (High Quality)",
            itemId: "vJ4H8VZfDv4",
            image: "https://i.ytimg.com/vi/vJ4H8VZfDv4/mqdefault.jpg",
          },
          {
            id: "990790400bf27680e3779695",
            title: "Asura Life²",
            itemId: "vuGVXiPMoDs",
            image: "https://i.ytimg.com/vi/vuGVXiPMoDs/mqdefault.jpg",
          },
          {
            id: "fd496adbb88dcbcfcf3afc9b",
            title: "Asura [Radio Universe] Full Album",
            itemId: "E49VMWHh25M",
            image: "https://i.ytimg.com/vi/E49VMWHh25M/mqdefault.jpg",
          },
          {
            id: "c720a6825d940292912d19c6",
            title: 'ASURA "Atmosphere" (Full Album) [Altar Records]',
            itemId: "Wl8YSTpmTqA",
            image: "https://i.ytimg.com/vi/Wl8YSTpmTqA/mqdefault.jpg",
          },
          {
            id: "3784e71de0ad3cb60eb3e7d0",
            title: "Asura 360",
            itemId: "Z-fP7W-ekzo",
            image: "https://i.ytimg.com/vi/Z-fP7W-ekzo/mqdefault.jpg",
          },
          {
            id: "ce071b35323ee67540e1cebc",
            title: "Asura - Lost Eden (Full Album)",
            itemId: "f2SWilieKiI",
            image: "https://i.ytimg.com/vi/f2SWilieKiI/mqdefault.jpg",
          },
          {
            id: "2fc18dc6e5ccc39f713bb237",
            title:
              "Programming / Coding / Hacking music vol.16 (CONNECTION LOST)",
            itemId: "l9nh1l8ZIJQ",
            image: "https://i.ytimg.com/vi/l9nh1l8ZIJQ/mqdefault.jpg",
          },
          {
            id: "6d80ad25345bd2b054222208",
            title: "Stellardrone - Comet Halley - 1 Hour Remix",
            itemId: "LRV-g2hYAR8",
            image: "https://i.ytimg.com/vi/LRV-g2hYAR8/mqdefault.jpg",
          },
          {
            id: "af6b06cfb0611f4a5a5dcb15",
            title: "Stellardrone - Light Years [Full Album]",
            itemId: "NDJn0SQehb4",
            image: "https://i.ytimg.com/vi/NDJn0SQehb4/mqdefault.jpg",
          },
          {
            id: "74e537812e4a2cb57dcde352",
            title: "Concentration  Programming Music",
            itemId: "0r6C3z3TEKw",
            image: "https://i.ytimg.com/vi/0r6C3z3TEKw/mqdefault.jpg",
          },
          {
            id: "1f0213a87fa1270a126e6559",
            title:
              "Programming / Coding / Hacking music vol.18 (ANONYMOUS HEADQUARTERS)",
            itemId: "Z-VfaG9ZN_U",
            image: "https://i.ytimg.com/vi/Z-VfaG9ZN_U/mqdefault.jpg",
          },
          {
            id: "af9fc9731b4bfd98c19abce8",
            title: "Concentration Music for Programming \\ Gamedev",
            itemId: "2H1Gho3LOUE",
            image: "https://i.ytimg.com/vi/2H1Gho3LOUE/mqdefault.jpg",
          },
          {
            id: "fb4f84d1d5f5034991179e94",
            title: "VA - Ambrosia - 08 V.A.N.T.A. by ASURA",
            itemId: "-16Uv1cfxDg",
            image: "https://i.ytimg.com/vi/-16Uv1cfxDg/mqdefault.jpg",
          },
          {
            id: "9d907e3113cfbaea9c9f0c71",
            title: "Solar Fields - Until We Meet The Sky [Full Album]",
            itemId: "_0n5MTS4DA8",
            image: "https://i.ytimg.com/vi/_0n5MTS4DA8/mqdefault.jpg",
          },
          {
            id: "a88952e0d8e46569eff3cf81",
            title: "Solar Fields - Leaving Home [Full Album]",
            itemId: "u5mNIE44evU",
            image: "https://i.ytimg.com/vi/u5mNIE44evU/mqdefault.jpg",
          },
        ],
      },
      {
        id: "0.5456601511480089",
        title: "James Murray",
        children: [
          {
            id: "cef4d408b421f0985bac9999",
            title:
              "Carbon Based Lifeforms - Interloper [Full Album - 2015 Remaster]",
            itemId: "-9pgIVcB3rk",
            image: "https://i.ytimg.com/vi/-9pgIVcB3rk/mqdefault.jpg",
          },
          {
            id: "6a602bdfdee4cb77044b9ed8",
            title: "James Murray - Eyes To The Height [Full Album]",
            itemId: "GPrKgJm9yOQ",
            image: "https://i.ytimg.com/vi/GPrKgJm9yOQ/mqdefault.jpg",
          },
          {
            id: "b033eb8327d967a351251370",
            title: "James Murray - Ghostwalk [Full EP]",
            itemId: "qX7jNRxFg34",
            image: "https://i.ytimg.com/vi/qX7jNRxFg34/mqdefault.jpg",
          },
          {
            id: "7c59f44451bcb59563068e14",
            title: "Asura 360",
            itemId: "Z-fP7W-ekzo",
            image: "https://i.ytimg.com/vi/Z-fP7W-ekzo/mqdefault.jpg",
          },
          {
            id: "9862da753f51583a47b98b0e",
            title: "James Murray - Awayward . HQ",
            itemId: "L3HtpCl9-A4",
            image: "https://i.ytimg.com/vi/L3HtpCl9-A4/mqdefault.jpg",
          },
          {
            id: "b31dc658a6d1973569438761",
            title: "JAMES MURRAY - [ Ghostwalk ] 2016 full album",
            itemId: "8tldUexxAFU",
            image: "https://i.ytimg.com/vi/8tldUexxAFU/mqdefault.jpg",
          },
        ],
      },
      {
        id: "0.27023298312099975",
        title: "Sync24",
        children: [
          {
            id: "4ba60052a42363e219257818",
            title: "Solar Fields - Random Friday [Full Album]",
            itemId: "Hss0f3Hgs90",
            image: "https://i.ytimg.com/vi/Hss0f3Hgs90/mqdefault.jpg",
          },
          {
            id: "dc2112fcac96d8de040320f0",
            title: "Sync24 - Comfortable Void [Full Album]",
            itemId: "5z6IKnYXqFM",
            image: "https://i.ytimg.com/vi/5z6IKnYXqFM/mqdefault.jpg",
          },
          {
            id: "551b30dfe8eab5efea5e7741",
            title: "Sync24 - Omnious [Full Album]",
            itemId: "8ONz3_vjJIY",
            image: "https://i.ytimg.com/vi/8ONz3_vjJIY/mqdefault.jpg",
          },
          {
            id: "7f4497fe845d0f1792108a24",
            title: "Sync24 - Source [Full Album]",
            itemId: "o-dHihdlJq0",
            image: "https://i.ytimg.com/vi/o-dHihdlJq0/mqdefault.jpg",
          },
          {
            id: "a7ba0e926aa27fd9a6817d98",
            title: "Sync24 - Ambient Archive [1996​-​2002] [Full Album]",
            itemId: "gOi3FQ0R5fM",
            image: "https://i.ytimg.com/vi/gOi3FQ0R5fM/mqdefault.jpg",
          },
          {
            id: "9d73665654b63021f7b671ad",
            title: "SYNC24 - Dance of the Droids [Music Video]",
            itemId: "joI6Dg1uNBY",
            image: "https://i.ytimg.com/vi/joI6Dg1uNBY/mqdefault.jpg",
          },
          {
            id: "55e06222221698a7778f0f7c",
            title: "Sync 24 - Source",
            itemId: "QZmIN2XyuMM",
            image: "https://i.ytimg.com/vi/QZmIN2XyuMM/mqdefault.jpg",
          },
        ],
      },
      {
        id: "0.4162856142790142",
        title: "Aes Dana",
        children: [
          {
            id: "23eedfb8e90759400dec06f4",
            title: "Connect.Ohm - 9980 (2018 Remaster) [Full Album]",
            itemId: "t8-QBWBnGmk",
            image: "https://i.ytimg.com/vi/t8-QBWBnGmk/mqdefault.jpg",
          },
          {
            id: "e0e18bf63bb1d9da63c06cf6",
            title: "Leylines Aes Dana",
            itemId: "3GhBbuBUG3Q",
            image: "https://i.ytimg.com/vi/3GhBbuBUG3Q/mqdefault.jpg",
          },
          {
            id: "d7eae1e54e1328a96d90d711",
            title: "AES DANA - [Perimeters] full album",
            itemId: "bduT7n6nZRM",
            image: "https://i.ytimg.com/vi/bduT7n6nZRM/mqdefault.jpg",
          },
          {
            id: "fb4927904dc7680709fd7d40",
            title: "Aes Dana - Manifold [Full Album]",
            itemId: "HVL9X_yu_dg",
            image: "https://i.ytimg.com/vi/HVL9X_yu_dg/mqdefault.jpg",
          },
        ],
      },
      {
        id: "0.9850503200356833",
        title: "Piano",
        children: [
          {
            id: "37660d5cf27eed0184512c18",
            title:
              "Relaxing Ambient Piano Music - Chill-Out Dream Mix - Music for Sleep, Study, Relax",
            itemId: "sUiB2EPR9-A",
            image: "https://i.ytimg.com/vi/sUiB2EPR9-A/mqdefault.jpg",
          },
        ],
      },
    ],
  },
];
export const items1: NodesContainer = {};

const mapChild = (item: any) => {
  if (item.children) {
    item.children.forEach(mapChild);
  }
  items1[item.id] = {
    ...item,
    children: item.children ? item.children.map((i: any) => i.id) : [],
  };
};
itemsArray.forEach(mapChild);

items1["HOME"] = {
  id: "HOME",
  itemType: "folder",
  title: "Home",
  children: itemsArray.map((i) => i.id),
};
items1["SEARCH"] = {
  id: "SEARCH",
  itemType: "folder",
  title: "SEARCH",
  children: [],
};

export const initialState: RootState = {
  items: items1,
  itemIdBeingPlayed: undefined,
  searchTerm: "",
  options: {
    isSearchVisible: false,
  },
  dropDestinationPlaceholder: undefined,
  itemFocused: "HOME",
  dragState: {
    type: "not_pressed",
  },
};
