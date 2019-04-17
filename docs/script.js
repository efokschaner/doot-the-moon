let pattern = ['doot', 'doot', 'doot', 'doot-the-moon'];
let curIndex = 0;

function getNextSoundName() {
    let ret = pattern[curIndex];
    curIndex = (curIndex + 1) % pattern.length;
    return ret;
}

let sounds = {
  'doot':  new Howl({
    src: ['doot.ogg']
  }),
  'doot-the-moon': new Howl({
    src: ['doot-the-moon.ogg']
  })
};

function doot() {
  let nextSoundName = getNextSoundName();
  let sound = sounds[nextSoundName];
  /*let soundId =*/ sound.play();
}