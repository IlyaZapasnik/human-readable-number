module.exports = function toReadable (number) {
    
        if (number < 0)
        return false;
       firstClass = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
       secondClass = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
       thirdClass = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
      if (number === 0) return 'zero'
      function translate(number) {
          word = ""
          if (number < 10) {
              word = firstClass[number] + ' '
          }
          else if (number < 20) {
              word = secondClass[number - 10] + ' '
          }
          else if (number < 100) {
              rem = translate(number % 10)
              word = thirdClass[(number - number % 10) / 10 - 2] + ' ' + rem
          }
          else if (number < 1000) {
              word = firstClass[Math.trunc(number / 100)] + ' hundred ' + translate(number % 100)
          }
          else if (number < 1000000) {
              word = translate(parseInt(number / 1000)).trim() + ' thousand ' + translate(number % 1000)
          }
          else if (number < 1000000000) {
              word = translate(parseInt(number / 1000000)).trim() + ' million ' + translate(number % 1000000)
          }
          else {
              word = translate(parseInt(number / 1000000000)).trim() + ' billion ' + translate(number % 1000000000)
          }
          return word
      }
       result = translate(number) 
      return result.trim();
    
}

