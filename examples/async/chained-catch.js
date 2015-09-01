someWebRequest()
    .then(function(data) {
        return data.map(function(d) {
            return d; // Some transformation ...
        });
    })
    .catch(function(err) {
        return { error: "Something happened!" };
    })
    .then(function(data) {
        console.log(data); // { error: "Something happened!" }
    });

function someWebRequest() {
    return Q.reject();
}
