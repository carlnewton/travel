class Locations
{
    constructor()
    {
        this.list = [
            {
                "name": "Desborough",
                "country": "United Kingdom",
                "stay": true,
                "visited": false,
                "coordinates": {
                    "lat": 52.442578,
                    "lng": -0.822131
                },
                "date": "2022-09-14"
            },
            {
                "name": "Birmingham",
                "country": "United Kingdom",
                "stay": false,
                "visited": false,
                "coordinates": {
                    "lat": 52.452804,
                    "lng": -1.743625
                },
                "date": "2022-09-14"
            },
            {
                "name": "Dubai",
                "country": "United Arab Emirates",
                "stay": false,
                "visited": false,
                "coordinates": {
                    "lat": 25.253252,
                    "lng": 55.365629,
                },
                "date": "2022-09-14"
            },
            {
                "name": "Bangkok",
                "country": "Thailand",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 13.690238,
                    "lng": 100.750123
                },
                "date": "2022-09-15",
            },
            {
                "name": "Chiang Mai",
                "country": "Thailand",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 18.798743,
                    "lng": 98.984619
                },
                "date": "2022-09-22"
            },
            {
                "name": "Pai",
                "country": "Thailand",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 19.361766,
                    "lng": 98.431362
                },
                "date": "2022-09-28"
            },
            {
                "name": "Chiang Mai",
                "country": "Thailand",
                "stay": true,
                "visited": true,
                "hideLine": true,
                "coordinates": {
                    "lat": 18.798743,
                    "lng": 98.984619
                },
                "date": "2022-10-11"
            },
            {
                "name": "Bangkok",
                "country": "Thailand",
                "stay": true,
                "visited": true,
                "hideLine": true,
                "coordinates": {
                    "lat": 13.690238,
                    "lng": 100.750123
                },
                "date": "2022-10-12",
            },
            {
                "name": "Vientiane",
                "country": "Laos",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 17.986967,
                    "lng": 102.567794
                },
                "date": "2022-10-13",
            },
            {
                "name": "Vang Vieng",
                "country": "Laos",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 18.947304,
                    "lng": 102.447513
                },
                "date": "2022-10-20",
            },
            {
                "name": "Luang Prabang",
                "country": "Laos",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 19.884847,
                    "lng": 102.137962
                },
                "date": "2022-10-27",
            },
            {
                "name": "Hanoi",
                "country": "Vietnam",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 21.027463,
                    "lng": 105.700739
                },
                "date": "2022-11-09",
            },
            {
                "name": "Sa Pa",
                "country": "Vietnam",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 22.357358,
                    "lng": 103.821707
                },
                "date": "2022-11-13",
            },
            {
                "name": "Ha Long",
                "country": "Vietnam",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 20.971314,
                    "lng": 107.044734
                },
                "date": "2022-11-18",
            },
            {
                "name": "Hanoi",
                "country": "Vietnam",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 21.027463,
                    "lng": 105.700739
                },
                "date": "2022-11-22",
            },
            {
                "name": "Phú Quốc",
                "country": "Vietnam",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 10.299451,
                    "lng": 103.984889
                },
                "date": "2022-11-23",
            },
            {
                "name": "Ho Chi Minh City",
                "country": "Vietnam",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 10.833258,
                    "lng": 106.630088
                },
                "date": "2022-12-03",
            },
            {
                "name": "Phnom Penh",
                "country": "Cambodia",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 11.582391,
                    "lng": 104.858257
                },
                "date": "2022-12-07",
            },
            {
                "name": "Siem Reap",
                "country": "Cambodia",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 13.366145,
                    "lng": 103.837100
                },
                "date": "2022-12-10",
            },
            {
                "name": "Kuala Lumpur",
                "country": "Malaysia",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 3.149072,
                    "lng": 101.689837
                },
                "date": "2022-12-17",
            },
            {
                "name": "Phuket",
                "country": "Thailand",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 7.882328,
                    "lng":  98.392311
                },
                "date": "2022-12-27",
            },
            {
                "name": "Ko Yao Noi",
                "country": "Thailand",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 8.122405,
                    "lng":  98.606299
                },
                "date": "2023-01-02",
            },
            {
                "name": "Ao Nang",
                "country": "Thailand",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 8.030061,
                    "lng":  98.823828
                },
                "date": "2023-01-07",
            },
            {
                "name": "Koh Samui",
                "country": "Thailand",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 9.513446,
                    "lng":  100.016862
                },
                "date": "2023-01-13",
            },
            {
                "name": "Bangkok",
                "country": "Thailand",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 13.690238,
                    "lng": 100.750123
                },
                "date": "2023-01-27",
            },
            {
                "name": "Osaka",
                "country": "Japan",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 34.691976,
                    "lng": 135.503544
                },
                "date": "2023-01-29",
            },
            {
                "name": "Kyoto",
                "country": "Japan",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 35.001510,
                    "lng": 135.749081
                },
                "date": "2023-02-05",
            },
            {
                "name": "Tokyo",
                "country": "Japan",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 35.691044,
                    "lng": 139.769722
                },
                "date": "2023-02-12",
            },
            {
                "name": "Sydney",
                "country": "Australia",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": -33.868797,
                    "lng": 151.208218
                },
                "date": "2023-02-24",
            },
            {
                "name": "Katoomba",
                "country": "Australia",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": -33.712851,
                    "lng": 150.310566
                },
                "date": "2023-03-01",
            },
            {
                "name": "Sydney",
                "country": "Australia",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": -33.868797,
                    "lng": 151.208218
                },
                "date": "2023-03-04",
            },
            {
                "name": "Melbourne",
                "country": "Australia",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": -37.809668,
                    "lng": 144.965217
                },
                "date": "2023-03-05",
            },
            {
                "name": "Geelong",
                "country": "Australia",
                "stay": false,
                "visited": true,
                "coordinates": {
                    "lat": -38.147683,
                    "lng": 144.352822
                },
                "date": "2023-03-09",
            },
            {
                "name": "Davenport",
                "country": "Australia",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": -41.179704,
                    "lng": 146.347846
                },
                "date": "2023-03-09",
            },
            {
                "name": "Somerset",
                "country": "Australia",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": -41.041021,
                    "lng": 145.831793
                },
                "date": "2023-03-10",
            },
            {
                "name": "Queenstown",
                "country": "Australia",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": -42.081105,
                    "lng": 145.551825
                },
                "date": "2023-03-12",
            },
            {
                "name": "Hobart",
                "country": "Australia",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": -42.880467,
                    "lng": 147.328882
                },
                "date": "2023-03-14",
            },
            {
                "name": "Launceston",
                "country": "Australia",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": -41.433188,
                    "lng": 147.142942
                },
                "date": "2023-03-17",
            },
            {
                "name": "Davenport",
                "country": "Australia",
                "stay": false,
                "visited": true,
                "coordinates": {
                    "lat": -41.179704,
                    "lng": 146.347846
                },
                "date": "2023-03-21",
            },
            {
                "name": "Geelong",
                "country": "Australia",
                "stay": false,
                "visited": true,
                "coordinates": {
                    "lat": -38.147683,
                    "lng": 144.352822
                },
                "date": "2023-03-21",
            },
            {
                "name": "Melbourne",
                "country": "Australia",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": -37.809668,
                    "lng": 144.965217
                },
                "date": "2023-03-21",
            },
            {
                "name": "Apollo Bay",
                "country": "Australia",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": -38.755503,
                    "lng": 143.668192
                },
                "date": "2023-03-24",
            },
            {
                "name": "Warrnambool",
                "country": "Australia",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": -38.372590,
                    "lng": 142.478659
                },
                "date": "2023-03-25",
            },
            {
                "name": "Stawell",
                "country": "Australia",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": -37.055942,
                    "lng": 142.773454
                },
                "date": "2023-03-26",
            },
            {
                "name": "Melbourne",
                "country": "Australia",
                "stay": false,
                "visited": true,
                "coordinates": {
                    "lat": -37.809668,
                    "lng": 144.965217
                },
                "date": "2023-03-28",
            },
            {
                "name": "Adelaide",
                "country": "Australia",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": -34.927051,
                    "lng": 138.602233
                },
                "date": "2023-03-28",
            },
            {
                "name": "Alice Springs",
                "country": "Australia",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": -23.697860,
                    "lng": 133.880666
                },
                "date": "2023-04-01",
            },
            {
                "name": "Darwin",
                "country": "Australia",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": -12.432270,
                    "lng": 130.917687
                },
                "date": "2023-04-07",
            },
            {
                "name": "Cairns",
                "country": "Australia",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": -16.893619,
                    "lng": 145.732039
                },
                "date": "2023-04-11",
            },
            {
                "name": "Brisbane",
                "country": "Australia",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": -27.495211,
                    "lng": 153.049461
                },
                "date": "2023-04-15",
            },
            {
                "name": "Mooloolaba",
                "country": "Australia",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": -26.681836,
                    "lng": 153.120533
                },
                "date": "2023-04-20",
            },
            {
                "name": "Sydney",
                "country": "Australia",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": -33.868797,
                    "lng": 151.208218
                },
                "date": "2023-04-26",
            },
            {
                "name": "Auckland",
                "country": "New Zealand",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": -36.851790,
                    "lng": 174.764450
                },
                "date": "2023-04-27",
            },
            {
                "name": "Rotorua",
                "country": "New Zealand",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": -38.132972,
                    "lng": 176.255513
                },
                "date": "2023-05-01",
            },
            {
                "name": "Otorohanga",
                "country": "New Zealand",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": -38.182491,
                    "lng": 175.214997
                },
                "date": "2023-05-06",
            },
            {
                "name": "New Plymouth",
                "country": "New Zealand",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": -39.042809,
                    "lng": 174.111826
                },
                "date": "2023-05-08",
            },
            {
                "name": "Napier",
                "country": "New Zealand",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": -39.510526,
                    "lng": 176.879696
                },
                "date": "2023-05-11",
            },
            {
                "name": "Cambridge",
                "country": "New Zealand",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": -37.890365,
                    "lng": 175.472965
                },
                "date": "2023-05-13",
            },
            {
                "name": "Auckland",
                "country": "New Zealand",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": -36.851790,
                    "lng": 174.764450
                },
                "date": "2023-05-14",
            },
            {
                "name": "Wellington",
                "country": "New Zealand",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": -41.291894,
                    "lng": 174.781377
                },
                "date": "2023-05-15",
            },
            {
                "name": "Picton",
                "country": "New Zealand",
                "stay": false,
                "visited": true,
                "coordinates": {
                    "lat": -41.294959,
                    "lng": 174.002559
                },
                "date": "2023-05-18",
            },
            {
                "name": "Punakaiki",
                "country": "New Zealand",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": -42.124140,
                    "lng": 171.330621
                },
                "date": "2023-05-18",
            },
            {
                "name": "Fox Glacier",
                "country": "New Zealand",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": -43.463212,
                    "lng": 170.007118
                },
                "date": "2023-05-20",
            },
            {
                "name": "Wanaka",
                "country": "New Zealand",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": -44.695875,
                    "lng": 169.141689
                },
                "date": "2023-05-23",
            },
            {
                "name": "Queenstown",
                "country": "New Zealand",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": -45.028488,
                    "lng": 168.659849
                },
                "date": "2023-05-24",
            },
            {
                "name": "Twizel",
                "country": "New Zealand",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": -44.261533,
                    "lng": 170.088743
                },
                "date": "2023-05-27",
            },
            {
                "name": "Christchurch",
                "country": "New Zealand",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": -43.530564,
                    "lng": 172.627153
                },
                "date": "2023-05-31",
            },
            {
                "name": "Kaikōura",
                "country": "New Zealand",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": -42.397673,
                    "lng": 173.677165
                },
                "date": "2023-06-03",
            },
            {
                "name": "Picton",
                "country": "New Zealand",
                "stay": false,
                "visited": true,
                "coordinates": {
                    "lat": -41.294959,
                    "lng": 174.002559
                },
                "date": "2023-06-06",
            },
            {
                "name": "Wellington",
                "country": "New Zealand",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": -41.291894,
                    "lng": 174.781377
                },
                "date": "2023-06-06",
            },
            {
                "name": "Auckland",
                "country": "New Zealand",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": -36.851790,
                    "lng": 174.764450
                },
                "date": "2023-06-07",
            },
            {
                "name": "Rarotonga",
                "country": "Cook Islands",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": -21.230702,
                    "lng": -159.776438
                },
                "date": "2023-06-08",
            },
            {
                "name": "Auckland",
                "country": "New Zealand",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": -36.851790,
                    "lng": 174.764450
                },
                "date": "2023-06-23",
            },
            {
                "name": "Vancouver",
                "country": "Canada",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 49.282489,
                    "lng": -123.130942
                },
                "date": "2023-06-26",
            },
            {
                "name": "Toronto",
                "country": "Canada",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 43.656671,
                    "lng": -79.383551
                },
                "date": "2023-07-01",
            },
            {
                "name": "Paris",
                "country": "France",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 48.856257,
                    "lng": 2.350468
                },
                "date": "2023-07-06",
            },
            {
                "name": "Menorca",
                "country": "Spain",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 39.950784,
                    "lng": 4.106663
                },
                "date": "2023-07-09",
            },
            {
                "name": "Barcelona",
                "country": "Spain",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 41.386228,
                    "lng": 2.171774
                },
                "date": "2023-07-14",
            },
            {
                "name": "Andorra la Vella",
                "country": "Andorra",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 42.506651,
                    "lng": 1.521610
                },
                "date": "2023-07-18",
            },
            {
                "name": "Toulouse",
                "country": "France",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 43.604556,
                    "lng": 1.444000
                },
                "date": "2023-07-23",
            },
            {
                "name": "Marseille",
                "country": "France",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 43.297719,
                    "lng": 5.376516
                },
                "date": "2023-07-26",
            },
            {
                "name": "Nice",
                "country": "France",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 43.711355,
                    "lng": 7.265168
                },
                "date": "2023-07-30",
            },
            {
                "name": "Monaco",
                "country": "Monaco",
                "stay": false,
                "visited": true,
                "hideLine": true,
                "coordinates": {
                    "lat": 43.737262,
                    "lng": 7.420659
                },
                "date": "2023-08-01",
            },
            {
                "name": "Nice",
                "country": "France",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 43.711355,
                    "lng": 7.265168
                },
                "date": "2023-08-01",
            },
            {
                "name": "Turin",
                "country": "Italy",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 45.070835,
                    "lng": 7.650038
                },
                "date": "2023-08-04",
            },
            {
                "name": "Milan",
                "country": "Italy",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 45.474411,
                    "lng": 9.174470
                },
                "date": "2023-08-08",
            },
            {
                "name": "Venice",
                "country": "Italy",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 45.441533,
                    "lng": 12.325523
                },
                "date": "2023-08-12",
            },
            {
                "name": "Florence",
                "country": "Italy",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 43.781073,
                    "lng": 11.248349
                },
                "date": "2023-08-15",
            },
            {
                "name": "Rome",
                "country": "Italy",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 41.907172,
                    "lng": 12.470782
                },
                "date": "2023-08-19",
            },
            {
                "name": "Vatican City",
                "country": "Vatican City",
                "stay": false,
                "visited": true,
                "coordinates": {
                    "lat": 41.903536,
                    "lng": 12.453295
                },
                "date": "2023-08-23",
            },
            {
                "name": "Rome",
                "country": "Italy",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 41.907172,
                    "lng": 12.470782
                },
                "date": "2023-08-23",
            },
            {
                "name": "Oslo",
                "country": "Norway",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 59.916475,
                    "lng": 10.750776
                },
                "date": "2023-08-24",
            },
            {
                "name": "Stavanger",
                "country": "Norway",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 58.969694,
                    "lng": 5.728056
                },
                "date": "2023-08-25",
            },
            {
                "name": "Oslo",
                "country": "Norway",
                "stay": true,
                "visited": true,
                "hideLine": true,
                "coordinates": {
                    "lat": 59.916475,
                    "lng": 10.750776
                },
                "date": "2023-08-29",
            },
            {
                "name": "Bergen",
                "country": "Norway",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 60.388604,
                    "lng": 5.328233
                },
                "date": "2023-09-01",
            },
            {
                "name": "Oslo",
                "country": "Norway",
                "stay": false,
                "visited": false,
                "hideLine": true,
                "coordinates": {
                    "lat": 59.916475,
                    "lng": 10.750776
                },
                "date": "2023-09-04",
            },
            {
                "name": "Tromso",
                "country": "Norway",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 69.675667,
                    "lng": 18.931747
                },
                "date": "2023-09-04",
            },
            {
                "name": "Longyearbyen",
                "country": "Norway",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 78.223055,
                    "lng": 15.631056
                },
                "date": "2023-09-08",
            },
            {
                "name": "Tromso",
                "country": "Norway",
                "stay": false,
                "visited": false,
                "hideLine": true,
                "coordinates": {
                    "lat": 69.675667,
                    "lng": 18.931747
                },
                "date": "2023-09-15",
            },
            {
                "name": "Oslo",
                "country": "Norway",
                "stay": true,
                "visited": true,
                "hideLine": true,
                "coordinates": {
                    "lat": 59.916475,
                    "lng": 10.750776
                },
                "date": "2023-09-15",
            },
            {
                "name": "Lillehammer",
                "country": "Norway",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 61.114981,
                    "lng": 10.467517
                },
                "date": "2023-09-16",
            },
            {
                "name": "Oslo",
                "country": "Norway",
                "stay": false,
                "visited": true,
                "hideLine": true,
                "coordinates": {
                    "lat": 59.916475,
                    "lng": 10.750776
                },
                "date": "2023-09-20",
            },
            {
                "name": "Vienna",
                "country": "Austria",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 48.212220,
                    "lng": 16.348817,
                },
                "date": "2023-09-20",
            },
            {
                "name": "Bratislava",
                "country": "Slovakia",
                "stay": false,
                "visited": true,
                "coordinates": {
                    "lat": 48.146777, 
                    "lng": 17.116603,
                },
                "date": "2023-09-22",
            },
            {
                "name": "Vienna",
                "country": "Austria",
                "stay": true,
                "visited": true,
                "hideLine": true,
                "coordinates": {
                    "lat": 48.212220,
                    "lng": 16.348817,
                },
                "date": "2023-09-22",
            },
            {
                "name": "Budapest",
                "country": "Hungary",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 47.499540,
                    "lng": 19.026276,
                },
                "date": "2023-09-24",
            },
            {
                "name": "Bucharest",
                "country": "Romania",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 44.424341,
                    "lng": 26.107340,
                },
                "date": "2023-09-28",
            },
            {
                "name": "Dubai",
                "country": "United Arab Emirates",
                "stay": false,
                "visited": false,
                "coordinates": {
                    "lat": 25.253252,
                    "lng": 55.365629,
                },
                "date": "2023-10-03"
            },
            {
                "name": "Bangkok",
                "country": "Thailand",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 13.690238,
                    "lng": 100.750123
                },
                "date": "2023-10-04",
            },
            {
                "name": "Seoul",
                "country": "South Korea",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 37.552356,
                    "lng": 126.987872 
                },
                "date": "2023-10-06",
            },
            {
                "name": "Busan",
                "country": "South Korea",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 35.171947,
                    "lng": 129.048424
                },
                "date": "2023-10-12",
            },
            {
                "name": "Jeonju",
                "country": "South Korea",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 35.835883,
                    "lng": 127.124187
                },
                "date": "2023-10-16",
            },
            {
                "name": "Seoul",
                "country": "South Korea",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 37.552356,
                    "lng": 126.987872
                },
                "date": "2023-10-19",
            },
            {
                "name": "Manila",
                "country": "Philippines",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 14.601647,
                    "lng": 120.980675
                },
                "date": "2023-10-20",
            },
            {
                "name": "El Nido",
                "country": "Philippines",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 11.193963,
                    "lng": 119.417069
                },
                "date": "2023-10-21",
            },
            {
                "name": "Manila",
                "country": "Philippines",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 14.601647,
                    "lng": 120.980675
                },
                "date": "2023-11-04",
            },
            {
                "name": "Singapore",
                "country": "Singapore",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": 1.282079,
                    "lng": 103.838756
                },
                "date": "2023-11-05",
            },
            {
                "name": "Perth",
                "country": "Australia",
                "stay": true,
                "visited": true,
                "coordinates": {
                    "lat": -31.940044, 
                    "lng": 115.865090
                },
                "date": "2023-11-10",
            },
        ];
    }
}
