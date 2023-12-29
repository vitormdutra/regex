const text = 'you are soo funny ... hahahahah'

console.log(text.match(/(ha)+/g))

const text2 = 'http://google.com www.microsoft.com.br https://azure.com.ck'

console.log(text2.match(/(http:\/\/)?(www.\.)?\w+\.\w{2,}(\.\w{2})?/g))