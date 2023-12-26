const text = 'list of files mp3: jazz.mp3,rock.mp3,podcast.mp3,blues.mp3'

console.log(text.match(/\.mp3/g))

console.log(text.match(/\w+\.mp3/g))