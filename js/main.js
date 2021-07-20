const $video = document.querySelector('#video');
const $backward = document.querySelector('#backward');
const $pause = document.querySelector('#pause');
const $play = document.querySelector('#play');
const $forward = document.querySelector('#forward');

$play.addEventListener('click', handlePlay);
$pause.addEventListener('click', handlePause);
$backward.addEventListener('click', handleBackward);
$forward.addEventListener('click', handleForward);

function handlePlay(){
	$video.play()
	$play.hidden = true
	$pause.hidden = false
}

function handlePause(){
	$video.pause()
	$play.hidden = false
	$pause.hidden = true
}

function handleBackward(){
	$video.currentTime -= 10
}
function handleForward(){
	$video.currentTime += 10
}
const $progress = document.querySelector('#progress');
$video.addEventListener('loadedmetadata', handleLoaded)

function handleLoaded(){
	$progress.max = $video.duration
}

$video.addEventListener('timeupdate', handleTimeupdate)

function handleTimeupdate(){
	$progress.value = $video.currentTime
}

$progress.addEventListener('input', handleInput)

function handleInput(){
	$video.currentTime = $progress.value
}