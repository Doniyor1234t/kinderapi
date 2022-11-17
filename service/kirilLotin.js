

class KirilLotin {
    kirlot = (text) => {
        console.log("funksiya",text);
        let lat = {'a':'а','q':'қ','s':'с','d':'д','e':'е','r':'р','f':'ф','t':'т','g':'г','y':'й','h':'ҳ','u':'у','j':'ж','i':'и','k':'к','o':'о','l':'л','p':'п','z':'з','x':'х','s':'с','v':'в','b':'б','n':'н','m':'м','ch':'ч',' ':' '}
        let kir = {'а':'a','қ':'q','с':'s','д':'d','е':'e','р':'r','ф':'f','т':'t','г':'g','й':'y','ҳ':'h','у':'u','ж':'j','и':'i','к':'k','о':'o','л':'l','п':'p','з':'z','х':'x','с':'s','в':'v','б':'b','н':'n','м':'m','ш':'sh','ч':'ch', ' ':' '}
        let res = ''
        text = text.toLowerCase().split('')
        let letterCount = 0
        while (letterCount < text.length) {
            if (text[letterCount]+text[letterCount+1]=='sh') {
                res+='ш'
                letterCount+=2
                continue
            }
            if (text[letterCount]+text[letterCount+1]=='ch') {
                res+='ч'
                letterCount+=2
                continue
            }
            if (text[letterCount]+text[letterCount+1]=='yo') {
                res+='ё'
                letterCount+=2
                continue
            }
            if (text[letterCount]+text[letterCount+1]=='ya') {
                res+='я'
                letterCount+=2
                continue
            }
            if (text[letterCount]+text[letterCount+1]=="o'") {
                res+='ў'
                letterCount+=2
                continue
            }
            if (text[letterCount]+text[letterCount+1]=="g'") {
                res+='ғ'
                letterCount+=2
                continue
            }
            if (lat[text[letterCount]]) {
                res+=lat[text[letterCount]]
            }
            if (kir[text[letterCount]]) {
                res+=kir[text[letterCount]]
            }
            letterCount++
        }
        return res
    }
}

module.exports = new KirilLotin();