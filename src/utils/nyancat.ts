let _nyan = 0;
const __nyan = [[
  "+      o     +              o      ",
  "    +             o     +       +  ",
  "o          +                       ",
  "    o  +           +        +      ",
  "+        o     o       +        o  ",
  "-_-_-_-_-_-_-_,------,      o      ",
  "_-_-_-_-_-_-_-|   /\\_/\\            ",
  "-_-_-_-_-_-_-~|__( ^ .^)  +     +  ",
  "_-_-_-_-_-_-_-\"\"  \"\"               ",
  "+      o         o   +       o     ",
  "    +         +                    ",
  "o        o         o      o     +  ",
  "    o           +                  ",
  "+      +     o        o      +     "],
  [
    "+      o     +              +      ",
    "    o             o     o       +  ",
    "o          +                       ",
    "    +  o           +        o      ",
    "o        o     o       +        o  ",
    "_-_-_-_-_-_-_-,------,      +      ",
    "-_-_-_-_-_-_-_|   /\\_/\\            ",
    "_-_-_-_-_-_-_-|__( ^ .^)  o     +  ",
    "-_-_-_-_-_-_-_ \"\"  \"\"              ",
    "+      +         o   +       o     ",
    "    o         +                    ",
    "+        +         +      +     o  ",
    "    +           o                  ",
    "+      o     o        o      +     "
  ]];

function nyan() {
  console.clear();
  console.log(__nyan[_nyan].join("\n"))
  if (_nyan == 0) {
    _nyan = 1;
  } else {
    _nyan = 0;
  }
}

const isProduction = process.env.NODE_ENV === 'production'

export default function (): void {
  if (isProduction) {
    window.setInterval(nyan, 300)
    console.log('尼怎麼來ㄌ? 這裡不是尼該來的地方喵！！')
    console.log('可4既然如此那就來破解我吧喵～')
  }
}
