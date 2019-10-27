function wait(number){
   return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve()
        }, number)
    })
}

console.log(wait(4000))


