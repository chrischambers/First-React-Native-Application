export const Api = {
  getLatestUserPrediction(username) {
    /*
     I'm obviously mocking this out, but ordinarily we'd use something like
     the following mechanism to grab the relevant data:

     fetch(`http://go.get/data/from/rest/api/v1/predictions/${username}/latest`)
       .then(resp => resp.json())
       .then(...etc)
    */
    return require('./mockedData.json')[0]
  },

}
