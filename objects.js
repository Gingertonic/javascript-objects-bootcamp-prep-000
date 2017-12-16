var playlist = {
  adele: 'Hello',
  queen: 'I Want to Break Free',
  beti: 'James and Celia'
};

function updatePlaylist(playlist, artistName, songName) {
  playlist[artistName] = songName;
  return playlist;
}

function removeFromPlaylist(playlist1, artistName){
  delete playlist1.artistName;
  return playlist1;
}
