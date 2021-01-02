/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
    address: "0.0.0.0", // Address to listen on, can be:
    // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
    // - another specific IPv4/6 to listen on a specific interface
    // - "", "0.0.0.0", "::" to listen on any interface
    // Default, when address config is left out, is "localhost"
    port: 8080,
    ipWhitelist: ["172.23.0.1", "172.19.0.1", "127.0.0.1", "::ffff:127.0.0.1", "::1", "0.0.0.0", 'localhost'], // Set [] to allow all IP addresses
    // or add a specific IPv4 of 192.168.1.5 :
    // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
    // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
    // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

    language: "en",
    timeFormat: 24,
    units: "metric",

    modules: [
        {
            module: "alert",
        },
        {
            module: "updatenotification",
            position: "top_bar"
        },
        {
            module: "clock",
            position: "top_left",
            config: {
                showSunTimes: true,
                secondsColor: '#cefa87',
            }
        },
        {
            module: 'MMM-JokeAPI',
            position: 'top_right',
            config: {
                category: "Programming"
            }
        },

        {
            module: "calendar",
            header: "",
            position: "top_left",
            config: {
                fetchInterval: 1200000, // 20 minutes
                calendars: [
                    {
                        symbol: "tasks",
                        url: "https://calendar.google.com/calendar/ical/g1fnn519u7gf13acakf62gmdm0%40group.calendar.google.com/private-b89c51568a9f54b7f919a8026a09e890/basic.ics"
                    },
                    {
                        symbol: "briefcase",
                        url: "https://calendar.google.com/calendar/ical/lvrkh1kq15j8lhq7n0i1g0prd8%40group.calendar.google.com/private-8ac2388055ac4b1f32e75e5afa458d68/basic.ics"
                    },
                    {
                        symbol: "bible",
                        url: "https://calendar.google.com/calendar/ical/mateusz.dargacz%40gmail.com/private-4f6a1e429eb22d5fafcb0a1e85acde1c/basic.ics"
                    }
                ]
            }
        },
        {
            module: "compliments",
            position: "bottom_bar",
            updateInterval: 60000
        },
        {
            module: "currentweather",
            position: "top_right",
            config: {
                location: "New York",
                locationID: "",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
                appid: "YOUR_OPENWEATHER_API_KEY"
            }
        },
        {
            module: "weatherforecast",
            position: "top_right",
            header: "Weather Forecast",
            config: {
                location: "New York",
                locationID: "5128581",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
                appid: "YOUR_OPENWEATHER_API_KEY"
            }
        },
        {
            module: "newsfeed",
            position: "bottom_bar",
            config: {
                feeds: [
                    {
                        title: "New York Times",
                        url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
                    }
                ],
                showSourceTitle: true,
                showPublishDate: true,
                broadcastNewsFeeds: true,
                broadcastNewsUpdates: true
            }
        },
        {
            module: "MMM-GoogleTTS", // no `position` is needed.
            config: {
                welcome: ["May the force be with you", "Live long and prosper"],
                // String or Array of String or callback function to return String or Array. To disable this feature, set to null.
                /* Other example
                welcome: null,
                welcome: "Hello",
                welcome: ()=> {
                  var d = Math.floor((Math.random() * 10) + 1)
                  return "Today's Lucky number is" + d
                },
                */

                dailyCharLimit: 18000,
                // 60*60 * 5. I think it's enough for daily usage. If you have a will to pay, you can expand this value as your wish. But free usage will be enough.
                // Warning. When you use WaveNet voice, your free quota will be `1 Million per month` not `4 Million`.

                sourceType: "text",
                // "text" or "ssml".

                voiceName: "en-US-Standard-C",
                //If exists. e.g)"en-US-Standard-C". You can select specific voice name when there are many voices with same languageCode and gender.
                // voiceName should be matched with languageCode and ssmlGender

                languageCode: "en-US",
                ssmlGender: "FEMALE",
                //"MALE", "FEMALE", "NEUTRAL" or "SSML_VOICE_GENDER_UNSPECIFIED"
                // supported voices, languages and gender;
                // https://cloud.google.com/text-to-speech/docs/voices


                playCommand: "mpg123 %OUTPUTFILE%",
                // aplay, mpg321, afplay, as your wish....
                // sometimes you should give more options to play correctly.
                // e.g) "aplay -D plughw:1,0 $OUTPUTFILE%"

                audioEncoding: "LINEAR16",
                // LINEAR16 (.wav) or MP3 (.mp3) for playCommand. You don't need to modify this when you use `aplay`

                notificationTrigger: {
                    "TEST_TTS": "Test TTS notification is coming",
                    "SHOW_ALERT": (payload, sender) => {
                        return payload.message
                    },
                },
                // You can hook specific notification to speak something. String or callback function could be available.

                // You don't need to modify belows;
                notifications: {
                    TTS_SAY: "TTS_SAY",
                    TTS_SAY_STARTING: "TTS_SAY_STARTING",
                    TTS_SAY_ENDING: "TTS_SAY_ENDING",
                    TTS_SAY_ERROR: "TTS_SAY_ERROR"
                },
                credentialPath: "/opt/credentials_google_speach.json",
            }
        },
        {
            module: 'MMM-Remote-Control',
            config: {
                customCommand: {},  // Optional, See "Using Custom Commands" below
                showModuleApiMenu: true, // Optional, Enable the Module Controls menu
                secureEndpoints: true, // Optional, See API/README.md
                // uncomment any of the lines below if you're gonna use it
                // customMenu: "custom_menu.json", // Optional, See "Custom Menu Items" below
                // apiKey: "", // Optional, See API/README.md for details
                // classes: {} // Optional, See "Custom Classes" below
            }
        },
    ]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
    module.exports = config;
}
