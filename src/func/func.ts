export function what_language(string: String) {
  var c = string.charAt(0).charCodeAt(0);
  if (0x1100 <= c && c <= 0x11ff) return true;
  if (0x3130 <= c && c <= 0x318f) return true;
  if (0xac00 <= c && c <= 0xd7a3) return true;
  return false;
}

export function createEmail() {
  const eng = 'abcdefghijklmnopqrstuvwxyz';
  var temp = '';
  for (var i = 0; i < 8; i++) {
    temp = temp + eng.charAt(Math.floor(Math.random() * 25));
  }
  console.log(temp);
  return temp + '@douzone.com';
}

export function createPhone() {
  return (
    '010-' +
    Math.floor(Math.random() * (9999 - 1000) + 1000) +
    '-' +
    Math.floor(Math.random() * (9999 - 1000) + 1000)
  );
}

export function createDesc(name) {
  return '안녕하세요. 신규 입사자 ' + name + '입니다. 잘부탁드리겠습니다.';
}

export function createAge() {
  return Math.floor(Math.random() * (32 - 25) + 25);
}
