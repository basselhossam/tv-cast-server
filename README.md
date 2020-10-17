# SmartTV Cast Server
this is a localserver used for streaming videos from websites directly to your smartTV

it uses the [Video TV Cast](https://video-tv-cast.com/) service

## How it works:

1. Download exe from [here](https://github.com/basselhossam/tv-cast-server/raw/master/build/tv-cast-server.exe) or clone this repo and build the source code yourself
2. Send `GET` Request to `http://localhost:49080/setVideo?videoURL=VIDEO_URL_HERE` (You can use browser extensions for this part to get the video url)
3. Download [TV Cast](https://video-tv-cast.com/) app from your smartTV store provider
4. Open TV Cast app and adjust the ip to your local ip address
5. Enjoy casting :D
6. To change the video at any time repeat step 2 with different video url, and it will start playing automatically

## Notes

* Make sure that port `49080` is not used by any other service before running the app
* Make sure that port `49080` is exposed and can be accessed in your local network
* This is not an official [TV Cast](https://video-tv-cast.com/) Program it's just using the same technology used in the apps
* [TV Cast](https://video-tv-cast.com/) may change the way the app is working and causing this program to stop working but so far it's working fine with not problems at all