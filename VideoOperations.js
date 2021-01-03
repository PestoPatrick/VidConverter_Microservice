let ffmpeg = require("fluent-ffmpeg");
let command = ffmpeg();

function ConvertVideoToMP4() {
    // the most basic command you can do
    // command.input('../SourceVid/testvideo.mov').output('output.mp4')

    //Making a command to create an audio file and multiple bitrates of the videos at once
    command
        .input('./SourceVid/DogTest.mp4')
        .output('./SourceVid/output.m4a')
        .audioCodec('aac')
        .audioBitrate('128k')
        .noVideo()
        .output('./SourceVid/output1080.mp4')
        .outputOptions('-g','72','-keyint_min','72')
        .videoCodec('libx264')
        .noAudio()
        .videoBitrate('7200k')
        .autoPad()
        .size('1920x1080')
        .output('./SourceVid/output720.mp4')
        .outputOptions('-g','72','-keyint_min','72')
        .videoCodec('libx264')
        .noAudio()
        .videoBitrate('3000k')
        .autoPad()
        .size('1280x720')
        .output('./SourceVid/output360.mp4')
        .outputOptions('-g','72','-keyint_min','72')
        .videoCodec('libx264')
        .noAudio()
        .videoBitrate('1200k')
        .autoPad()
        .size('640x360')
        .on('end', function() {
            console.log('Finished processing');
        })
        .on('error', (err) => {
            console.log('an error happened: ' + err.message);
        })
        .run()



    /*command
        .input('./SourceVid/testvideo.mov')
        .output('output.mp4')
        .on('end', () => console.log('finished processing'))
        .on('error', (err) => {
            console.log('an error happened: ' + err.message);
        })
        .save('output.mp4')*/

}

function ConvertVideoToManifests(video) {

}

function UploadVideoToS3(video) {

}

exports.ConvertVideoToMP4 = ConvertVideoToMP4;
exports.ConvertVideoToManifests = ConvertVideoToManifests
exports.UploadVideoToS3 = UploadVideoToS3;
